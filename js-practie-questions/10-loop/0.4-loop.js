let todos = [
  {
    userId: 1,
    id: 1,
    title: "task one",
    completed: 0,
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

todos.forEach((el)=>{
  console.log(`${el.title} is ${el.completed === true  ? "complted": "pending"}`);
})


// console.log(`${todos[0].title} is ${todos[0].completed}`);
// console.log(`${todos[1].title} is ${todos[1].completed}`);
// console.log(`${todos[2].title} is ${todos[2].completed}`);

/* 
  FALSY values 
    - false
    - 0
    - NaN
    - undefined
    - ''
    - null
*/

/* 
    for (let index = 0; index < todos.length; index++) {
      if (todos[index].completed === true) {
        console.log(`${todos[index].title} is completed`);
      } else {
        console.log(`${todos[index].title} is imcomplete`);
      }
    } 
  */

/* 
    for (let index = 0; index < todos.length; index++) {
      let todo = todos[index];

      if (todo.completed === true) {
        console.log(`${todo.title} is completed`);
      } else {
        console.log(`${todo.title} is imcomplete`);
      }
    } 
  */

for (let index = 0; index < todos.length; index++) {
  let todo = todos[index];
  console.log(
    `${todo.title} is ${todos.completed === true ? "completed" : "incomplted"}`,
  );
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

let product = {
  // price: 1000,
  price: "thousand",
  quantity: 12,
};

// console.log(product.price * product.quantity);
