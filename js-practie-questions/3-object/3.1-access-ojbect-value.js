/*
    In an object we have keys and value. 
        to access the value inside an object, we need use its relative key

*/

let color = {
  name: "red",
  hexValue: "#FF0000",
  rgbValue: "rgba(255,0,0)",
};

// string literal
// template literal
console.log(`hex value of color ${color.name} is ${color.hexValue}`); // hex value of color red is #FF0000

// similary, print the value of person below

let person = {
  first_name: "john",
  last_name: 'doe',
  age: 22,
  website: `john@doe.com`,
};

console.log("full name is", person.first_name, person.last_name,"and age is",person.age); // e/xpected-output:  full name is john doe
console.log("full name is", person.first_name, person.last_name+" and age is",person.age); // e/xpected-output:  full name is john doe
console.log(`full name is ${person.first_name} ${person.last_name} and age is ${person.age} `)


console.log(person.first_name);
console.log(person.last_name);
