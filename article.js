

function saveArticle(){
	var f = new FormData();
	//medium.com fields
	  f.append("contentFormat","html");
	  f.append("publishStatus", "public");
	  f.append("tags", e('default_category').value);
	  
	  //title, content
  
   var fields = e('parameters').getElementsByClassName('field');
   var vv;
   var content_index;
	 
	   for(var a=0;a<fields.length;a++){
		   if(fields[a].getElementsByTagName('input')[0].value=='content'){
			   vv = putAffLink(values[a]);
			   content_index = a;
		   }else{
			   vv = values[a];
		   }
		       f.append(fields[a].getElementsByTagName('input')[0].value,vv);
	   }
	   
	  //blogger fields
	  f.append("contentFormat","html");
	  f.append("Authorization", "autorization-code");
	  f.append("Content-Type", "application/json"); 
	            
		//sending content to medium.com
		//sending content to blogger.com		
	var gg = [];
	for(var rr=0;rr<e('action').getElementsByTagName('input').length;r++){
		gg[gg.length] = sendformG(e('action').getElementsByTagName('input')[rr].value,f);
	}
	alert(gg.toString);
	shareOnFacebook(gg.toString,values[content_index].substring(0,100));
}

function putAffLink(cc){
	alert(cc);
var max = 8;
for (var aa=1;aa<max;aa++){
	cc = cc.substring(0,cc.length/max*aa)+'<a href="'+e('aff_link').value+'" >'+cc.substring(cc.length/max*aa,cc.length/max*aa+10)+'</a>'+cc.substring(cc.length/max*aa+10,cc.length);
}

	alert(cc);
	return cc;
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
