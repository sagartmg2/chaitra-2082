let users = ["ram", "hari", "shyam", "gita", "sita"];
// let users = ["ram", "hari"];

// there may be hundreds of users.
// print the users  and count the total number of users.

/* OUTPUT
    ram
    hari
    shyam
    gita


    total users: 4

*/

// console.log(users[0]);
// console.log(users[1]);
// console.log(users[2]);
// console.log(users[3]);

for (let index = 0; index < users.length; index++) {
//   console.log({ index });
  console.log(users[index]);
}

console.log("total users", users.length);
