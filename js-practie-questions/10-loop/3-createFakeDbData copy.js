const nepaliNames = ["Aarav", "Aarya", "Aasha", "Anisha"];

let users = [];

// for (let i = 0; i < nepaliNames.length; i++) {
//   let name = nepaliNames[i];
//   users.push({
//     name: name,
//     email: `${name.toLowerCase()}@gmail.com`,
//     pasword: `${name.toLowerCase()}${i}`,
//   });
// }

function printName(name) {
  console.log(`passed name is ${name}`);
}

// printName(nepaliNames[0]);
// printName(nepaliNames[1]);
// printName("hari");

nepaliNames.forEach((el, index) => {
  users.push({
    name: el,
    email: `${el.toLowerCase()}@gmail.com`,
    pasword: `${el.toLowerCase()}${index}`,
  });
});

let fakeUsers = nepaliNames.map((el, index) => {
  return {
    name: el,
    email: `${el.toLowerCase()}@gmail.com`,
    pasword: `${el.toLowerCase()}${index}`,
  };
});

console.log({fakeUsers});

/* 
  map function

*/
/* 
TODO: 
    From the above array create an new array of users with email and password 


    OUTPUT should be like following
    [
        { name: 'Aarav', email: 'aarav@gmail.com', password: 'aarav0' },
        { name: 'Aarya', email: 'aarya@gmail.com', password: 'aarya1' },
        { name: 'Aasha', email: 'aasha@gmail.com', password: 'aasha2' },
        { name: 'Anisha', email: 'anisha@gmail.com', password: 'anisha3' },
    ] 

*/

console.log(users);
