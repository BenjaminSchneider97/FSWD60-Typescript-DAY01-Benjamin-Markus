let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
array.forEach(function(value){
	array.forEach(function(value2){
		document.write(value + " X " + value2 + " = " + (value*value2) + "<br>");
	});
});




for (var value of array) {
   for (var value2 of array) {
   		document.write(value + " X " + value2 + " = " + (value*value2) + "<br>");

}
}