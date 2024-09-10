<?php

namespace App\Entity;

use App\Repository\UserAboutRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: UserAboutRepository::class)]
class UserAbout
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $about = null;

    #[ORM\OneToOne(mappedBy: 'about', cascade: ['persist', 'remove'])]
    private ?UserDetails $userDetails = null;

    public function getId(): ?int
    {
        return $this->id;
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

    public function getUserDetails(): ?UserDetails
    {
        return $this->userDetails;
    }

    public function setUserDetails(?UserDetails $userDetails): static
    {
        // unset the owning side of the relation if necessary
        if ($userDetails === null && $this->userDetails !== null) {
            $this->userDetails->setAboutId(null);
        }

        // set the owning side of the relation if necessary
        if ($userDetails !== null && $userDetails->getAboutId() !== $this) {
            $userDetails->setAboutId($this);
        }

        $this->userDetails = $userDetails;

        return $this;
    }
}
