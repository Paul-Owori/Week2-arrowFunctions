/* 
The code for the age calculator arrow function is here and below 
that is an explanation for my process.
*/

var ageCalc = date => {
	var d = String(new Date().getFullYear());   
	var x = date.split("-")[2]; 
	var age = d - x; 	
	return age;
		}

ageCalc ("23-07-1995")


/*I started off by shortening the code from what I wrote for the initial age calculator assignment, then I wrote it as a normal function which I then made into an arrow function.
 Here is the function code with no comments
*/

function ageCalc (date) {
	var d = String(new Date().getFullYear());   
	var x = date.split("-")[2]; 
	var age = d - x; 	
	return age;
		}
ageCalc ("23-07-1995")


//The normal function code with comments explaining what each step does.
function ageCalc (date) {
	var d = String(new Date().getFullYear());   //var d obtains the current year as an integer.
	var x = date.split("-")[2]; //var x converts the function input into an array and assigns the value at index 3(which is the current year) to var x.
	
	var age = d - x; // subtracts the year obtained from the input from the current year registered by the users pc
	return age; //returns the value of age
		}
ageCalc ("23-07-1995")



//The original code for the age calculator

var date = "23-07-1995";
var t = date.split("-")[2]
var x = f.split(" ")[3]
var age = x - t
console.log (age)

//Explanation for how the original code works
var date = "23-07-1995"; //This is value for the fixed date we'll use
var t = date.split("-")[2] //This converts var date into an array and assigns the value at index 2 to var t
d = new Date(); //This assigns to var d; the value of the current date from the users computer in the format 2019-03-13T12:29:07.593Z
var f = String(d) //This converts the date from var d into string and it is in the format Wed Mar 13 2019 15:36:33 GMT+0300 (East Africa Time)
var x = f.split(" ")[3] // Converts var f into an array and assigns the value at index 3(which is the current year) to var x.
var age = x - t // Subtracts var t (The year from the fixed date) from var x (Current year from user pc)
console.log (age) // Prints the result which is user age


