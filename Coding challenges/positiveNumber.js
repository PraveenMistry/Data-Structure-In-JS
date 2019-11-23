// Create a function that receives an array of numbers as argument and returns an array containing only the positive numbers

function checkPositive(num){
	return num>0;
}

function positiveNumber(numberArray){
	return numberArray.filter(checkPositive)
}

var numbers = [175, 50, 25, -4, 40, -12];
positiveNumber(numbers); // [175, 50, 25, 40]