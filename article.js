

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


function paraphrase(vv){
	
	const data = JSON.stringify({
	"language": "en",
	"strength": 3,
	"text": vv
		});

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;
xhr.open("POST", "https://rewriter-paraphraser-text-changer-multi-language.p.rapidapi.com/rewrite");
xhr.setRequestHeader("content-type", "application/json");
xhr.setRequestHeader("x-rapidapi-host", "rewriter-paraphraser-text-changer-multi-language.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "f4d041c051msh25be51a74caa34bp14fd74jsn556f558ca5da");
xhr.send(data);
	
	return xhr;
}

function saveArticle(){
	var f = new FormData();
	thirdparty(f);
	//title, content
  
	f.append('section',e('default_category').value);
	f.append('date_added',getFormatedDate());
	
   var fields = e('parameters').getElementsByClassName('field');
   var vv;
   var content_index;
	 
	   for(var a=0;a<fields.length;a++){
		   if(fields[a].getElementsByTagName('input')[0].value=='content'){
			  
			   var para_res = paraphrase(vv);
			   
			   para_res.readystatechange = function(){
				   if (para_res.readyState === para_res.DONE) {
					   vv = para_res.responseText;
					   e('log').innerHTML += '<br><textarea>'+vv+'</textarea>(PARAPHASED)<br>';
				 
				   }
			   };
			   
			   vv = putAffLink(values[a]);
			   
			   content_index = a;
		   }else{
			   
			   var vvv = values[a].match(/>.*</);
			   if(vvv){
				vvv = vvv.toString();
			   	vv = vvv.substring(1, vvv.length-1);
			   }else{
			   	vv = values[a];
			   }
			   
		   }
		       f.append(fields[a].getElementsByTagName('input')[0].value,vv);
	   }
	          
	
		var res = sendformG_2(e('action').getElementsByTagName('input')[0].value,f);
		
		res.onload = function(){
			var response = res.responseText; 
			if(response.includes('success')){
			shareOnFacebook_2(response.split(',')[1],vv.match(/\w{50,10}/));	
			}
		};
	
}


function saveArticle_2(url,index){
    var f = new FormData();
	   thirdparty(f);
    // f.append('url',url.value); 
	
	f.append('section',e('default_category').value);
	f.append('date_added',getFormatedDate());   
	
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
		
	for(var rr=0;rr<e('action').getElementsByTagName('input').length;rr++){
		sendformG(e('action').getElementsByTagName('input')[rr].value,f);
	}

//	shareOnFacebook('article_url',getName(fields[content_index].getElementsByTagName('input')[3].value.split(','),index).value.substring(0,100));		
    
}

function putAffLink(cc){
var max = 8;
for (var aa=1;aa<max;aa++){
	cc = cc.substring(0,cc.length/max*aa)+'<a href="'+e('aff_link').value+'" >'+cc.substring(cc.length/max*aa,cc.length/max*aa+10)+'</a>'+cc.substring(cc.length/max*aa+10,cc.length);
}
	
	cc+= '<h2>References</h2>';
	
	for (var bb=0;bb<references.length;bb++){
		cc += references[bb]+'<br>';
	}
//alert(cc);
	return cc;
}

function sendformG(url,form){
var req = new XMLHttpRequest();
req.open("POST",url,true);
req.send(form);

req.onload = function(){
//alert(req.responseText);	
};
return req.responseText;
}

var form_G_index = 1;

function sendformG_2(url,form){
var req = new XMLHttpRequest();
req.open("POST",url,true);
req.send(form);
	
	if(form_G_index<e('action').getElementsByTagName('input').length){
		req.onload = function(){
			req = sendformG_2(e('action').getElementsByTagName('input')[form_G_index].value,form)
			form_G_index+=1;
		};
	}
return req;
}

