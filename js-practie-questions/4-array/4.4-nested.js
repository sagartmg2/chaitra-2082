let students = [
  {
    name: "Ramesh",
    scores: [
      { exam: "first-term", gpa: 2 },
      { exam: "second-term", gpa: 4 },
    ],
  },
  {
    name: "Rita",
    scores: [
      { exam: "first-term", gpa: 1.5 },
      { exam: "second-term", gpa: 4 },
    ],
  },
  {
    name: "Kiran",
    scores: [
      { exam: "first-term", gpa: 4 },
      { exam: "second-term", gpa: 2.9 },
    ],
  },
  {
    name: "Ram",
    scores: [
      { exam: "first-term", gpa: 4 },
      { exam: "second-term", gpa: 2.9 },
    ],
  },
  {
    name: "Sita",
    scores: [
      { exam: "first-term", gpa: 4 },
      { exam: "second-term", gpa: 2.9 },
    ],
  },
];

/* 
    EXPECTED-OUTPUT: 
    ramesh scored gpa 2 in first-term and 4 in second-term
    rita scored gpa 1.5 in first-term and 4 in second-term
    kiran scored gpa 4 in first-term and 2.9 in second-term
    Ram scored gpa 4 in first-term and 2.9 in second-term
    Sita scored gpa 4 in first-term and 2.9 in second-term

*/

// let student = students[0];
// console.log(
//   `${student.name} scored gap ${student.scores[0].gpa} in ${student.scores[0].exam} and gpa ${student.scores[1].gpa} in ${student.scores[1].exam}`,
// );

// student = students[1];
// console.log(
//   `${student.name} scored gap ${student.scores[0].gpa} in ${student.scores[0].exam} and gpa ${student.scores[1].gpa} in ${student.scores[1].exam}`,
// );

// student = students[2];
// console.log(
//   `${students[2].name} scored gap ${students[2].scores[0].gpa} in ${students[2].scores[0].exam} and gpa ${students[2].scores[1].gpa} in ${students[2].scores[1].exam}`,
// );

// student = students[3];
// console.log(
//   `${student.name} scored gap ${students[2].scores[0].gpa} in ${students[2].scores[0].exam} and gpa ${students[2].scores[1].gpa} in ${students[2].scores[1].exam}`,
// );

function printScrores(index) {
  let student = students[index];
  console.log(
    `${student.name} scored gap ${student.scores[0].gpa} in ${student.scores[0].exam} and gpa ${student.scores[1].gpa} in ${student.scores[1].exam}`,
  );
}

printScrores(0);
printScrores(1);
printScrores(2);
printScrores(3);

