let users = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 30,
  },
  {
    firstName: "Rajesh",
    lastName: "Hamal",
    age: 20,
  },
  {
    firstName: "John",
    lastName: "Wick",
    age: 30,
  },
  {
    firstName: "Doe",
    lastName: "Wick",
    age: 30,
  },
];

function printUserDetails(indx){
  console.log(`name is ${users[indx]?.firstName} ${users[indx]?.lastName} and age is ${users[indx]?.age}`);
}
printUserDetails(0);
printUserDetails(1);
printUserDetails(2);
printUserDetails(3);


/* 
TODO: create a function printUserDetails and re-use it for all users 

output should be as follows 
    name is john doe and age is 10.
    name is rajesh hamal and age is 20.
    name is john wick and age is 30.
*/




/* 
    console.log(`name is ${users[0].firstName} ${users[0].lastName} and age is ${users[0].age}.`)
    console.log(`name is ${users[1].firstName} ${users[1].lastName} and age is ${users[1].age}.`)
    console.log(`name is ${users[2].firstName} ${users[2].lastName} and age is ${users[2].age}.`)
 */

<<<<<<< HEAD
// function printUserInfoOld(idx) {
//   console.log(
//     `name is ${users[idx]?.firstName} ${users[idx]?.lastName} and age is ${users[idx]?.age}.`,
//   );
// }
=======


function printUserInfoOld(idx) {
  console.log(
    `name is ${users[idx].firstName} ${users[idx]?.lastName} and age is ${users[idx]?.age}.`,
  );
}
// printUserInfo(0);
// printUserInfo(1);
// printUserInfo(2);
// printUserInfo(3);
// printUserInfo(4);


>>>>>>> teacher

// function printUserInfo(user) {
//   console.log(
//     `name is ${user?.firstName} ${user?.lastName} and age is ${user?.age}.`,
//   );
// }


<<<<<<< HEAD
// printUserInfo({ firstName: "hari", lastName: "bahadur", age: 12 });
// printUserInfo(users[0]);
// printUserInfo(users[1]);
// printUserInfo(users[2]);
// printUserInfo(users[3]);
// printUserInfo(users[4]);
// printUserInfo(users[5]);
=======
printUserInfo(users[4]); //  printUserInfo(undefined)
printUserInfo({ firstName: "hari", lastName: "bahadur", age: 12 });
printUserInfo(users[0]);
printUserInfo(users[1]);
printUserInfo(users[2]);
printUserInfo(users[3]);
printUserInfo(users[5]);
>>>>>>> teacher
