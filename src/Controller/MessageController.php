<?php

namespace App\Controller;

use Pusher\Pusher;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class MessageController extends AbstractController
{
    private $pusher;

    public function __construct(Pusher $pusher)
    {
        $this->pusher = $pusher;
    }

    #[Route('/message', name: 'app_create_message', methods: ["POST"])]
    public function sendMessage()
    {
        $this->pusher->trigger('message', 'new-greeting', [1]);

        return new Response();
    }
}
