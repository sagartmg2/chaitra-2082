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



// -----



 let todos = ["html", "css", "js"];
    
    // todos.splice(1, 1);
    // console.log(todos);

    let newtodos = todos.filter((el,index)=>{
        if(index !== 1) {
            return true
        }
    })

    newtodos = todos.filter((el,index)=> index !==1)
    console.log(newtodos);

