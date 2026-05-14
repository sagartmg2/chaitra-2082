let courses = ["mern", "python", "qa"];

courses = [
  { title: "mern", topics: ["html", "css", "js"] },
  { title: "python" },
  { title: "qa" },
];


console.log(courses);
console.log(courses[0]);
console.log(courses[0].topics[2]);
courses[0].topics[2] = "javascript"

console.log(courses);