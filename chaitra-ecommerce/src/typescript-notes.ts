



let fullName: string = "ram"
let price: number = 12
let isActive: boolean = true



//  Type Inference
let course = "mern" // typescript will set the course type as string
course = "python"

// let courses = ["mern","python",{title:"qa"}]

// let courses: string[] = ["mern","pyton",{title:"qa"}] // error: 
let courses: string[] = ["mern", "pyton", "qa"]

// let evenNumbers:number[] = [2,4,6,"eight"] // error: 
let evenNumbers: number[] = [2, 4, 6, 8]



let user = { name: "Ram", age: 12, address: { street: "stret 101" } };

console.log(user.age);
console.log(user.name);
console.log(user.address);
console.log(user.address.street);

// user.lastName = "bahadur"  // error

console.log("end");
console.log("end");


// let colors : { name:string, hex:string, rgb:string }[] = [] // this is valid but difficult to read.

type Color = {
    name: string
    hex: string
    rgb: string
}

let color: Color = {
    name: "red",
    hex: "#24234",
    rgb: "rgb....."
}


let colors: Color[] = [
    {
        name: "red",
        hex: "#adf",
        rgb: "rgb(....."
    }
]

interface User {
    name: string
    address: {
        street: string
    }
}


let users: User[] = [
    {
        name: "ram",
        address: {
            street: "ktm"
        }
    }
]

users[0].address.street





let brand: any;
brand = 101
brand = "sony"
brand = { compnay: "sony" }



// function double(input: <type>): return_type {
function double(input: number): number {
    console.log("double is", input * 2)
    return input * 2
}


double(32);
// double(32,32);
// double("Two")


const sum = (firstInput:number, secondInput:number) : number => firstInput + secondInput


// console.log(sum("1","2")); //error: //result: 12
console.log(sum(1,2)); // 3
