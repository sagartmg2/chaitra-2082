//  single line comment:  ctrl + /
/*  block comment: alt + shift + a  */
/* 
    simple a box / container where we can store some values

    simply a keyword where we can store some values

    re-use
*/
var color = "red";
// let brand = "apple";
// let model = "G5-XX";

a = "ram"; // ERROR  : a variable name should be meaningull similar to semantic tags in HTML
b = "sita";
firstName = "ram";
lastName = "bahadur";
address = "balaju";
paid = true;
paymentMode = "online";   // camelCase
payment_mode = "online";   // snake_case
age = 22;
age = 24;

// class = "one"  // ERROR: WE cannot use reserve keywords as variables
grade = "one";

// product = keyboard // keyboard is not defined
product = "keyboard";
// full name = "ram bahadur"

fullName = firstName + lastName;
fullName = "ram" + "bahadur"; // string concatination

console.log(firstName);
console.log(address);
console.log(age);
console.log(product);
console.log(fullName);

/* variable declaration and initialziation and re-initialization */

/* var vs let vs const */

var color = "white";
var color = "black";
var color = "red";
console.log("color", color);



let size = "md";
// let size = "sm"; // ERROR: cannot redeclare size variable prevously created using let keyword
size = "sm";
size = "lg";
size = "xl";
console.log("size", size);

let brand = "sony";
let model = "S-55";

const PI = 3.145;
// const PI = 3.1454;  ERROR: cannot re-initialize constant varialbe
