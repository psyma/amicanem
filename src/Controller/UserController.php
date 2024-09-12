<?php

namespace App\Controller;

use App\Repository\UserRepository; 

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController; 
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;

class UserController extends AbstractController
{
    public function __construct(private UserRepository $userRepository)
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

    private function denyAccessUnlessCurrentUser($uid) {
        $user = $this->userRepository->findOneByEmail($this->getUser()->getUserIdentifier());
        if ($user->getUserDetails()->getUid() != $uid) {
            $exception = $this->createAccessDeniedException("Access denied."); 
            throw $exception;
        }
    }
}
