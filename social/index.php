<?php
# Usually your app/AppKernel.php

# include 'vendor/autoload.php';

include 'vendor/martin-georgiev/social-post-bundle/src/MartinGeorgiev/SocialPost/SocialPostBundle.php';

# Some Symfony container aware class

$message = new Message($_POST['body']);

echo 'received: '.$_POST['body'];

/*
if($container->get('social_post')->publish($message)){
    echo 'success';
}else{
    echo 'failure';
}
*/

?>
