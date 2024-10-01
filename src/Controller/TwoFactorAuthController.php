<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Scheb\TwoFactorBundle\Security\TwoFactor\Provider\Email\Generator\CodeGeneratorInterface;

class TwoFactorAuthController extends AbstractController
{
    #[Route('/2fa-authentication', name: 'app_two_factor_auth')]
    public function index(): Response
    {
        return $this->render('two_factor_auth/index.html.twig', [
            'controller_name' => 'TwoFactorAuthController',
        ]);
    }

    #[Route('/2fa-resend-code', name: 'app_two_factor_resend_code')]
    public function re_send_code(CodeGeneratorInterface $codeGenerator): RedirectResponse
    { 
        $user = $this->getUser();
        $codeGenerator->generateAndSend($user);
        return $this->redirectToRoute("2fa_login");
    }
}
