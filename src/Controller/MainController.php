<?php

namespace App\Controller;

use App\Entity\User;
use App\Entity\UserDetails;
use App\Entity\UserPassphrase;
use App\Entity\UserPrivateKey;
use App\Entity\UserPublicKey;
use App\Repository\UserRepository; 
use Doctrine\ORM\EntityManagerInterface;


use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;

class MainController extends AbstractController
{ 
    public function __construct(private UserRepository $userRepository, private EntityManagerInterface $entityManager)
    { 
    }
    
    #[Route('/', name: 'app_main')]
    public function index(): Response
    {
        $users = $this->userRepository->findAll();
        $currentUser = $this->userRepository->findOneByEmail($this->getUser()->getUserIdentifier());
        $userDetails = $currentUser->getUserDetails();

        $uid = $userDetails->getUid();
        $publickey = $userDetails->getPublickey() == null ? null : $userDetails->getPublickey()->getPublickey();
        $privatekey = $userDetails->getPrivatekey() == null ? null : $userDetails->getPrivatekey()->getPrivatekey();
        $passphrase = $userDetails->getPassphrase() == null ? null : $userDetails->getPassphrase()->getPassphrase();
 
        return $this->render('main/index.html.twig', [
            'controller_name' => 'MainController',
            'users' => $users,
            'currentUser' => $currentUser,
            'uid' => $uid,
            'publickey' => $publickey,
            'privatekey' => $privatekey,
            'passphrase' => $passphrase,
        ]);
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

    private function denyAccessUnlessCurrentUser($uid) {
        $user = $this->userRepository->findOneByEmail($this->getUser()->getUserIdentifier());
        if ($user->getUserDetails()->getUid() != $uid) {
            $exception = $this->createAccessDeniedException("Access denied."); 
            throw $exception;
        }
    }
}
