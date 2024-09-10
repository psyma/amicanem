<?php

namespace App\Entity;

use JsonSerializable;

use App\Repository\MessageRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: MessageRepository::class)]
class Message implements JsonSerializable
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column]
    private ?int $sender = null;

    #[ORM\Column]
    private ?int $receiver = null;

    #[ORM\Column(type: Types::SMALLINT)]
    private ?int $type = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $content = null;

    #[ORM\Column(length: 50)]
    private ?string $timestamp = null;

    #[ORM\Column]
    private ?bool $isSeen = null;

    public function jsonSerialize(): mixed
    {
        return array(
            'id' => $this->id, 
            'content' => $this->content, 
            'isSeen' => $this->isSeen
        );
    } 

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getSender(): ?int
    {
        return $this->sender;
    }

    public function setSender(int $sender): static
    {
        $this->sender = $sender;

        return $this;
    }

    public function getReceiver(): ?int
    {
        return $this->receiver;
    }

    public function setReceiver(int $receiver): static
    {
        $this->receiver = $receiver;

        return $this;
    }

    public function getType(): ?int
    {
        return $this->type;
    }

    public function setType(int $type): static
    {
        $this->type = $type;

        return $this;
    }

    public function getContent(): ?string
    {
        return $this->content;
    }

    public function setContent(string $content): static
    {
        $this->content = $content;

        return $this;
    }

    public function getTimestamp(): ?string
    {
        return $this->timestamp;
    }

    public function setTimestamp(string $timestamp): static
    {
        $this->timestamp = $timestamp;

        return $this;
    }

    public function isSeen(): ?bool
    {
        return $this->isSeen;
    }

    public function setSeen(bool $isSeen): static
    {
        $this->isSeen = $isSeen;

        return $this;
    }
}
