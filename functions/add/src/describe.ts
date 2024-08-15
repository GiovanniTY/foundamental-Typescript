/* Write a function describePerson that takes two parameters: name (string) and age (number, optional). If age is provided, 
return a string that includes the age; otherwise, return just the name. */

function describePerson(name: string, age?: number): string {
    if (age !== undefined) {
        return `My name is ${name} and I'm ${age} years old.`;
    }
    return `My name is ${name}.`;
}

console.log(describePerson('giovanni',27));