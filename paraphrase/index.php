


<?php

if($POST['content']){
  
  $curl = curl_init();

curl_setopt_array($curl, [
	CURLOPT_URL => "https://paraphrasing-tool1.p.rapidapi.com/api/rewrite",
	CURLOPT_RETURNTRANSFER => true,
	CURLOPT_FOLLOWLOCATION => true,
	CURLOPT_ENCODING => "",
	CURLOPT_MAXREDIRS => 10,
	CURLOPT_TIMEOUT => 30,
	CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	CURLOPT_CUSTOMREQUEST => "POST",
	CURLOPT_POSTFIELDS => "{\r
    \"sourceText\": "+ $POST['content'] +"\r
}",
	CURLOPT_HTTPHEADER => [
		"content-type: application/json",
		"x-rapidapi-host: paraphrasing-tool1.p.rapidapi.com",
		"x-rapidapi-key: f4d041c051msh25be51a74caa34bp14fd74jsn556f558ca5da"
	],
]);

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
