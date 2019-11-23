// Calculate the sum of numbers in an array of numbers

function sum(total, num){
	 return total + num;
}

function sumOfArrayElement(numberArray){
	return numberArray.reduce(sum)
}

var numbers = [175, 50, 25];
sumOfArrayElement(numbers); // 250