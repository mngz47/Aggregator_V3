
function getAccessToken(){
	var f = new FormData();
	  
	  f.append("grant_type","client_credentials");
	  f.append("client_id", "client_id");
	  f.append("client_secret": "client_secret");
														       
  return sendformG('https://graph.facebook.com/oauth/access_token',f);
}

function shareOnFacebook(ll,message){
	var f = new FormData();
	  
	  f.append("message",message);
	  f.append("link", ll);
	  f.append("access_token": getAccessToken());
	  
	  sendformG("https://graph.facebook.com/v5.0/" + "facebook_page_id" + "/feed",f);
}