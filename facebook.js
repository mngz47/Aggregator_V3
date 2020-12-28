
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