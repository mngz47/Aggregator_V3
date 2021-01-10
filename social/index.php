<?php
# Usually your app/AppKernel.php

include 'vendor/autoload.php';

# Some Symfony container aware class
//...
$message = new \MartinGeorgiev\SocialPost\Message($_POST['body']);

if($container->get('social_post')->publish($message)){
    echo 'success';
}else{
    echo 'failure';
}

?>
