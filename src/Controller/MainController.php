<?php

namespace App\Controller;

use Pusher\Pusher;
 
use App\Entity\UserPassphrase;
use App\Entity\UserPrivateKey;
use App\Entity\UserPublicKey;
use App\Entity\UserSettings;
use App\Form\UserSettingsFormType;
use App\Repository\UserRepository; 
use Doctrine\ORM\EntityManagerInterface;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;

class MainController extends AbstractController
{ 
    private $pusher;

    public function __construct(Pusher $pusher, private UserRepository $userRepository, private EntityManagerInterface $entityManager)
    { 
        $this->pusher = $pusher;
    }
    
    #[Route('/', name: 'app_main')]
    public function index(Request $request): Response
    {
        $users = $this->userRepository->findAll();
        $currentUser = $this->userRepository->findOneByEmail($this->getUser()->getUserIdentifier());
        $userDetails = $currentUser->getUserDetails();

        $uid = $userDetails->getUid();
        $publickey = $userDetails->getPublickey() == null ? null : $userDetails->getPublickey()->getPublickey();
        $privatekey = $userDetails->getPrivatekey() == null ? null : $userDetails->getPrivatekey()->getPrivatekey();
        $passphrase = $userDetails->getPassphrase() == null ? null : $userDetails->getPassphrase()->getPassphrase();
        
        $settingsForm = $this->handleUserSettingsFormRequest($request);
        
        return $this->render('main/index.html.twig', [
            'controller_name' => 'MainController',
            'users' => $users,
            'currentUser' => $currentUser,
            'uid' => $uid,
            'publickey' => $publickey,
            'privatekey' => $privatekey,
            'passphrase' => $passphrase,
            'settingsForm' => $settingsForm,
        ]);
    } 

    #[Route('/send_typing_notification', name: 'app_send_typing_notification', methods: ["POST"])]
    public function sendTypingNotification(Request $request): JsonResponse
    {
        $this->denyAccessUnlessGranted("ROLE_USER");  
        $this->denyAccessUnlessCurrentUser($request->request->get("uid"));

        $isTyping = $request->request->get("isTyping");  

        $event = $request->request->get("event");
        $channels = $request->request->get("channels");
        $this->pusher->trigger($channels, $event, $isTyping);

        return new JsonResponse($isTyping);
    }

    #[Route('/get_users/{uid}', name: 'app_get_users', methods: ["GET"])]
    public function get_users(string $uid): JsonResponse
    {
        $this->denyAccessUnlessGranted("ROLE_USER");  
        $this->denyAccessUnlessCurrentUser($uid);
        
        $users = $this->userRepository->findAll();
        return new JsonResponse($users);
    }

    #[Route('/pusher_auth', name: 'app_pusher_auth', methods: ["POST"])]
    public function pusher_auth(Request $request): JsonResponse
    {
        $this->denyAccessUnlessGranted("ROLE_USER");  
        $this->denyAccessUnlessCurrentUser($request->request->get("uid"));

        $user = $this->userRepository->findOneByEmail($this->getUser()->getUserIdentifier());

        $channelName = $request->request->get('channel_name');
        $socketId = $request->request->get('socket_id');
        $userId = $user->getId();

        $userInfo = [
            'id' => $user->getId()
        ];

        $auth = $this->pusher->authorizePresenceChannel($channelName, $socketId, $userId, $userInfo);

        return new JsonResponse(json_decode($auth, true));
    }

    #[Route('/set_encryption_details', name: 'app_encryption_details', methods: ["POST"])]
    public function set_encryption_details(Request $request): JsonResponse {
        $this->denyAccessUnlessGranted("ROLE_USER");  
        $this->denyAccessUnlessCurrentUser($request->request->get("uid"));

        $user = $this->userRepository->findOneByEmail($this->getUser()->getUserIdentifier());
        $publickey = $request->request->get("publickey");
        $privatekey = $request->request->get("privatekey");
        $passphrase = $request->request->get("passphrase");

        if ($user) {
            $userDetails = $user->getUserDetails();
            $userPublickey = new UserPublicKey();
            $userPrivatekey = new UserPrivateKey();
            $userPassphrase = new UserPassphrase();
            
            $userPublickey->setPublickey($publickey);
            $userPrivatekey->setPrivatekey($privatekey);
            $userPassphrase->setPassphrase($passphrase);

            $userDetails->setPublickey($userPublickey);
            $userDetails->setPrivatekey($userPrivatekey);
            $userDetails->setPassphrase($userPassphrase);

            
            $this->entityManager->persist($userDetails);
            $this->entityManager->flush();
        }
        else {
            return new JsonResponse(false);
        }

        return new JsonResponse(true);
    }

    private function handleUserSettingsFormRequest($request)
    {
        $currentUser = $this->userRepository->findOneByEmail($this->getUser()->getUserIdentifier());
        $userDetails = $currentUser->getUserDetails();

        $userSettings = new UserSettings();
        if ($userDetails->getUserSettings() != null) {
            $userSettings = $userDetails->getUserSettings();
        } 
        else {
            $userDetails->setUserSettings($userSettings);
        }
        
        $settingsForm = $this->createForm(UserSettingsFormType::class, $userSettings);
        $settingsForm->handleRequest($request);
        if ($settingsForm->isSubmitted() && $settingsForm->isValid()) {
            $isNotification = $settingsForm->get('isNotification')->getData();
            $isSaveMessage = $settingsForm->get('isSaveMessage')->getData();
            $isTwoFactorAuth = $settingsForm->get('isTwoFactorAuth')->getData();

            $userSettings->setNotification($isNotification);
            $userSettings->setSaveMessage($isSaveMessage);
            $userSettings->setTwoFactorAuth($isTwoFactorAuth); 

            $this->entityManager->persist($userSettings);
            $this->entityManager->flush($userSettings);
        }

        return $settingsForm;
    }

    private function denyAccessUnlessCurrentUser($uid) {
        $user = $this->userRepository->findOneByEmail($this->getUser()->getUserIdentifier());
        if ($user->getUserDetails()->getUid() != $uid) {
            $exception = $this->createAccessDeniedException("Access denied."); 
            throw $exception;
        }
    }
}
