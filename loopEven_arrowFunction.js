//I used both a normal function and an arrow function to accomplish the assignment.


/*
var evenLoop uses an arrow function to print all even numbers that come 
before whatever input it receives.
It's preset to 20, but any other values will work.
*/
var evenLoop = (x) => {for (i=0; i<=x; i++) { if(i%2==0){console.log (i) } } }
evenLoop (20)


/*
This function prints all even numbers that come 
before the parameter "x". It's preset to 20, but any other values will work.
*/
function evenLoop (x) {
  var i;
for (i=0; i<=x; i++) {if (i%2==0){console.log(i)}}
}
evenLoop (20)

