

function thirdparty(f){
	  //medium.com fields
	  f.append("contentFormat","html");
	  f.append("publishStatus", "public");
	  f.append("tags", e('default_tags').value);
	  f.append("category", e('default_category').value);
	  //blogger.com fields
	  f.append("contentFormat","html");
	  f.append("Authorization", "autorization-code");
	  f.append("Content-Type", "application/json"); 
}

function saveArticle(){
	var f = new FormData();
	thirdparty(f);
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
	          
		//sending content to medium.com
		//sending content to blogger.com		
		
		var gg = [];
	for(var rr=0;rr<e('action').getElementsByTagName('input').length;rr++){
		gg[gg.length] = sendformG(e('action').getElementsByTagName('input')[rr].value,f);
	}
	alert('Destination Response: '+gg.toString);
	shareOnFacebook(gg.toString,values[content_index].substring(0,100));
}


function saveArticle_2(url,index){
    var f = new FormData();
	   thirdparty(f);
    // f.append('url',url.value); 
	   
	   var fields = e('parameters').getElementsByClassName('field');
	   var content_index;
	   
	   for(var a=0;a<fields.length;a++){
		   if(fields[a].getElementsByTagName('input')[0].value=='content'){
			 content_index = a;
			 f.append(fields[a].getElementsByTagName('input')[0].value,
			     putAffLink(getName(fields[a].getElementsByTagName('input')[3].value.split(','),index).value));   
		   }else{
			 f.append(fields[a].getElementsByTagName('input')[0].value,
			     getName(fields[a].getElementsByTagName('input')[3].value.split(','),index).value);  
		   }    
	   }   
		

		//sending content to medium.com
		//sending content to blogger.com		
		
	var gg = [];
	for(var rr=0;rr<e('action').getElementsByTagName('input').length;rr++){
		gg[gg.length] = sendformG(e('action').getElementsByTagName('input')[rr].value,f);
	}
	alert('Destination Response: '+gg.toString);
	shareOnFacebook(gg.toString,getName(fields[content_index].getElementsByTagName('input')[3].value.split(','),index).value.substring(0,100));		
    
}


function putAffLink(cc){
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

