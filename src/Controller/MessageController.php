<?php

namespace App\Controller;

use Pusher\Pusher;

use App\Entity\Message;
use App\Repository\UserRepository;
use App\Repository\MessageRepository;
use Doctrine\ORM\EntityManagerInterface; 

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\Request; 
use Symfony\Component\HttpFoundation\JsonResponse;

class MessageController extends AbstractController
{
    private $pusher;

    public function __construct(Pusher $pusher, private UserRepository $userRepository, private EntityManagerInterface $entityManager, private MessageRepository $messageRepository)
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
        $this->pusher->trigger('messages', $event, $message);
        
        return new JsonResponse($message); 
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
