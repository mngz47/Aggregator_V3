<?php
# Usually your app/AppKernel.php

# include 'vendor/autoload.php';

include 'vendor/martin-georgiev/social-post-bundle/src/MartinGeorgiev/SocialPostBundle/DependencyInjection/SocialPostExtensionTest.php';

$message = new Message($_POST['body']);
# Some Symfony container aware class
echo 'received('.$message.'): '.$_POST['body'];

/*

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

$message = new Message($_POST['body']);

if($container->get('social_post')->publish($message)){
    echo 'success';
}else{
    echo 'failure';
}
*/

?>
