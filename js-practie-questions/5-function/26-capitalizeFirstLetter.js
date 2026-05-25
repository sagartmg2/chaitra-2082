/*
TODO: Create a function called capitalizeFirstLetter that takes a string and returns the same string with the first letter capitalized.

Example:
capitalizeFirstLetter("hello") ➞ "Hello"
capitalizeFirstLetter("world") ➞ "World"
capitalizeFirstLetter("javascript") ➞ "Javascript"
*/

function capitalizeFirstLetter(str) {
    // your code here
    let firstInitial = str[0].toUpperCase();
    let restLeftWords = str.slice(1);
    return `${firstInitial}${restLeftWords}`;
}

console.log(capitalizeFirstLetter("hello"));
console.log(capitalizeFirstLetter("world"));
console.log(capitalizeFirstLetter("javascript"));
