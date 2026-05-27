let people = [
  { name: "Ram", age: 25 },
  { name: "Sita", age: 22 },
  { name: "Hari", age: 30 },
];

/*
TODO: Create a function called findPersonByName that takes an array of people and a name, and returns the person object with that name.

Example:
findPersonByName(people, "Sita") ➞ { name: "Sita", age: 22 }
findPersonByName(people, "Hari") ➞ { name: "Hari", age: 30 }
*/

function findPersonByName(inputArr, name) {
  let matched = inputArr.find((el) => {
    if (el.name == name) {
      return true;
    }
  });
  return matched;
}

console.log(findPersonByName(people, "Sita"));
