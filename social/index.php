<?php


if($POST['page_id'] && $POST['access_token'] && $POST['content'] && $POST['link']){
    
$curl = curl_init();

curl_setopt_array($curl, [
	CURLOPT_URL => "https://graph.facebook.com/".$POST['page_id']."/feed",
	CURLOPT_RETURNTRANSFER => true,
	CURLOPT_FOLLOWLOCATION => true,
	CURLOPT_ENCODING => "",
	CURLOPT_MAXREDIRS => 10,
	CURLOPT_TIMEOUT => 30,
	CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	CURLOPT_CUSTOMREQUEST => "POST",
	CURLOPT_POSTFIELDS => "{\r
    \"message\": "+ $POST['content'] +",\r
    \"link\": "+ $POST['link'] +",\r
    \"access_token\": "+ $POST['access_token'] +"\r
}",
	CURLOPT_HTTPHEADER => [
		"content-type: application/json"
	],
]);

$response = curl_exec($curl);
    
    
}



?>
