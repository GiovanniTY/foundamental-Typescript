//Write a while loop that prints numbers from 1 to 5.
function printFive():void{
    let i = 0;
    while ( i < 5) {
         console.log(i)
         i++
    }
}
printFive();

//Write a while loop that sums all the numbers from 1 to 100.

function sum():number{
    let sum = 0;
    let i = 0;
    while (i < 100) {
    i++;
    sum += i;
    

    }
    return sum;
}
console.log(sum());

//Write a while loop that keeps generating a random number between 1 and 10 until the number 7 is generated.
function randomNumber():void{
    let num = 0;
    while(num !== 7){
       num = Math.floor(Math.random() * 10) + 1;
       console.log(num);
    }
}

randomNumber();

//Write a while loop that asks the user to input a number greater than 10. The loop should continue until the user provides a valid number.

document.addEventListener('DOMContentLoaded', () => {
    const formElement = document.getElementById('numberForm') as HTMLFormElement;
    const inputElement = document.getElementById('numberInput') as HTMLInputElement;
    const messageElement = document.getElementById('message') as HTMLParagraphElement;

    formElement.addEventListener('submit', (event) => {
        event.preventDefault(); 

        const userNumber = Number(inputElement.value);

        if (userNumber > 10) {
            messageElement.textContent = `Thank you! You entered ${userNumber}.`;
        } else {
            messageElement.textContent = 'Please enter a number greater than 10.';
        }
    });
});
//Write a while loop that counts down from 10 to 1 and prints each number.

function printCountsDown():void{
    let i = 10;
    while (i >= 1 ) {
        console.log(i);
        i--;

    }
}

printCountsDown();