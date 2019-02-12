var menu : Array<string>=["Burger", "Schnitzel", "Soup", "Fish", "Burrito"];
const [itemOne, itemTwo, itemThree, itemFour, itemFive] = menu;
for(let i = 0 ; i < menu.length; i++){
	var x = document.createElement("p");
	x.setAttribute("class", "food");
	var y = document.createTextNode(menu[i]);
	x.appendChild(y);
	document.getElementById("menu").appendChild(x);

}
