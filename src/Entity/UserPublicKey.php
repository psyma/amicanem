<?php

namespace App\Entity;

use App\Repository\UserPublicKeyRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: UserPublicKeyRepository::class)]
class UserPublicKey
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $publickey = null;

    #[ORM\OneToOne(mappedBy: 'publickeyid', cascade: ['persist', 'remove'])]
    private ?UserDetails $userDetails = null;

    public function getId(): ?int
    {
        return $this->id;
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

    public function getUserDetails(): ?UserDetails
    {
        return $this->userDetails;
    }

    public function setUserDetails(?UserDetails $userDetails): static
    {
        // unset the owning side of the relation if necessary
        if ($userDetails === null && $this->userDetails !== null) {
            $this->userDetails->setPublickeyid(null);
        }

        // set the owning side of the relation if necessary
        if ($userDetails !== null && $userDetails->getPublickeyid() !== $this) {
            $userDetails->setPublickeyid($this);
        }

        $this->userDetails = $userDetails;

        return $this;
    }
}
