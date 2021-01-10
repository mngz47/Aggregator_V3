<?php
# Usually your app/AppKernel.php

include 'vendor/autoload.php';

// ...
class AppKernel extends Kernel
{
    public function registerBundles()
    {
        $bundles = [
            // ...
            new \MartinGeorgiev\SocialPostBundle\SocialPostBundle(),
        ];
        return $bundles;
    }
    // ...
}

# Some Symfony container aware class
//...
$message = new \MartinGeorgiev\SocialPost\Message($_POST['body']);

if($container->get('social_post')->publish($message)){
    echo 'success';
}else{
    echo 'failure';
}

?>
