/* Write a function describePerson that takes two parameters: name (string) and age (number, optional). If age is provided,
return a string that includes the age; otherwise, return just the name. */
function describePerson(name, age) {
    if (age !== undefined) {
        return "My name is ".concat(name, " and I'm ").concat(age, " years old.");
    }
    return "My name is ".concat(name, ".");
}
console.log(describePerson('giovanni', 27));
