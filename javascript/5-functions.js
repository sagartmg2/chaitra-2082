const colors = [
  { name: "white", hex: "#FFFFFF", rgb: "rgb(255, 255, 255)", arrayIndex: 0 },
  { name: "red", hex: "#FF0000", rgb: "rgb(255, 0, 0)", arrayIndex: 1 },
  { name: "blue", hex: "#0000FF", rgb: "rgb(0, 0, 255)", arrayIndex: 2 },
  { name: "green", hex: "#00FF00", rgb: "rgb(0, 255, 0)", arrayIndex: 3 },
  { name: "black", hex: "#000000", rgb: "rgb(0, 0, 0)", arrayIndex: 4 },
];

// hex value of white is #fffff
// hex value of red is #ff0000
// string literal , template literal
// DRY

/* 
    console.log(`hex value of ${colors[0].name} is ${colors[0].hex} and rgb is ${colors[0].rgb}`);
    console.log(`hex value of ${colors[1].name} is ${colors[1].hex} and rgb is ${colors[1].rgb}`);
    console.log(`hex value of ${colors[2].name} is ${colors[2].hex} and rgb is ${colors[2].rgb}`);
    console.log(`hex value of ${colors[3].name} is ${colors[3].hex} and rgb is ${colors[3].rgb}`);
    console.log(`hex value of ${colors[4].name} is ${colors[4].hex} and rgb is ${colors[4].rgb}`);
 */

/* 
    functions
        - parameter / arguements
        - execute/calling a function

*/

let dog = {
  breed: "pug",
  makeSound: function () {
    console.log("Bark");
  },
};

dog.makeSound();

function printColorDetail(index) {
  console.log({ index: index });
  // console.log(`hex value of ${colors[0].name} is ${colors[0].hex}`);
  console.log(`hex value of ${colors[index].name} is ${colors[index].hex}`);
}

printColorDetail(0);
printColorDetail(1);
printColorDetail(2);

// TODO: print double of following numbers 2,5, 10, 20, 50, 100

/* 
    double of 2 is 4
    double of 5 is 10
    double of 10 is 20
    double of 50 is 100
    double of 100 is 200
*/

function double(inputNumber) {
  console.log(`double of ${inputNumber} is ${2 * inputNumber}`);
}

double(2);
double(10);
double(100);

function sum(firstNumber, secondNumber) {
  console.log(firstNumber);
  console.log(secondNumber);
}

sum(5, 10); // 5 + 10 = 15
sum(33, 44); // 33 + 44 = 77

calculateMultiplicate(5, 2); // 5 X 2 = 10
calculateMultiplicate(5, 3); // 5 X 3 = 15
calculateMultiplicate(5, 5); // 5 X 5 = 25
calculateMultiplicate(7, 5); // 7 X 5 = 35
