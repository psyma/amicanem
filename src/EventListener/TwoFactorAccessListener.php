<?php
 
namespace App\EventListener;

use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\Routing\RouterInterface; 
use Symfony\Component\HttpKernel\Event\RequestEvent; 
use Symfony\Bundle\SecurityBundle\Security as SecurityBundleSecurity; 

class TwoFactorAccessListener
{
    private $security;
    private $router;
    private $requestStack;

    public function __construct(SecurityBundleSecurity $security, RouterInterface $router, RequestStack $requestStack)
    {
        $this->security = $security;
        $this->router = $router;
        $this->requestStack = $requestStack;
    }

    public function onKernelRequest(RequestEvent $event): void
    {    
        $request = $event->getRequest();  
        // Check if the current request is for the 2FA login page
        if ($request->getPathInfo() === '/2fa-authentication') { 
            // Check if the user is fully authenticated (including 2FA)
            if ($this->security->isGranted('IS_AUTHENTICATED_FULLY')) {  
                // Redirect the user to the target route
                $targetUrl = $this->router->generate('app_main');
                $event->setResponse(new RedirectResponse($targetUrl));
            }
        }
    }
}

