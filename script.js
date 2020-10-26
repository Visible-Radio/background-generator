// can get the value of the user chosen color various ways:

// return an array with all the input elements in order

// document.querySelectorAll("input")[0].value;
// document.querySelectorAll("input")[1].value;

// return an array with all the elements with the coresponding name
// in this case names are unique, so we get an array with one element

// document.getElementsByName("color1")[0].value;
// document.getElementsByName("color2")[0].value;

// or assign a class to the HTML element and do this:
// document.getElementsByClassName("color1").color1.value;
// document.getElementsByClassName("color2").color2.value;

// or like this:
// document.querySelector(".color1").value
// document.querySelector(".color2").value

function setGradient() {
	body.style.background = 
		"linear-gradient(to right, "
	 	+ color1.value
	 	+ ", "
	 	+ color2.value
	 	+ ")";

	 css.textContent = body.style.background + ";";
}

function channel() {
	return Math.round(Math.random()*255);	
}

function rgbArray() {
	let rgbArray=[];
	for (let x=0; x<6 ; x++) {
		rgbArray.push(channel());
	}	
	return rgbArray;
}

function randCol() {
	let channels = rgbArray();
	let hex = "";
	body.style.background = 
			"linear-gradient(to right, "
		 	+ "rgb(" + channels[0] + "," 
		 	+ channels[1] + "," 
		 	+ channels[2] +")"
		 	+ ", "
		 	+ "rgb(" + channels[3] + ","
		 	+ channels[4] + ","
		 	+ channels[5] +")"
		 	+ ")";
	css.textContent = body.style.background + ";";
	
	// take the 6 numbers representing the two sets of rgb channels
	// convert them to a 12 character string representing two sets of
	// hex colors
	for (let i=0; i < 6; i++) {
		channels[i] = channels[i].toString(16);
		if (channels[i].length != 2)
			{
				channels[i] = "0" + channels[i];
			}
		hex = hex + channels[i];
		
	}
	document.querySelector(".color1").value = "#"
		+ hex.substring(0,6);
	document.querySelector(".color2").value = "#"
		+ hex.substring(6,12);	
}

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

// document.querySelector(".color1").value = "#ff0000";
// document.querySelector(".color2").value = "#ffff00";
// css.textContent = "linear-gradient(to right, red , yellow);"

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", randCol);

randCol();