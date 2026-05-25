let person1 = {
  firstName: "Ram",
  lastName: "Shrestha",
};

// console.log(person1.firstName + " " + person1.lastName);

let person2 = {
  firstName: "Sita",
  lastName: "Gurung",
};

/* console.log(person2.firstName + " " + person2.lastName); */

// function getFullName(user) {
//   console.log(user.firstName + " " + user.lastName);
// }

const getFullName = (user) =>{
   console.log(user.firstName + " " + user.lastName);
}

getFullName(person1);
getFullName(person2);

/*
TODO: Create a function called getFullName that takes a person object and returns their full name.

Example:
getFullName(person1) ➞ "Ram Shrestha"
getFullName(person2) ➞ "Sita Gurung"
getFullName(person3) ➞ "Sita Gurung"
getFullName(person4) ➞ "Sita Gurung"
*/
