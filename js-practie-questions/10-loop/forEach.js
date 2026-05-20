const nepaliNames = ["Aarav", "Aarya", "Aasha", "Anisha"];

const colors = ["red", "orange", "black"];

let users = [
  {
    name: "ram",
    age: 20,
  },
  {
    name: "shyama",
    age: 23,
  },
];

function printElement(el, index) {
  console.log(index, el);
}

// nepaliNames.forEach(printElement);
// colors.forEach(printElement);
// users.forEach(printElement);

nepaliNames.forEach((name, idx) => {
  console.log(idx, name);
});

colors.forEach((color, index) => {
  console.log(index, color);
});

users.forEach((el, index) => {
  console.log(index, el);
});
