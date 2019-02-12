var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
array.forEach(function (value) {
    array.forEach(function (value2) {
        document.write(value + " X " + value2 + " = " + (value * value2) + "<br>");
    });
});
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var value = array_1[_i];
    for (var _a = 0, array_2 = array; _a < array_2.length; _a++) {
        var value2 = array_2[_a];
        document.write(value + " X " + value2 + " = " + (value * value2) + "<br>");
    }
}
