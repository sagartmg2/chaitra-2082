let person = {
  name: "ram",
  age: 12,
};

console.log(person.address);
person.address = "balaju";

let courses = ["mern", "python", "qa"];

// TODO: what if we want to add two more courses here.  devops and  data-science here

courses[2] = "qualiaty assuracne";

console.log(courses[3]);
courses[3] = "deveops";
courses[4] = "data-science";

console.log(courses); // EXPECTED-OUTPUT: "mern", "python", "qa", "devops", "data-science"];
