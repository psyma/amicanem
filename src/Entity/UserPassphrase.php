<?php

namespace App\Entity;

use JsonSerializable; 

use App\Repository\UserPassphraseRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: UserPassphraseRepository::class)]
class UserPassphrase implements JsonSerializable
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $passphrase = null;

    #[ORM\OneToOne(mappedBy: 'passphrase', cascade: ['persist', 'remove'])]
    private ?UserDetails $userDetails = null;

    public function jsonSerialize(): mixed
    {
        return array(
            'passphrase' => $this->passphrase, 
        );
    }

    public function getId(): ?int
    {
        return $this->id;
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

    public function getUserDetails(): ?UserDetails
    {
        return $this->userDetails;
    }

    public function setUserDetails(?UserDetails $userDetails): static
    {
        // unset the owning side of the relation if necessary
        if ($userDetails === null && $this->userDetails !== null) {
            $this->userDetails->setPassphraseId(null);
        }

        // set the owning side of the relation if necessary
        if ($userDetails !== null && $userDetails->getPassphraseId() !== $this) {
            $userDetails->setPassphraseId($this);
        }

        $this->userDetails = $userDetails;

        return $this;
    }
}
