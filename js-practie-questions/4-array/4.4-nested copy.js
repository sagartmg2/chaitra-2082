let students = [
  {
    name: "Ramesh",
    scores: [
      { exam: "first-term", gpa: 2 },
      { exam: "second-term", gpa: 4 }
    ]
  },
  {
    name: "Rita",
    scores: [
      { exam: "first-term", gpa: 1.5 },
      { exam: "second-term", gpa: 4 }
    ]
  },
  {
    name: "Kiran",
    scores: [
      { exam: "first-term", gpa: 4 },
      { exam: "second-term", gpa: 2.9 }
    ]
  }
];

console.log(students);


console.log(students[0].name);
console.log(students[0].scores[0]);
console.log(students[0].scores[1]);


console.log(students[1].name);
console.log(students[1].scores[0]);
console.log(students[1].scores[1]);


console.log(students[2].name);
console.log(students[2].scores[0]);
console.log(students[2].scores[1]);


console.log(`${students[0].name} scored gpa ${students[0].scores[0].gpa} in first-term and ${students[0].scores[1].gpa} in second-term`);
// console.log(`${students[1].name} scored gpa ${students[1].scores[0]} in first-term and ${students[1].scores[1]} in second-term`);
// console.log(`${students[2].name} scored gpa ${students[2].scores[0]} in first-term and ${students[2].scores[1]} in second-term`);


/* 
    EXPECTED-OUTPUT: 
    ramesh scored gpa 2 in first-term and 4 in second-term
    rita scored gpa 1.5 in first-term and 4 in second-term
    kiran scored gpa 4 in first-term and 2.9 in second-term

*/