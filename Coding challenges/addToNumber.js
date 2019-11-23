// Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.

function addToNumber(a,b){
	var sum = Number(a)+Number(b)
	return sum;
}

var str1 = "5";
var str2 = "5";
addToNumber(str1,str2); // 10