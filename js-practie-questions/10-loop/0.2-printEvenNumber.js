// print even number between 22 to 55


/* output:
    24
    26
    28
    .
    .
    .
    .
    50
    52
    54
    
*/

for (let number = 23; number <= 55; number++) {
  if(number % 2 == 0){
    console.log(number);
  }
}