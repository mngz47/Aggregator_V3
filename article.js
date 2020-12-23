
function saveArticle(){
	var f = new FormData();
	  f.append("contentFormat","html");
	  f.append("publishStatus", "public");
	  f.append("tags", e('default_category').value);
	  //title, content
   var fields = e('parameters').getElementsByClassName('field');
	   
	   for(var a=0;a<fields.length;a++){
		   
		   var vv = (fields[a].getElementsByTagName('input')[0].value=='content'?putAffLink(values[a]):values[a]);
		   
		   f.append(fields[a].getElementsByTagName('input')[0].value,vv);
	   }
	   
	if(rr = sendformG('https://api.medium.com/v1/users/2b586e990c6c6e0328bde9b5a758d06b7bbab7221e4e6d5e237844dbbb7caf307/posts',f)){
		shareOnFacebook(rr,values[a].substring(0,100));
	}
}

function putAffLink(cc){
var max = 8;
for (var aa=1;aa<max;aa++){
	
	cc = cc.substring(0,cc.length/max*aa)+'<a href="'+e('aff_link').value+'" >'+cc.substring(cc.length/max*aa,cc.length/max*aa+10)+'</a>'+cc.substring(cc.length/max*aa+10,cc.length);
	
}
	return cc;
}

 function saveArticle_2(url,index){
   var f = new FormData();
	  f.append("contentFormat","html");
	  f.append("publishStatus", "public");
	  f.append("tags": e('default_category').value);
	   
	   var fields = e('parameters').getElementsByClassName('field');
	   for(var a=0;a<fields.length;a++){
		     f.append(fields[a].getElementsByTagName('input')[0].value,
			      getName(fields[a].getElementsByTagName('input')[3].value.split(','),index).value);
	   }   
														       
   sendformG('https://api.medium.com/v1/users/2b586e990c6c6e0328bde9b5a758d06b7bbab7221e4e6d5e237844dbbb7caf307/posts',f);
   }

function sendformG(url,form){
var req = new XMLHttpRequest();
req.open("POST",url,true);
req.send(form);

req.onload = function(){
alert(req.responseText);
};
return req.responseText;
}
