<?php

namespace App\Entity;

use App\Repository\UserDetailsRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: UserDetailsRepository::class)]
class UserDetails
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
    private ?User $userid = null;

    #[ORM\OneToOne(inversedBy: 'userDetails', cascade: ['persist', 'remove'])]
    private ?UserAbout $aboutid = null;

    #[ORM\OneToOne(inversedBy: 'userDetails', cascade: ['persist', 'remove'])]
    private ?UserPrivateKey $privatekeyid = null;

    #[ORM\OneToOne(inversedBy: 'userDetails', cascade: ['persist', 'remove'])]
    private ?UserPassphrase $passphraseid = null;

    #[ORM\OneToOne(inversedBy: 'userDetails', cascade: ['persist', 'remove'])]
    private ?UserPublicKey $publickeyid = null;
 
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
        return $this->userid;
    }

    public function setUserid(?User $userid): static
    {
        $this->userid = $userid;

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
        return $this->aboutid;
    }

    public function setAboutId(?UserAbout $aboutid): static
    {
        $this->aboutid = $aboutid;

        return $this;
    }

    public function getPrivatekeyId(): ?UserPrivateKey
    {
        return $this->privatekeyid;
    }

    public function setPrivatekeyId(?UserPrivateKey $privatekeyid): static
    {
        $this->privatekeyid = $privatekeyid;

        return $this;
    }

    public function getPassphraseId(): ?UserPassphrase
    {
        return $this->passphraseid;
    }

    public function setPassphraseId(?UserPassphrase $passphraseid): static
    {
        $this->passphraseid = $passphraseid;

        return $this;
    }

    public function getPublickeyid(): ?UserPublicKey
    {
        return $this->publickeyid;
    }

    public function setPublickeyid(?UserPublicKey $publickeyid): static
    {
        $this->publickeyid = $publickeyid;

        return $this;
    } 
}
