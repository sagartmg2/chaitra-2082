const nepaliNames = ["Aarav", "Aarya", "Aasha", "Anisha", "John"];

let users = [];

/* 
  users[0] = {
    name: nepaliNames[0],
    email: nepaliNames[0] + "gmail.com",
    password: nepaliNames[0] + "0",
  };
  users[1] = {
    name: nepaliNames[1],
    email: nepaliNames[1] + "gmail.com",
    password: nepaliNames[1] + "0",
  };
 */

/* users.push({
    name: nepaliNames[0],
    email: nepaliNames[0] + "gmail.com",
    password: nepaliNames[0] + "0",
  });

  users.push({
    name: nepaliNames[1],
    email: nepaliNames[1] + "gmail.com",
    password: nepaliNames[1] + "0",
  });
*/




for (let index = 0; index < nepaliNames.length; index++) {
  // users[index] = {
  //   name: nepaliNames[index],
  //   email: nepaliNames[index] + "gmail.com",
  //   password: nepaliNames[index] + "0",
  // };

  users.push({
    name: nepaliNames[index],
    email: nepaliNames[index] + "gmail.com",
    password: nepaliNames[index] + "0",
  });
}

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
