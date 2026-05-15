/* 
    console.log(`double of 2 is 4`);
    console.log(`double of 10 is 20`);
    console.log(`double of 100 is 200`);

    console.log(`2 X 2 = 4`);
    console.log(`10 X 2 = 20`);
*/

function double(inputNumber) {
  console.log(`double of ${inputNumber} is ${2 * inputNumber}`);
}

// double(20);
// double(100);

/* 
    console.log( "2 + 2  = 4");
    console.log( "5 + 2  = 7 ");
    console.log( "2 + 20  = 22");
 */
function sum(firstNumber, secondNumber) {
  console.log({ firstNumber: firstNumber });
  console.log({ secondNumber });
  let result = firstNumber + secondNumber;
  console.log(`${firstNumber} + ${secondNumber}  = ${result}`);
}

// sum(10, 20);
// sum(5, 15);

// console.log("5 X 2 = 10");

function calculateMultiplication(firstInput, secondInput, thridInput) {
  console.log(`${firstInput} X ${secondInput} = ${firstInput * secondInput}`);
}

calculateMultiplication(5, 2); // 5 X 2 = 10
calculateMultiplication(5, 3); // 5 X 3 = 15
calculateMultiplication(5, 5); // 5 X 5 = 25
calculateMultiplication(7, 5); // 7 X 5 = 35
