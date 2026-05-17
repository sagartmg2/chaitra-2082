let users = [];

/* 
    users[0] = { name: "ram", age: 21, address: "kapan" };
    users[1] = { name: "shyam", age: 22, address: "bagbazar" };
    users[2] = { name: "hari", age: 22, address: "bagbazar" };
 */
function addNewUser(id, name, age, address) {
  users[id] = { name: name, age, address };
}

addNewUser(0, "ram", 21, "kapan");
addNewUser(1, "ram", 21, "kapan");
addNewUser(2, "shyam", 22, "bagbazar");
addNewUser(3, "hari", 22, "jamal");

console.log(users);
/* 
    EXPECTED-OUTPUT:

    [
        { name: 'ram', age: 21, address: 'kapan' },
        { name: 'shyam', age: 22, address: 'bagbazar' },
        { name: 'hari', age: 22, address: 'jamal' }
    ]

*/
