//This is the code for the primeLogger arrow function and below that is my process.


var primeLogger = n => {
 for (var nmbr = 2; nmbr <= n; nmbr++) {

   var notPrime = false;
   for (var x = 2; x <= nmbr; x++) {
       if (nmbr%x===0 && x!==nmbr) {
           notPrime = true;
       }
   }
   if (notPrime === false) {
     console.log (nmbr);
   }
 }
 return ("finished!")
 }
 primeLogger (50)


/*I started off by writing the primeLogger code as a normal function which 
I then converted into an arrow function. The normal function is below*/

function primeLogger (n) {
for (var nmbr = 2; nmbr <= n; nmbr++) {

  var notPrime = false;
  for (var x = 2; x <= nmbr; x++) {
      if (nmbr%x===0 && x!==nmbr) {
          notPrime = true;
      }
  }
  if (notPrime === false) {
    console.log(nmbr);
  }
}
}
primeLogger (50)

//The original primeLogger code.
var n=50;
for (var nmbr = 2; nmbr <= n; nmbr++) {

  var notPrime = false;
  for (var x = 2; x <= nmbr; x++) {
      if (nmbr%x===0 && x!==nmbr) {
          notPrime = true;
      }
  }
  if (notPrime === false) {
    console.log(nmbr);
  }
}