


<?php

$response = '';

if($_POST['content']){
	
	echo '<p>content recieved</p>';
  
  $curl = curl_init();

	$data = array('query'=>''.$_POST['content'],
              'key'=>'0a8d4acb24bbfce6de654fb18e2c8ac1',
              'lang'=>'en');
	
curl_setopt_array($curl, [
	CURLOPT_URL => "https://www.prepostseo.com/apis/checkparaphrase?query=".$_POST['content'],
	CURLOPT_RETURNTRANSFER => true,
	CURLOPT_FOLLOWLOCATION => true,
	CURLOPT_ENCODING => "",
	CURLOPT_MAXREDIRS => 10,
	CURLOPT_TIMEOUT => 30,
	CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	CURLOPT_CUSTOMREQUEST => "POST",
	CURLOPT_POSTFIELDS => $data]);

	
	
$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
	echo "cURL Error #:" . $err;
} 
}
?>

<h3>Paraphrase</h3>
<form action=index.php method=post >
<textarea id=content name=content ></textarea>
<button>start</button>
</form>
<h5>output:</h5>
<div id=output ><?php echo $response;  ?></div>
