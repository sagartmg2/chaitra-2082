let students = [
  {
    name: "Ramesh",
    scores: [
      { exam: "first-term", gpa: 2 },
      { exam: "second-term", gpa: 4 },
      { exam: "third-term", gpa: 3 },
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
];

/* 
  console.log(`${students[0].name} scored gpa ${students[0].scores[0].gpa} in ${students[0].scores[0].exam} and ${students[0].scores[1].exam} in ${students[0].scores[1].exam}`)
  console.log(`${students[1].name} scored gpa ${students[1].scores[0].gpa} in ${students[1].scores[0].exam} and ${students[1].scores[1].exam} in ${students[1].scores[1].exam}`)
*/

function printStudentsScore(index) {
  let student = students[index];
  let firstTerm = student.scores[0];
  let secondTerm = student.scores[1];
  console.log(
    `${student.name} scored gpa ${firstTerm.gpa} in ${firstTerm.exam} and ${secondTerm.gpa} in ${secondTerm.exam}`,
  );
}

printStudentsScore(0);
printStudentsScore(1);
printStudentsScore(2);

/*  
    using functon, achieve the following
    
    EXPECTED-OUTPUT: 
    ramesh scored gpa 2 in first-term and 4 in second-term
    rita scored gpa 1.5 in first-term and 4 in second-term
    kiran scored gpa 4 in first-term and 2.9 in second-term

*/
