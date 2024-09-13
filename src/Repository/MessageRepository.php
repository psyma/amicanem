<?php

namespace App\Repository;

use App\Entity\Message;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Message>
 */
class MessageRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Message::class);
    }

    public function findBySender(int $sender): array
    {
        return $this->createQueryBuilder('m')
            ->andWhere('m.sender = :sender')
            ->setParameter('sender', $sender)
            ->orderBy('m.id', 'ASC')
            ->getQuery()
            ->getResult();
    }

    public function findByReceiver(int $receiver): array
    {
        return $this->createQueryBuilder('m')
            ->andWhere('m.receiver = :receiver')
            ->setParameter('receiver', $receiver)
            ->orderBy('m.id', 'ASC')
            ->getQuery()
            ->getResult();
    }

    public function findBySenderAndReceiver(int $user1, int $user2, int $page = 1, int $limit = 10): array
    {
        return $this->createQueryBuilder('m')
            ->andWhere('m.sender = :user1 AND m.receiver = :user2 OR m.sender = :user2 AND m.receiver = :user1')
            ->setParameter('user1', $user1)
            ->setParameter('user2', $user2)
            ->orderBy('m.id', 'DESC')
            ->setMaxResults($limit)
            ->setFirstResult(($page - 1) * $limit)
            ->getQuery()
            ->getResult();
    } 

    public function findLastMessageBySender(int $sender): ?Message
    {
        return $this->createQueryBuilder('m')
            ->where('m.sender = :sender')
            ->setParameter('sender', $sender) 
            ->orderBy('m.id', 'DESC')
            ->setMaxResults(1) 
            ->getQuery()
            ->getOneOrNullResult();
    }

    public function findLastMessageBetweenUsers(int $sender, int $receiver): ?Message 
    {
        return $this->createQueryBuilder('m')
            ->where('(m.sender = :user1 AND m.receiver = :user2) OR (m.sender = :user2 AND m.receiver = :user1)')
            ->setParameter('user1', $sender)
            ->setParameter('user2', $receiver)
            ->orderBy('m.id', 'DESC')
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();
    }

    //    /**
    //     * @return Message[] Returns an array of Message objects
    //     */
    //    public function findByExampleField($value): array
    //    {
    //        return $this->createQueryBuilder('m')
    //            ->andWhere('m.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->orderBy('m.id', 'ASC')
    //            ->setMaxResults(10)
    //            ->getQuery()
    //            ->getResult()
    //        ;
    //    }

    //    public function findOneBySomeField($value): ?Message
    //    {
    //        return $this->createQueryBuilder('m')
    //            ->andWhere('m.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }
}
