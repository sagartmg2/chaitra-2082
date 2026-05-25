let person1 = {
  age: 18,
  consent: true,
};

let person2 = {
  age: 20,
  consent: true,
};

let person3 = {
  age: 17,
  consent: true,
};

let person4 = {
  age: 20,
  consent: false,
};

/* 
    TODO: find if they are able to marry with each other. person1&2 , 3&4
    - criteras
        - both shuld be greater than 18
        - both shoulb have consent
*/

function checkEligibility(firstPerson, secondPerson) {
  if (
    firstPerson.age >= 18 &&
    secondPerson.age >= 18 &&
    firstPerson.consent == true &&
    secondPerson.consent == true
  ) {
    console.log("yes they can marry");
  } else {
    console.log("no they cannot marry");
  }
}

// checkEligibility(person1, person2); //
// checkEligibility(person1, person2); //  yes
// checkEligibility(person3, person4); // no
checkEligibility(person2, person4); // no
