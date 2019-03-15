//This is the code for the fizzBuzz arrow code and below it is my process.
var fizzBuzz = num => {
for (var n =1; n <= num; n++){
if (n%3===0 && n%5===0){    
  console.log("FizzBuzz!" + "(" + n + ")"); 
}else if (n%3===0) {        
  console.log("Fizz!" + "(" + n + ")");  
}else if (n%5===0){        
  console.log("Buzz!" + "(" + n + ")"); 
}else{
  console.log(n);
}
}
return ("finished!");
}
fizzBuzz (100)

/*I started off by editing my errors out of the old code, then converting it into a normal function which I then 
converted into an arrow function. The normal function is below. */

function fizzBuzz (num) {
for (var n =1; n <= num; n++){
if (n%3===0 && n%5===0){    
  console.log("FizzBuzz!" + "(" + n + ")"); 
}else if (n%3===0) {        
  console.log("Fizz!" + "(" + n + ")");  
}else if (n%5===0){        
  console.log("Buzz!" + "(" + n + ")"); 
}else{
  console.log(n);
}
}
return ("finished!");
}
fizzBuzz (100)


//This is the original code
var n = 1;
while (n <= 100){
if (n%3===0 && n%5===0){    //if n%3===0, and n%5===0 then the number is a multiple of 3 and 5
  console.log("FizzBuzz!" + "(" + n + ")"); //Print FizzBuzz and the number
}else if (n%3===0) {        //if n%3===0, then the number is a multiple of 3
  console.log("Fizz!" + "(" + n + ")");  //Print Fizz and the number
}else if (n%5===0){        //if n%5===0, then the number is a multiple of 5
  console.log("Buzz!" + "(" + n + ")"); //Print Buzz and the number
}else{
  console.log(n);
}
n ++;
}
