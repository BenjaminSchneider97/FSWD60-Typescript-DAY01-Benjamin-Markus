var menu = ["Burger", "Schnitzel", "Soup", "Fish", "Burrito"];
var itemOne = menu[0], itemTwo = menu[1], itemThree = menu[2], itemFour = menu[3], itemFive = menu[4];
for (var i = 0; i < menu.length; i++) {
    var x = document.createElement("p");
    x.setAttribute("class", "food");
    var y = document.createTextNode(menu[i]);
    x.appendChild(y);
    document.getElementById("menu").appendChild(x);
}
