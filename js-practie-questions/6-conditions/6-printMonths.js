/* 

create a function  getMonthName  to get the name of different months. 

   let name =  getMonthName(1)
   console.log(name)

    TODO:
    if i pass argument 1, it should give me January
    if i pass argument 2, it should give me February
    and so on....

    if i pass other than 1 to 12, it should give not a valid input

    
*/

/* 
    if else vs switch
*/

function getMonthName(input) {
  if (input == 1) {
    return "january";
  }
  if (input == 2) {
    return "feb";
  }
  if (input == 3) {
    return "marc";
  }
}

function getMonthNameOld(input) {
  if (input == 1) {
    return "january";
  } else if (input == 2) {
    return "feb";
  } else if (input == 3) {
    return "march";
    // ... all 12 months
  } else {
    return "invalid";
  }
}

function getMonthName(input) {
  let month = "";
  switch (input) {
    case 1 < 2: {   // true == true
      month = "jan";
      console.log("set 1");
      break;
    }
    case 2: {
      month = "feb";
      console.log("set 2");
      break;
    }
    default: {
      month = "invalid";
    }
  }
  return month;
}

console.log(getMonthName(true));
