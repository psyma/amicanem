<?php

namespace App\Controller;

use App\Repository\UserRepository; 
use App\Repository\MessageRepository;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController; 
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;

class UserController extends AbstractController
{
    public function __construct(private UserRepository $userRepository, private MessageRepository $messageRepository)
    { 
    }

    #[Route('/get_users/{uid}', name: 'app_get_users', methods: ["GET"])]
    public function get_users(string $uid): JsonResponse
    {
        $this->denyAccessUnlessGranted("ROLE_USER");  
        $this->denyAccessUnlessCurrentUser($uid);
        
        $users = $this->userRepository->findAll();
        return new JsonResponse($users);
    }

    #[Route('/get_user_last_seen/{uid}/{id}', name: 'app_get_user_last_seen', methods: ["GET"])]
    public function get_user_last_seen(string $uid, string $id): JsonResponse
    {
        $this->denyAccessUnlessGranted("ROLE_USER");  
        $this->denyAccessUnlessCurrentUser($uid);

        $message = $this->messageRepository->findLastMessageBySender($id); 
        return new JsonResponse(['timestamp' => $message->getTimestamp()]);
    }

    private function denyAccessUnlessCurrentUser($uid) {
        $user = $this->userRepository->findOneByEmail($this->getUser()->getUserIdentifier());
        if ($user->getUserDetails()->getUid() != $uid) {
            $exception = $this->createAccessDeniedException("Access denied."); 
            throw $exception;
        }
    }
}
