/* 
    conditions
        operator 
        - comparision operator

            eg: 
                "admin" == "admin"  // true
                "admin" == "guest"  // false

        - artematic operators

*/

let willRain = false;
let isSunny = true;

// if (willRain) {
//   console.log("take  umbrealla");
// } else {
//   console.log("no need to take  umbrealla");
// }

if (willRain) {
  console.log("take  umbrealla");
} else {
  if (isSunny) {
    console.log("take  umbrealla");
  } else {
    console.log("no need to take  umbrealla");
  }
}

if (willRain) {
  console.log("take  umbrealla");
} else if (isSunny) {
  console.log("take  umbrealla");
} else {
  console.log("no need to take  umbrealla");
}

let isSeller = true;

if (isSeller) {
  console.log("user can add products");
}

if ("admin" == "admin") {
  console.log("value matched");
}


if ("admin" == "guest") {
  console.log("value matched");
} else {
  console.log("guest value didnt match");
}
