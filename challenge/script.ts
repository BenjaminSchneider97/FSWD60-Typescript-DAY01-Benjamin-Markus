let heading : Array<string>=["Wir leben für den", "Entdecke unsere", "Was gibt's", "Hier richtig", "Wo ist der nächste"];
let heading2 : Array<string>=["Geschmack", "Produkte", "Neues", "Sparen", "King Finder"];
const [itemOne, itemTwo, itemThree, itemFour, itemFive] = heading;
for(let value in heading){
	var outerDiv = document.createElement("div");
	outerDiv.setAttribute("class", "headingdivs");
	var h3 = document.createElement("h3");
	var text1 = document.createTextNode(heading[value]);
	h3.appendChild(text1);
	outerDiv.appendChild(h3);
	var h1 = document.createElement("h1");
	var text2 = document.createTextNode(heading2[value]);
	h1.appendChild(text2);
	outerDiv.appendChild(h1);
	document.getElementById("headingdata").appendChild(outerDiv);

}