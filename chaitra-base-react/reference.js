let age = 20;

let oldAge = age;
console.log(oldAge); //20
oldAge = 30;
console.log(oldAge); // 30

console.log(age); // 20

//
// -----------------------
//

let name = "ram";
let fullName = name;
fullName = "ram bdr";
console.log(fullName); // ram dbr
console.log(name); // ram

//
// -----------------------
//

let courses = ["mern", "qa"];
let newCourses = [...courses];
newCourses.push("data-science");
newCourses.push("ai");
console.log(newCourses);
console.log(courses);
