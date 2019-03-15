//This is the code for the try100 arrow function and below that is my process.
var try100 = (num) =>{
          while (num<100){
          	console.log ("(" + num + ")" + " is still less than 100");
            num++;
          }
          return ("Congratulations! You reached 100!")
          }

try100 (34)


/*
I started off by rewriting the try100 code to give more sensible output.
I then rewrote it as a normal function which I then converted into an arrow 
function. The normal function is below;
*/

function try100 (num){
			while (num<100){
				console.log ("(" + num + ")" + " is still less than 100");
			  num++;
			}
			return ("Congratulations! You reached 100!")
			}

try100 (34)

//The original try100 code.

var num = (0);
while (num<100) {
	console.log ("This is still less than 100");
  num++;
}
console.log ("Congratulations! You reached the end of my code!")
