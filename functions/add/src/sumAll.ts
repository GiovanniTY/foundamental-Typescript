/* Write a function sumAll that takes any number 
of arguments (all numbers) and returns their sum. */

function sumAll(...numbers:number[]):number{
  let result = 0;
  for (let i = 0; i < numbers.length; i++){
    result += numbers[i];
  }
  return result;
}
console.log(sumAll(1,2,4,6,7,8,9,10,10));