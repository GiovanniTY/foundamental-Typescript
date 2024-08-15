// Write a for loop that prints all numbers from 1 to 10.
function printNumber(x) {
    for (var i = 0; i < x; i++) {
        console.log(i);
    }
}
console.log(printNumber(20));
//Write a for loop that iterates over an array colors = ["red", "green", "blue"] and prints each element.
function printColors() {
    var colors = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        colors[_i] = arguments[_i];
    }
    for (var i = 0; i < colors.length; i++) {
        console.log(colors[i]);
    }
}
console.log(printColors('red', 'jaune', 'black'));
//Write a for loop that calculates the factorial of a given number n.
function findFactorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    var result = 1;
    for (var i = num; i >= 1; i--) {
        result *= i;
    }
    return result;
}
console.log(findFactorial(5));
//Write a nested for loop that prints a 3x3 matrix of numbers.
function printMatrix() {
    var count = 1;
    for (var row = 0; row < 3; row++) {
        var rowOutput = '';
        for (var col = 0; col < 3; col++) {
            rowOutput += "".concat(count, " ");
            count++;
        }
        console.log(rowOutput.trim());
    }
}
printMatrix();
//Write a for loop that prints numbers from 1 to 10, but stops if the number is equal to 7. 
function printNumbers() {
    for (var i = 0; i <= 10; i++) {
        if (i === 7) {
            break;
        }
        console.log(i);
    }
}
printNumbers();
