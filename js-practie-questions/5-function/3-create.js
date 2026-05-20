let users = [];

let incrementingIndex = 0;

function addNewUserOld(name, age, address) {
  users[incrementingIndex] = { name: name, age, address };
  // incrementingIndex = incrementingIndex + 1;
  // incrementingIndex += 1;
  incrementingIndex++
}

function addNewUser(name, age, address) {
  users[users.length] = { name: name, age, address };
}

addNewUser("ram", 21, "kapan"); // 0
addNewUser("shyam", 22, "bagbazar"); // 1
addNewUser("hari", 22, "jamal"); // 2

console.log(users);

/* 
    EXPECTED-OUTPUT:

    [
        { name: 'ram', age: 21, address: 'kapan' },
        { name: 'shyam', age: 22, address: 'bagbazar' },
        { name: 'hari', age: 22, address: 'jamal' }
    ]

*/
