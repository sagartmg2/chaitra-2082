const nepaliNames = ["Aarav", "Aarya", "Aasha", "Anisha"];

let users = [];

for (let index = 0; index < nepaliNames.length; index++) {
  users[index] = {
    name: nepaliNames[index],
    email: nepaliNames[index] + "gmail.com",
    password: nepaliNames[index] + index,
  };

  //   users.push({
  //     name: nepaliNames[index],
  //     email: nepaliNames[index] + "gmail.com",
  //     password: nepaliNames[index] + index,
  //   });
}

nepaliNames.forEach((name, index) => {
  users.push({
    name,
    email: name + "gmail.com",
    password: name + index,
  });
});


console.log(users);
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
