/* 
        let user = "ram";
        let age = 12;
        let address = "balaju";
        let phone = 984566777;

        let user2 = "sita";
        let age2 = 12;
        let address2 = "balaju";
        let phone2 = 984566777;
 */

/* 
    let projector = "sony";
    let color = "white";
    let price = 10000;
    let makeYear = "2025";


    let projector2 = "sony";
    let color2 = "white";
    let price2 = 10000;
    let makeYear2 = "2025"; 
*/

/* Object  : real life objects 

    Key:value,
    attribute:value,
    property:value,
*/

let product = "muse";
console.log(product);
product = "mouse";

let projector = {
  brand: "sny", // change to sony
  color: "white",
  price: "10000",
  makeYear: 2025,
};

let projector2 = {
  brand: "acer",
  color: "black",
  price: "10000",
  makeYear: 2026,
};

console.log(projector);
console.log("before brand", projector.brand);
projector.brand = "sony";
console.log("after brand", projector.brand);

console.log("______________");

console.log(projector2);

// let user = "ram"
// let user2 = "sita"

let user = {
  name: "ram",
  phone: 98342534,
  address: "balaju 01 kathamndu, gorahi 02 chtiwan",
};

let user2 = {
  name: "sita",
  phone: 973453453,
  address: {
    permanenetAddress: {
      district: "chitwan",
      ward: 1,
    },
    temporaryAddress: {
      district: "Kathmandu",
      ward: 16,
    },
  },
};

let course = "mern";
let course2 = "qa";
let course3 = "python";
