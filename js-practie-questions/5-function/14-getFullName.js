let person1 = {
  firstName: "Ram",
  lastName: "Shrestha"
};

let person2 = {
  firstName: "Sita",
  lastName: "Gurung"
};

function getFullName(person){
return `${person.firstName} ${person.lastName}`;
}
console.log(getFullName(person1));
console.log(getFullName(person2));


/*
TODO: Create a function called getFullName that takes a person object and returns their full name.

Example:
getFullName(person1) ➞ "Ram Shrestha"
getFullName(person2) ➞ "Sita Gurung"
*/
