let brand = "apple";
brand = "son";

brand = {
  title: "apple",
  ceo: "mr xyz",
  ceo: {
    firstName: "xyz",
    lastName: "xyz",
    website: "https://xyz.com",
    address: {
      permanentAddress: {
        state: "abc", //  replace this with bagmati
      },
    },
  },
  estd: 2000,
};

// code here.

console.log(brand.title);

console.log("befroe", brand.ceo.address.permanentAddress.state);
brand.ceo.address.permanentAddress.state = "bagmati";
console.log("after", brand.ceo.address.permanentAddress.state);
