<?php

namespace App\Mailer;

use Scheb\TwoFactorBundle\Model\Email\TwoFactorInterface;
use Scheb\TwoFactorBundle\Mailer\AuthCodeMailerInterface;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mime\Address;
use Symfony\Component\Mailer\MailerInterface;

class AuthCodeMailer implements AuthCodeMailerInterface {
   

    public function __construct(  private readonly MailerInterface $mailer) 
    { }

    public function sendAuthCode(TwoFactorInterface $user): void
    {
        $authCode = $user->getEmailAuthCode();
        if (null === $authCode) {
            return;
        } 

        $template = (new TemplatedEmail())
            ->from(new Address('no-reply@amicanem.com', 'Amicanem'))
            ->to($user->getEmailAuthRecipient())
            ->subject('Authentication code')
            ->htmlTemplate('2fa_email.html.twig')
            ->context([
                'code' => $authCode,
                'currentYear' => date("Y")
            ]); 

        $this->mailer->send($template);
    }
}