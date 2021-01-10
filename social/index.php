<?php
# Usually your app/AppKernel.php

# include 'vendor/autoload.php';

include 'vendor/martin-georgiev/social-post-bundle/src/MartinGeorgiev/SocialPost/SocialPostBundle.php';

# Some Symfony container aware class

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

echo 'received: '.$_POST['body'];

/*
$message = new Message($_POST['body']);

if($container->get('social_post')->publish($message)){
    echo 'success';
}else{
    echo 'failure';
}
*/

?>
