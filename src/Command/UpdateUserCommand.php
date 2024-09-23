<?php

namespace App\Command;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;

use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface; 

# php bin/console app:update-user example@email.com blue --badge 
#[AsCommand(name: 'app:update-user', description: 'Update the user entity',)]
class UpdateUserCommand extends Command
{
    public function __construct(private EntityManagerInterface $entityManager)
    {
        parent::__construct();
    }

    protected function configure(): void
    {
        $this->setDescription('Update the user in the database.')
            ->addArgument('email', InputArgument::REQUIRED, 'The email of the user to identify')
            ->addArgument('badgeColor', InputArgument::REQUIRED, 'Update badgeColor value')
            ->addOption('badge', null, InputOption::VALUE_NONE, 'Update hasBadge value');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $email = $input->getArgument('email');
        $badge = $input->getOption('badge');
        $badgeColor = $input->getArgument('badgeColor');

        $userRepository = $this->entityManager->getRepository(User::class);
        $user = $userRepository->findOneByEmail($email);

        if ($user == null) {
            $output->writeln('User not found.');
            return Command::FAILURE;
        }

        $userDetails = $user->getUserDetails();
        $userDetails->setBadge($badge);
        $userDetails->setBadgecolor($badgeColor);

        $this->entityManager->persist($user);
        $this->entityManager->flush(); 

        $output->writeln('User has been updated successfully.');

        return Command::SUCCESS;
    }
}
