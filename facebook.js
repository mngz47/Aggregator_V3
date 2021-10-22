
function getAccessToken(){
	var f = new FormData();
	  
	  f.append("grant_type","client_credentials");
	  f.append("client_id", "838292889616021");
	  f.append("client_secret", "eb485dec6fac405b62e666929f03d272");
														       
  return sendformG('https://graph.facebook.com/oauth/access_token',f);
}

function shareOnFacebook(ll,message){
	var f = new FormData();
	  
	  alert(ll);
	  f.append("message",message);
	  f.append("link", ll);
	  f.append("access_token", getAccessToken());
	  
	  sendformG("https://graph.facebook.com/v5.0/" + "195349390839130" + "/feed",f);
}

 //https://graph.facebook.com/{your-user-id}/accounts?access_token={user-access-token}
		 
 function shareOnFacebook_2(ll,message){
		
			var f = new FormData();
			f.append('page_id', (e('facebook_page_id').value?e('facebook_page_id').value:'195349390839130') );
			f.append('access_token', (e('facebook_access_token').value?e('facebook_access_token').value:getAccessToken()) );
			f.append('content', message);
			f.append('link', ll);
			sendform('social/index.php',f);
  } 
		 

