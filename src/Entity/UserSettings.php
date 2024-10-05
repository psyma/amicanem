<?php

namespace App\Entity;

use App\Repository\UserSettingsRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: UserSettingsRepository::class)]
class UserSettings
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(nullable: true)]
    private ?bool $isNotification = null;

    #[ORM\Column(nullable: true)]
    private ?bool $isSaveMessage = null;

    #[ORM\Column(nullable: true)]
    private ?bool $isTwoFactorAuth = null;

    #[ORM\OneToOne(inversedBy: 'userSettings', cascade: ['persist', 'remove'])]
    private ?UserDetails $userDetails = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function isNotification(): ?bool
    {
        return $this->isNotification;
    }

    public function setNotification(?bool $isNotification): static
    {
        $this->isNotification = $isNotification;

        return $this;
    }

    public function setIsNotification(?bool $isNotification): static
    {
        $this->isNotification = $isNotification;

        return $this;
    }

    public function isSaveMessage(): ?bool
    {
        return $this->isSaveMessage;
    }

    public function setSaveMessage(?bool $isSaveMessage): static
    {
        $this->isSaveMessage = $isSaveMessage;

        return $this;
    }

    public function setIsSaveMessage(?bool $isSaveMessage)
    {
        $this->isSaveMessage = $isSaveMessage;

        return $this;
    }

    public function isTwoFactorAuth(): ?bool
    {
        return $this->isTwoFactorAuth;
    }

    public function setTwoFactorAuth(?bool $isTwoFactorAuth): static
    {
        $this->isTwoFactorAuth = $isTwoFactorAuth;

        return $this;
    }

    public function setIsTwoFactorAuth(?bool $isTwoFactorAuth)
    {
        $this->isTwoFactorAuth = $isTwoFactorAuth;

        return $this;
    }

    public function getUserDetails(): ?UserDetails
    {
        return $this->userDetails;
    }

    public function setUserDetails(?UserDetails $userDetails): static
    {
        $this->userDetails = $userDetails;

        return $this;
    }
}
