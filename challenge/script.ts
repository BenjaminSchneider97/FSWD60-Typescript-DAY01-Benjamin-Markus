let menu : Array<string>=["Burger", "Schnitzel", "Soup", "Fish", "Burrito"];
const [itemOne, itemTwo, itemThree, itemFour, itemFive] = menu;
for(let value of menu){
	var x = document.createElement("p");
	x.setAttribute("class", "food");
	var y = document.createTextNode(value);
	x.appendChild(y);
	document.getElementById("menu").appendChild(x);

}