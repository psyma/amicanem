<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response; 

class DefaultController extends AbstractController
{ 
    public function notFound(): Response
    {
        return $this->redirectToRoute('app_main');
        
        return $this->render('default/index.html.twig', [
            'controller_name' => 'DefaultController',
        ]);
    }
}
