// Write a for loop that prints all numbers from 1 to 10.
function printNumber(x:number):void{
    for (let i = 0; i < x; i++){
        console.log(i);
    }
}
console.log(printNumber(20));

//Write a for loop that iterates over an array colors = ["red", "green", "blue"] and prints each element.
function printColors(...colors:string[]):void{
    for (let i = 0; i < colors.length; i++){
        console.log(colors[i]);
    }
}
console.log(printColors('red','jaune','black'));

//Write a for loop that calculates the factorial of a given number n.
function findFactorial(num:number):number{
    if (num === 0 || num === 1) {
    return 1;
    }
    let result = 1;
    for (let i = num;  i >= 1; i--) {
      result *= i;
    }
    return result;
  
  }
  console.log(findFactorial(5));

  //Write a nested for loop that prints a 3x3 matrix of numbers.
  function printMatrix(): void {
    let count = 1;
    
    for (let row = 0; row < 3; row++) {
        let rowOutput = '';
        for (let col = 0; col < 3; col++) {
            rowOutput += `${count} `;
            count++;
        }
        console.log(rowOutput.trim());
    }
}
printMatrix();


//Write a for loop that prints numbers from 1 to 10, but stops if the number is equal to 7. 

function printNumbers(){
    for (let i = 0; i<=10; i++){
        if (i === 7) {
            break;
        }
        console.log(i);
    }
}
printNumbers();