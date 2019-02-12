var menu = ["Burger", "Schnitzel", "Soup", "Fish", "Burrito"];
var itemOne = menu[0], itemTwo = menu[1], itemThree = menu[2], itemFour = menu[3], itemFive = menu[4];
for (var _i = 0, menu_1 = menu; _i < menu_1.length; _i++) {
    var value = menu_1[_i];
    var x = document.createElement("p");
    x.setAttribute("class", "food");
    var y = document.createTextNode(value);
    x.appendChild(y);
    document.getElementById("menu").appendChild(x);
}
