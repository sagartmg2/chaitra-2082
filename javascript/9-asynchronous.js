

// function showPopup() {
//   console.log("show pop-up");
// }

const showPopup = () => {
  console.log("show pop-up");
  return undefined;
};

/* 
    asynchronous
    - takes some time
    - runs in background
    - donot block other tasks.
 
 */
// setTimeout(showPopup()); // setTimeout(undefined);


/* 
    callback function:
        - a function passed to another funciton as an arguement / parameter
        - call me back.

*/

setTimeout(showPopup, 5000);


setTimeout(() =>{
    console.log("show another pop-up");
},8000)

// sendMail: time-consuming-task : process in background 

/* synchronous */

for (let i = 20; i < 100; i++) {
  console.log("inside loop", i);
}

console.log("1");
console.log("2");
console.log("3");



