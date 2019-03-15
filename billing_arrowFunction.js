//This is the code for the billing arrow code and below it is my process.

var billing = (amountTendered, transsactionCharge)  => {
		var billedAmount = amountTendered - (transsactionCharge*amountTendered);
	    return billedAmount;
	}
	
	billing(100000, 0.025)


/*I started off by converting the billing code into a function which I then 
converted into an arrow function. The normal function is below. */

function billing (amountTendered, transsactionCharge) {
	var billedAmount = amountTendered - (transsactionCharge*amountTendered);
	return billedAmount;
	}
	
	billing(100000, 0.025)


//This is the original code
const transsactionCharge = 0.025;
var amountTendered = 100000;
console.log ("This is what the billed amount is (less transaction charges);")
console.log (amountTendered - (transsactionCharge*amountTendered))

