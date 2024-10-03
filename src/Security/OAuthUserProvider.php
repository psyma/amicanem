<?php
 
namespace App\Security;

use App\Entity\Profile;
use App\Entity\Settings;
use App\Utils\Utils;
use App\Entity\User;
use App\Entity\UserDetails;
use App\Entity\UserSettings;
use Symfony\Component\Uid\Uuid;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use HWI\Bundle\OAuthBundle\OAuth\Response\UserResponseInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use HWI\Bundle\OAuthBundle\Security\Core\User\OAuthAwareUserProviderInterface;  

class OAuthUserProvider implements OAuthAwareUserProviderInterface 
{
    private $entityManager;
    private $userPasswordHasher; 

    public function __construct(EntityManagerInterface $entityManager, UserPasswordHasherInterface $userPasswordHasher)
    {
        $this->entityManager = $entityManager;
        $this->userPasswordHasher = $userPasswordHasher;
    }

    public function loadUserByOAuthUserResponse(UserResponseInterface $response): UserInterface
    {   
        $email = $response->getEmail();
        $user = $this->entityManager->getRepository(User::class)->findOneBy(['email' => $email]);  

        if (!$user) { 
            $avatars = array(
                "/avatars/Antelope.png", "/avatars/Dove.png", "/avatars/Fox.png", "/avatars/Parrot.png", "/avatars/Sheep.png",
                "/avatars/BassetHound.png", "/avatars/Duck.png", "/avatars/MallardDuck.png", "/avatars/Pigeon.png", "/avatars/Wolf.png",
                "/avatars/Bulldog.png", "/avatars/Eagle.png", "/avatars/MountainGoat.png", "/avatars/Pig.png",
                "/avatars/chicken.png", "/avatars/Fox1.png", "/avatars/Ox.png", "/avatars/Reindeer.png",
                "/avatars/Dog.png", "/avatars/Fox3.png", "/avatars/Panda.png", "/avatars/Rooster.png"
            );
            shuffle($avatars); 

            $userSettings = new UserSettings();
            $userSettings->setSaveMessage(true);

            $userDetails = new UserDetails();
            $userDetails->setAvatar($avatars[0]);
            $userDetails->setUid(Uuid::v7()->toString());
            $userDetails->setFirstname($response->getFirstName());
            $userDetails->setLastname($response->getLastName()); 
            $userDetails->setUserSettings($userSettings);
            

            $user = new User(); 
            $user->setEmail($email); 
            $user->setVerified(true);
            $user->setRoles(['ROLE_USER']);
            $user->setPassword($this->userPasswordHasher->hashPassword($user, $this->getRandomString())); 
            $user->setUserDetails($userDetails);  
        } 
        else { 
            $userDetails = $user->getUserDetails();
            $userDetails->setUid(Uuid::v7()->toString());
        }
        
        $this->entityManager->persist($user);
        $this->entityManager->flush();

        return $user;
    } 

    public function loadUserByUsername($username): UserInterface
    {
        return $this->entityManager->getRepository(User::class)->findOneBy(['email' => $username]);
    }

    public function refreshUser(UserInterface $user): UserInterface
    {
        return $user;
    }

    public function supportsClass($class): bool
    {
        return User::class === $class;
    } 

    private function getRandomString() {
        $n = 16;
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $randomString = '';

        for ($i = 0; $i < $n; $i++) {
            $index = rand(0, strlen($characters) - 1);
            $randomString .= $characters[$index];
        }

        return $randomString;
    }
}
