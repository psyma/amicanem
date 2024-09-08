<?php

namespace App\Entity;

use App\Repository\UserPrivateKeyRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: UserPrivateKeyRepository::class)]
class UserPrivateKey
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $privatekey = null;

    #[ORM\OneToOne(mappedBy: 'privatekeyId', cascade: ['persist', 'remove'])]
    private ?UserDetails $userDetails = null;

    public function getId(): ?int
    {
        return $this->id;
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

    public function getUserDetails(): ?UserDetails
    {
        return $this->userDetails;
    }

    public function setUserDetails(?UserDetails $userDetails): static
    {
        // unset the owning side of the relation if necessary
        if ($userDetails === null && $this->userDetails !== null) {
            $this->userDetails->setPrivatekeyId(null);
        }

        // set the owning side of the relation if necessary
        if ($userDetails !== null && $userDetails->getPrivatekeyId() !== $this) {
            $userDetails->setPrivatekeyId($this);
        }

        $this->userDetails = $userDetails;

        return $this;
    }
}
