

let person = {
    first_name: "john",
    last_name: "doe",
    age: 30,
    website: "https://www.johndoe.com"
}

let fieldToRetrive = "website"

/* 

    using  fieldToRetrive variable, access the value of person object

        if fieldToRetrive is first_name, OUTPUT  should be john
        if fieldToRetrive is website, OUTPUT  should be https://www.johndoe.com

*/

console.log(person[fieldToRetrive]) // https://www.johndoe.com
// you can access the dynamic property using bracket notation with the variable
console.log(person[fieldToRetrive]) // https://www.johndoe.com

