let address = "balaju"
const users = [
  {
    name: "Ram",
    percentage: 98,
    address
  },
  {
    name: "john",
    percentage: 65,
  },
  {
    name: "sita",
    percentage: 50,
  },
];
/* 
    users[0].grade = "A";
    users[1].grade = calculateGrade(users[1].percentage);
    users[2].grade = calculateGrade(users[2].percentage);
 */

function assignGrade(user) {
  let grade = calculateGrade(user.percentage);
  user.grade = grade;
}

assignGrade(users[0]);
assignGrade(users[1]);
assignGrade(users[2]);

// users[2].grade = calculateGrade(80)

/* 
Score Range	Letter Grade
90 - 100	A
80 - 89.9	B
70 - 79.9	C
60 - 69.9	D 
Below 60	F 
*/

/* TODO:
    add grade property to above users. for all of them.
*/

function calculateGrade(percentage) {
  if (percentage >= 90) {
    return "A";
  } else if (percentage >= 80 && percentage < 90) {
    return "B";
  } else if (percentage >= 70 && percentage < 80) {
    return "C";
  } else if (percentage >= 60 && percentage < 70) {
    return "D";
  }
  return "F";
}

// console.log(calculateGrade(90));
// console.log(calculateGrade(89.99));
// console.log(calculateGrade(50));

console.log(users);

/* 
    EXPECTED-OUTPUT on console.log(users)
    [
        {
            name:"Ram",
            percentage:98,
            grade:A
        },
        {
            name:"john",
            percentage:65,
            grade:D
        },
        {
            name:"sita",
            percentage:80,
            grade:B
        },
    ]
    
*/

// function sum(input1, input2) {
//   return input1 + input2;
// }

// double(sum(3, 5));  // double(8)
