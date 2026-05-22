let todos = [
  {
    userId: 1,
    id: 1,
    title: "task one",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "task two",
    completed: "false",
  },
  {
    userId: 1,
    id: 3,
    title: "task three",
    completed: true,
  },
];

// console.log(`${todos[0].title} is ${todos[0].completed}`);
// console.log(`${todos[1].title} is ${todos[1].completed}`);
// console.log(`${todos[2].title} is ${todos[2].completed}`);

for (let index = 0; index < todos.length; index++) {
  console.log(`${todos[index].title} is ${todos[index].completed}`);
}

/* 
    there may be hundred of tasks.. 
    ternary operator. 
*/

/* 
    TODO:

    Expected-output:
    
    task one is incomplete
    task two is incomplete
    task three is completed

*/
