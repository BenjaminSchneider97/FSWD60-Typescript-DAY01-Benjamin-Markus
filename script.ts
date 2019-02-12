let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


for (let i = 0; i < array.length; i++) {
	for (let j = 0; j < array.length; j++){
		document.write(array[i] + " X " + array[j] + " = " + (array[i]*array[j]) + "<br>");
	}
   
}
