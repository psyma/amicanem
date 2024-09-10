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
use Symfony\Component\HttpFoundation\Response;
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
        $this->pusher->trigger('message', $event, $message);
 
        return new JsonResponse($message); 
    }

    private function denyAccessUnlessCurrentUser($uid) {
        $user = $this->userRepository->findOneByEmail($this->getUser()->getUserIdentifier());
        if ($user->getUserDetails()->getUid() != $uid) {
            $exception = $this->createAccessDeniedException("Access denied."); 
            throw $exception;
        }
    }
}
