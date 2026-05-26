let numbers = [1, 2, 3, 4];

/* 

    let doubledNumbers = [];

    numbers.forEach((el, index) => {
    //   doubledNumbers.push(el * 2);
    //   el = el * 2;
    //   console.log(el);
    numbers[index] = el * 2;
    });

    console.log(doubledNumbers);
 */

const doubledNumbers = numbers.map((el,index) => {
  return el * 2;
  return undefined;
  return "double value";
});

console.log({doubledNumbers});
/* 
    code here

 */

console.log({numbers}); // should print me [2,3,6,8]

/* 

    array functions
    
*/
