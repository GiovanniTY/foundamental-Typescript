/* Write a function sumAll that takes any number
of arguments (all numbers) and returns their sum. */
function sumAll() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var result = 0;
    for (var i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }
    return result;
}
console.log(sumAll(1, 2, 4, 6, 7, 8, 9, 10, 10));
