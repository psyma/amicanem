# Amicanem (Your another chat application 😀) 

# Features
```
Audio Calls ❌
Video Calls ❌
End-to-End Encryption ✅
Two-Factor Authentication (2FA) ❌
Optional Message Saving ❌
```

# Symfony 7

# Environment variable
```
Create a .env file in the root directory and provide the following values.

###> symfony/framework-bundle ###
APP_ENV=dev
APP_SECRET= xxx... # 32 random characters 
###< symfony/framework-bundle ###

###> doctrine/doctrine-bundle ###
# Format described at https://www.doctrine-project.org/projects/doctrine-dbal/en/latest/reference/configuration.html#connecting-using-a-url
# IMPORTANT: You MUST configure your server version, either here or in config/packages/doctrine.yaml
#
DATABASE_URL="sqlite:///%kernel.project_dir%/var/data.db"
# DATABASE_URL="mysql://app:!ChangeMe!@127.0.0.1:3306/app?serverVersion=8.0.32&charset=utf8mb4"
# DATABASE_URL="mysql://app:!ChangeMe!@127.0.0.1:3306/app?serverVersion=10.11.2-MariaDB&charset=utf8mb4"
# DATABASE_URL="postgresql://app:!ChangeMe!@127.0.0.1:5432/app?serverVersion=16&charset=utf8"
###< doctrine/doctrine-bundle ###

###> symfony/messenger ###
# Choose one of the transports below
# MESSENGER_TRANSPORT_DSN=amqp://guest:guest@localhost:5672/%2f/messages
# MESSENGER_TRANSPORT_DSN=redis://localhost:6379/messages
MESSENGER_TRANSPORT_DSN=doctrine://default?auto_setup=0
###< symfony/messenger ###

###> symfony/mailer ###
MAILER_DSN=
###< symfony/mailer ###

###> hwi/oauth-bundle ###
GOOGLE_ID=
GOOGLE_SECRET=
###< hwi/oauth-bundle ###

###> pusher/pusher-php-server ###
PUSHER_APP_ID=
PUSHER_KEY=
PUSHER_SECRET=
PUSHER_CLUSTER=
###< pusher/pusher-php-server ###
```

# Migration
```
php bin/console make:migration
php bin/console doctrine:migrations:migrate
```