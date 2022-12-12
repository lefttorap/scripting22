// JavaScript Document
var character={face:"", glasses:"", hat:""};


function setFace(changling){

	character.face=changling;
	bodyBuilder();
	
	
}


function setGlasses(changling){
	character.glasses=changling;
	bodyBuilder();
}


function setHat(changling){
	character.hat=changling;
	bodyBuilder();
}



function bodyBuilder(){

	if(character.face!=""){
		document.getElementById('face').innerHTML="<img class='img-fluid' src='img/"+character.face+"'' alt ='face'>";
	}
	
	
if(character.glasses!=""){
	document.getElementById('glasses').innerHTML="<img class='img-fluid' src='img/"+character.glasses+"'' alt ='glasses'>";
}

	if(character.hat!=""){
			document.getElementById('hat').innerHTML="<img class='img-fluid' src='img/"+character.hat+"'' alt ='hat'>";

	}
	
	
}





