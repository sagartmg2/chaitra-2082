// arrow functions

// callback functions

/* 
    array functions
        - push
        - forEach
        - map
        - filter
        - find
        
        - reduce
        - pop

        - some
        - every
*/

let numbers = [1, 3, 5, 6, 7, 8, 10, 11, 12];
/*
        let evenNumbers = [];

        numbers.map((el) => {
        if (el % 2 === 0) {
            evenNumbers.push(el);
            }
        });
        console.log(evenNumbers); 

*/

let evenNumbers = numbers.filter((el) => {
  if (el % 2 === 0) {
    return true;
  }
  //   return undefined;
});

console.log(evenNumbers);

let firstEvenNumber = numbers.find((el) => {
  if (el % 2 === 0) {
    return true;
  }
  //   return undefined;
});

console.log(firstEvenNumber);
