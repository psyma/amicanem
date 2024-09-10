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

    private function denyAccessUnlessCurrentUser($uid) {
        $user = $this->userRepository->findOneByEmail($this->getUser()->getUserIdentifier());
        if ($user->getUserDetails()->getUid() != $uid) {
            $exception = $this->createAccessDeniedException("Access denied."); 
            throw $exception;
        }
    }
}
