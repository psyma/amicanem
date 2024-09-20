<?php

namespace App\Controller;

use Pusher\Pusher;

use App\Entity\Message;
use App\Repository\UserRepository;
use App\Repository\MessageRepository;
use Doctrine\ORM\EntityManagerInterface; 

use Symfony\Component\Filesystem\Filesystem;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\Request; 
use Symfony\Component\HttpFoundation\JsonResponse;

class MessageController extends AbstractController
{
    private $pusher;

    public function __construct(Pusher $pusher, private UserRepository $userRepository, private MessageRepository $messageRepository, private EntityManagerInterface $entityManager)
    {
        $this->pusher = $pusher;
    }

    #[Route('/create_text_message', name: 'app_create_text_message', methods: ["POST"])]
    public function createTextMessage(Request $request): JsonResponse
    {
        $this->denyAccessUnlessGranted("ROLE_USER");  
        $this->denyAccessUnlessCurrentUser($request->request->get("uid"));

        $sender = $request->request->get("sender");
        $receiver = $request->request->get("receiver");
        $type = $request->request->get("type");
        $content = $request->request->get("content");
        $timestamp = $request->request->get("timestamp");  
        $isSaveMessage = $request->request->get("isSaveMessage");  

        $message = new Message(); 
        $message->setSender($sender);
        $message->setReceiver($receiver);
        $message->setType($type); 
        $message->setContent($content);
        $message->setTimestamp($timestamp);  
        $message->setSeen(false);
 
        if ($isSaveMessage == "true") {
            $this->entityManager->persist($message);
            $this->entityManager->flush();  
        }

        $event = $request->request->get("event");
        $channels = $request->request->get("channels");
        $this->pusher->trigger($channels, $event, $message);
        
        return new JsonResponse($message); 
    } 

    #[Route('/create_image_message', name: 'app_create_image_message', methods: ["POST"])]
    public function createImageMessage(Request $request): JsonResponse
    {
        $this->denyAccessUnlessGranted("ROLE_USER");
        $this->denyAccessUnlessCurrentUser($request->request->get("uid"));

        $file = $request->files->get("file");    
        $extension = $request->files->get("extension");

        $uploadPath = $this->getParameter('kernel.project_dir') . '/public/uploads/';
        $file->move($uploadPath, $file->getClientOriginalName() . $extension);

        $currentDate = date('m-d-Y'); 
        $dateTime = \DateTime::createFromFormat('m-d-Y H:i:s', $currentDate . ' 00:00:00', new \DateTimeZone('UTC'));
        $epochTimestamp = $dateTime->getTimestamp();
        $directoryPath = (string) $epochTimestamp; 

        $filepath = $uploadPath . $file->getClientOriginalName() . $extension;
        $filename = $directoryPath . '/images/' . md5(uniqid()) . md5(uniqid()) . $extension;

        $filesystem = new Filesystem(); 
        $filesystem->copy($filepath, $uploadPath . $filename); 
        $filesystem->remove($filepath);

        return new JsonResponse("uploads/" . $filename);
    }

    #[Route('/create_audio_message', name: 'app_create_audio_message', methods: ["POST"])]
    public function createAudioMessage(Request $request): JsonResponse
    {
        $this->denyAccessUnlessGranted("ROLE_USER");
        $this->denyAccessUnlessCurrentUser($request->request->get("uid"));
        
        $file = $request->files->get("file");    
        $extension = ".webm";

        $uploadPath = $this->getParameter('kernel.project_dir') . '/public/uploads/';
        $file->move($uploadPath, $file->getClientOriginalName() . $extension);

        $currentDate = date('m-d-Y'); 
        $dateTime = \DateTime::createFromFormat('m-d-Y H:i:s', $currentDate . ' 00:00:00', new \DateTimeZone('UTC'));
        $epochTimestamp = $dateTime->getTimestamp();
        $directoryPath = (string) $epochTimestamp; 

        $filepath = $uploadPath . $file->getClientOriginalName() . $extension;
        $filename = $directoryPath . '/audios/' . md5(uniqid()) . md5(uniqid()) . $extension;

        $filesystem = new Filesystem(); 
        $filesystem->copy($filepath, $uploadPath . $filename); 
        $filesystem->remove($filepath);
         
        return new JsonResponse("uploads/" . $filename);
    }

    #[Route('/get_messages/{uid}/{currentUserId}/{userToChatId}/{page}/{pageSize}/{toReverse}', name: 'app_get_messages', methods: ["GET"])]
    public function get_messages(string $uid, int $currentUserId, int $userToChatId, int $page, int $pageSize, int $toReverse): JsonResponse {  
        $this->denyAccessUnlessGranted("ROLE_USER");   
        $this->denyAccessUnlessCurrentUser($uid);
        
        $messages = $this->messageRepository->findBySenderAndReceiver($currentUserId, $userToChatId, $page, $pageSize);
        usort($messages, function($a, $b) {
            $dateTimeA = new \DateTime('@' . $a->getTimestamp());
            $dateTimeB = new \DateTime('@' . $b->getTimestamp());
            return $dateTimeA <=> $dateTimeB;
        }); 
         
        if ($toReverse) {
            $messages = array_reverse($messages);
        }
      
        return new JsonResponse($messages);
    }

    #[Route('/get_last_messages/{uid}/{currentUserId}', name: 'app_get_last_messages', methods: ["GET"])]
    public function get_last_messages(string $uid, int $currentUserId): JsonResponse {
        $this->denyAccessUnlessGranted("ROLE_USER");  
        $this->denyAccessUnlessCurrentUser($uid);

        $last_messages = array();
        $users = $this->userRepository->findAll();
        $currentUser = $this->userRepository->find($currentUserId);
        
        foreach($users as $user) {
            if ($user != $currentUser) {
                $message = $this->messageRepository->findLastMessageBetweenUsers($currentUser->getId(), $user->getId());
                if ($message != null) { 
                    array_push($last_messages, $message);
                }
            } 
        }  

        return new JsonResponse($last_messages);
    } 

    private function denyAccessUnlessCurrentUser($uid) {
        $user = $this->userRepository->findOneByEmail($this->getUser()->getUserIdentifier());
        if ($user->getUserDetails()->getUid() != $uid) {
            $exception = $this->createAccessDeniedException("Access denied."); 
            throw $exception;
        }
    }
}
