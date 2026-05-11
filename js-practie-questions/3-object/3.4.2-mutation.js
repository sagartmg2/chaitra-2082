let person = {
    firstName: "Hari",
    lastName: "Kumar",
    contact: {
        ncell: 9808000000,
        ntc: 9851000000
    }

}

/* TODO:  Add  a new contact (ntc) field in above persons contact  */
person.contact.ntc = 9851000000;


/* 
        CODE HERE
*/
console.log("firstName:", person.firstName)
console.log("lastName:", person.lastName)
console.log("Contact:", person.contact)

/* 
    Output: 
    {
        firstName: "Hari",
        lastName: "Kumar",
        contact:{
            ncell:9808000000,
            ntc: 9851000000
        }
    }

*/



