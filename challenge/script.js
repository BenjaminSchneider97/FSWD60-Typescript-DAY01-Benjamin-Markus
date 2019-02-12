var heading = ["Wir leben für den", "Entdecke unsere", "Was gibt's", "Hier richtig", "Wo ist der nächste"];
var heading2 = ["Geschmack", "Produkte", "Neues", "Sparen", "King Finder"];
var itemOne = heading[0], itemTwo = heading[1], itemThree = heading[2], itemFour = heading[3], itemFive = heading[4];
for (var value in heading) {
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
var burgers = ["img/1.png", "img/2.png", "img/3.png", "img/4.png", "img/5.png", "img/6.png", "img/7.png", "img/8.png", "img/9.png", "img/10.png", "img/11.png", "img/12.png", "img/13.png"];
var burgernames = ["Burger1", "Burger2", "Burger3", "Burger4", "Burger5", "Burger6", "Burger7", "Burger8", "Burger9", "Burger10"];
for (var value in burgers) {
    var outerDiv = document.createElement("div");
    outerDiv.setAttribute("class", "burgers");
    var burger = document.createElement("img");
    burger.setAttribute("src", burgers[value]);
    outerDiv.appendChild(burger);
    var texth = document.createElement("p");
    var text = document.createTextNode(burgernames[value]);
    texth.appendChild(text);
    outerDiv.appendChild(texth);
    document.getElementById("allburgers").appendChild(outerDiv);
}
