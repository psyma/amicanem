<?php

namespace App\Controller;

use App\Repository\UserRepository; 
use Doctrine\ORM\EntityManagerInterface; 

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class MainController extends AbstractController
{
    public function __construct(private UserRepository $userRepository, private EntityManagerInterface $entityManager)
    {
    }
    
    #[Route('/', name: 'app_main')]
    public function index(): Response
    {
        $users = $this->userRepository->findAll();
        $currentUser = $this->getUser();

        return $this->render('main/index.html.twig', [
            'controller_name' => 'MainController',
            'users' => $users,
            'currentUser' => $currentUser
        ]);
    }
}
