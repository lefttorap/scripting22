// JavaScript Document
function write(){

	var time = document.getElementById('years').value;
	console.log(time);








	var firstPnoun = document.getElementById('pipline').value;
	console.log(firstPnoun);








	var secondPnoun = document.getElementById('wagon').value;
	console.log(secondPnoun);








	var typeofplace = document.getElementById('mountain').value;
	console.log(typeofplace);









	var Object = document.getElementById('stone').value;
	console.log(Object);









	var timetwo = document.getElementById('hours').value;
	console.log(timetwo);









	var name = document.getElementById('name').value;
	console.log(name); 





	var handObject = document.getElementById('hammer').value;
	console.log(handObject);








	var nameTwo = document.getElementById('nameTwo').value;
	console.log(nameTwo);









	var liquid = document.getElementById('Ingredient').value;
	console.log(liquid);








	var spice = document.getElementById('IngredientTwo').value;
	console.log(spice);









	var liquidTwo = document.getElementById('IngredientThree').value;
	console.log(liquidTwo);








	var bombs = document.getElementById('Number').value;
	console.log(bombs);







	var seas = document.querySelector('input[name="Adventurers"]:checked').value;
	console.log(seas);



	var seasMessage;


	
	
	if(seas=="Teenagers"){
	seasMessage="Teenagers";
}
	else if (seas=="Men"){
		seasMessage="Men"
	}
	else if (seas=="Women"){
		seasMessage="Women"
	}
	else if (seas=="Children"){
		seasMessage="Children"
	}
	
	
 console.log(seasMessage);
	
	
	
	
	document.getElementById('output').innerHTML += "<p> It’s been almost "+time+" since the last dragon has been seen. In that time the country of Teflon has been a very different place. Without having to worry about massive flying lizards spewing fire down on civilization, the small town of Yorkshire has been able to grow massively in the world of technology. </p>";

	document.getElementById('output').innerHTML += "Instead of relying on streams and buckets to supply water they have built "+firstPnoun+ " that now draw the water in from the river directly to your home.";

	
	document.getElementById('output').innerHTML += " They also no longer rely on horse and carriage to transport things but have invented large "+secondPnoun+ " that propel themselves using the bones of the old dragons.";
	
	document.getElementById('output').innerHTML += " No one really knew what happened to the dragons they figured they had just gone off to bother a different country. Until one day when a group of adventurous "+seasMessage+ " stumbled across a cave in a ";
	
	
	document.getElementById('output').innerHTML += ""+typeofplace+ " not far from the town. ";
	
	
	
	document.getElementById('output').innerHTML += "In this cave they found what looked like a large "+Object+ " surrounded by a pile of bones. ";
	
	
	document.getElementById('output').innerHTML += "The group of "+seasMessage+ " immediately knew that this was not just a "+Object+ " but it was a dragon egg. ";
	
	document.getElementById('output').innerHTML += "The "+seasMessage+ " not knowing what they should do returned to the town to tell the people what they had found. ";
	
	document.getElementById('output').innerHTML += "The town counsel debated for "+timetwo+ " before finally concluding. The counsel decided the egg was too dangerous to be left alone and that it needed to be destroyed. Not knowing how to destroy a dragon egg the town decided to make a game out of this occasion. Anyone who had an idea was welcome to tag along and try and destroy the egg.";
	
	
	document.getElementById('output').innerHTML += " A fellow by the name of "+name+ " decided he would try first. He was a very large man who decided to rely on his strength to destroy the egg. ";
	
	
	document.getElementById('output').innerHTML += "He prepared his "+handObject+ " and swung as hard as he could at the egg, but the " +handObject+ " bounced off. ";
	
	document.getElementById('output').innerHTML += "Then another man named "+nameTwo+ " decided he would try destroying the egg with science. ";
	
	
	document.getElementById('output').innerHTML += "" +nameTwo+ " mix together a concoction of " +liquid+ " " +spice+ " and " +liquidTwo+ " all blended up into a potion. He pored his potion on the egg and waited but nothing happened. Then a small child came up and told everyone for her idea they needed to leave the cave. ";
	
	
	document.getElementById('output').innerHTML += "After everyone left the cave child placed "+bombs+ " sticks of dynamite underneath the egg. she quickly ran out of the cave and before anyone could ask what her idea was, BOOM! The whole "+typeofplace+" exploded sending rock and fire everywhere. The town was in agreeance that the egg was now destroyed. ";
	
	
	
	
	
	
}



