let course = "mern";
let course2 = "python";
let course3 = "qa";
let course4 = "ai";
let course5 = "ml";

// let courses = {
//   title: "mern",
//   title: "qa",
//   title: "ai",
// };

/* 
    Array: collection of multiple values
        : usually collection of similar data-types

    the values inside an array are called ELEMENTS

    indexing: always starts with 0 th index 

    */

let ml = "machine learning";
let courses = ["mern", "python", "qa", "ai", ml];
courses = [{ title: "mern" }, { title: "python" }, { title: "qa" }];

let users = ["ram", "hari", "shyam"];

let numbers = [1, 2, 3, 4, 5];

// let evenNumbers = [2, 4, 6, 8, 10, "twelve", true, false]; // DONOT mix data-types

let evenNumbers = [2, 4, 6, 8, 10, "twelve"]; // replace "twelve" by   12

// console.log(courses);
// console.log(users);
// console.log(numbers);
console.log(evenNumbers);
console.log("index 0 ", evenNumbers[0]);
console.log("index 1 ", evenNumbers[1]);
console.log("index 2 ", evenNumbers[2]);
console.log("index 3 ", evenNumbers[3]);
console.log("index 4 ", evenNumbers[4]);
console.log("before index 5 ", evenNumbers[5]);

evenNumbers[5] = 12;

console.log("after index 5 ", evenNumbers[5]);
console.log(evenNumbers);
