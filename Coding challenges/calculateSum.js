// Calculate the sum of numbers received in a comma delimited string

function calculateSum(numbers){
	var sum = 0;
	numbers.toLowerCase()
    .split(',')
    .map((number) => sum+=Number(number));

    return sum;
}


var numbers = "1,51,1,20,5";
calculateSum(numbers); // 78