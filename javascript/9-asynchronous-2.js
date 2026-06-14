/* Exception Handling */

try {
  let number1 = 1;
  let result = (number1 * number2) / 0;
  console.log(result);
} catch (err) {
  console.log("error", err.message);
}

/*
 Promise
   - pending
   - resolved / fulfilled
   - reject  
*/

let pr1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // reject("Username already used.");
    // reject("SERVER error");
    // console.log("resolved....");
    resolve({
      name: "ram",
      id: 1,
      age: 20,
    });
  }, 2000);
  console.log("inside promise");
});


console.log(pr1);

pr1
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
  
console.log("sync -1");
console.log("sync -2");
console.log("sync -3");
