<?php

namespace App\Entity;

use JsonSerializable;

use App\Repository\UserDetailsRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: UserDetailsRepository::class)]
class UserDetails implements JsonSerializable
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 50, nullable: true)]
    private ?string $firstname = null;

    #[ORM\Column(length: 50, nullable: true)]
    private ?string $lastname = null;

    #[ORM\Column(length: 20, nullable: true)]
    private ?string $nickname = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $avatar = null;

    #[ORM\Column(nullable: true)]
    private ?bool $badge = null;

    #[ORM\Column(length: 15, nullable: true)]
    private ?string $badgecolor = null; 

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $uid = null;  
    
    #[ORM\OneToOne(inversedBy: 'userDetails', cascade: ['persist', 'remove'])]
    private ?User $user = null;

    #[ORM\OneToOne(inversedBy: 'userDetails', cascade: ['persist', 'remove'])]
    private ?UserAbout $about = null;

    #[ORM\OneToOne(inversedBy: 'userDetails', cascade: ['persist', 'remove'])]
    private ?UserPrivateKey $privatekey = null;

    #[ORM\OneToOne(inversedBy: 'userDetails', cascade: ['persist', 'remove'])]
    private ?UserPassphrase $passphrase = null;

    #[ORM\OneToOne(inversedBy: 'userDetails', cascade: ['persist', 'remove'])]
    private ?UserPublicKey $publickey = null;
    
    public function jsonSerialize(): mixed
    {
        return array(
            'firstname' => $this->firstname,
            'lastname' => $this->lastname,
            'nickname' => $this->nickname,
            'avatar' => $this->avatar,
            'badge' => $this->badge,
            'badgecolor' => $this->badgecolor,
            'uid' => $this->uid,
            'about' => $this->about,
            'publickey' => $this->publickey,
            'privatekey' => $this->privatekey,
            'passphrase' => $this->passphrase
        );
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFirstname(): ?string
    {
        return $this->firstname;
    }

    public function setFirstname(?string $firstname): static
    {
        $this->firstname = $firstname;

        return $this;
    }

    public function getLastname(): ?string
    {
        return $this->lastname;
    }

    public function setLastname(?string $lastname): static
    {
        $this->lastname = $lastname;

        return $this;
    }

    public function getNickname(): ?string
    {
        return $this->nickname;
    }

    public function setNickname(?string $nickname): static
    {
        $this->nickname = $nickname;

        return $this;
    }

    public function isBadge(): ?bool
    {
        return $this->badge;
    }

    public function setBadge(?bool $badge): static
    {
        $this->badge = $badge;

        return $this;
    }

    public function getBadgecolor(): ?string
    {
        return $this->badgecolor;
    }

    public function setBadgecolor(?string $badgecolor): static
    {
        $this->badgecolor = $badgecolor;

        return $this;
    } 

    public function getUid(): ?string
    {
        return $this->uid;
    }

    public function setUid(?string $uid): static
    {
        $this->uid = $uid;

        return $this;
    }

    public function getUserid(): ?User
    {
        return $this->user;
    }

    public function setUserid(?User $user): static
    {
        $this->user = $user;

        return $this;
    }

    public function getAvatar(): ?string
    {
        return $this->avatar;
    }

    public function setAvatar(?string $avatar): static
    {
        $this->avatar = $avatar;

        return $this;
    }

    public function getAboutId(): ?UserAbout
    {
        return $this->about;
    }

    public function setAboutId(?UserAbout $about): static
    {
        $this->about = $about;

        return $this;
    }

    public function getPrivatekeyId(): ?UserPrivateKey
    {
        return $this->privatekey;
    }

    public function setPrivatekeyId(?UserPrivateKey $privatekey): static
    {
        $this->privatekey = $privatekey;

        return $this;
    }

    public function getPassphraseId(): ?UserPassphrase
    {
        return $this->passphrase;
    }

    public function setPassphraseId(?UserPassphrase $passphrase): static
    {
        $this->passphrase = $passphrase;

        return $this;
    }

    public function getPublickeyid(): ?UserPublicKey
    {
        return $this->publickey;
    }

    public function setPublickeyid(?UserPublicKey $publickey): static
    {
        $this->publickey = $publickey;

        return $this;
    } 
}
