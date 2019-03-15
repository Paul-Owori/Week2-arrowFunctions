//This is the code for the nullChecker arrow code and below it is my process.

var nullChecker = code => {
						var num = "";
						if (code > 0) {
						num = 1;
						} else if (code < 0) {
						num = -1;
						} else if (code == 0) {
						num = 0;
						}
						return (num);
						}

nullChecker (10)


/*
I started off by converting the nullChecker code into a function which I
then converted into an arrow function. The normal function is below. 
*/

function nullChecker (code) {
							var num = "";
							if (code > 0) {
							num = 1;
							} else if (code < 0) {
							num = -1;
							} else if (code == 0) {
							num = 0;
							}
							return (num);
							}

nullChecker (10)


//This is the original code

var code = (prompt ("Please input a number"));
var num = "";
if (code > 0) {
			num = 1;
			} else if (code < 0) {
			num = -1;
			} else if (code == 0) {
			num = 0;
			}
console.log (num)
