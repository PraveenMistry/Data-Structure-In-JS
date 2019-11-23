// Calculate the average of the numbers in an array of numbers

function sum(total, num){
	 return total + num;
}

function averageOfArrayElement(numberArray){
	return numberArray.reduce(sum)/numberArray.length;
}

var numbers = [175, 50, 25];
averageOfArrayElement(numbers); // 83.33333333333333