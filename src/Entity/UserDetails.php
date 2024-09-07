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

    #[ORM\Column(nullable: true)]
    private ?bool $badge = null;

    #[ORM\Column(length: 15, nullable: true)]
    private ?string $badgecolor = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $about = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $publickey = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $privatekey = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $passphrase = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $uid = null;

    #[ORM\OneToOne(inversedBy: 'userDetails', cascade: ['persist', 'remove'])]
    private ?User $userid = null;

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

    public function getAbout(): ?string
    {
        return $this->about;
    }

    public function setAbout(?string $about): static
    {
        $this->about = $about;

        return $this;
    }

    public function getPublickey(): ?string
    {
        return $this->publickey;
    }

    public function setPublickey(?string $publickey): static
    {
        $this->publickey = $publickey;

        return $this;
    }

    public function getPrivatekey(): ?string
    {
        return $this->privatekey;
    }

    public function setPrivatekey(?string $privatekey): static
    {
        $this->privatekey = $privatekey;

        return $this;
    }

    public function getPassphrase(): ?string
    {
        return $this->passphrase;
    }

    public function setPassphrase(?string $passphrase): static
    {
        $this->passphrase = $passphrase;

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
}
