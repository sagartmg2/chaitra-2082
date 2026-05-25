let colors = ["red", "green", "blue", "yellow"];
let numbers = [10, 20, 30, 40, 50];

function getFirstAndLast(arr){
let first = arr[0];
let last = arr[arr.length - 1];
console.log(`first: ${first}, last : ${last}`);
}
getFirstAndLast(colors);
getFirstAndLast(numbers);
/*
TODO: Create a function called getFirstAndLast that takes an array and returns an object with 'first' and 'last' properties.

Example:
getFirstAndLast(colors) ➞ { first: "red", last: "yellow" }
getFirstAndLast(numbers) ➞ { first: 10, last: 50 }
*/
