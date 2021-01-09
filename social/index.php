# Usually your app/AppKernel.php
<?php
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
$message = new \MartinGeorgiev\SocialPost\Message('Hello Social Media');
$container->get('social_post')->publish($message);

?>
