<?php

namespace App\Form;
 
use App\Entity\UserSettings; 
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class UserSettingsFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('isNotification', CheckboxType::class, array('required' => false))
            ->add('isSaveMessage', CheckboxType::class, array('required' => false))
            ->add('isTwoFactorAuth', CheckboxType::class, array('required' => false)) 
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => UserSettings::class,
        ]);
    }
}
