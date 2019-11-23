// Calculate the sum of digits of a positive integer number

function sumOfDigit(num){
	var sum=0;
	num.toString().split("").forEach(function(n){
		sum+=Number(n);
	})
	return sum;
}

sumOfDigit(1234); //10

//OR

function sumDigits(value) {
	var sum = 0;
    while (value) {
      sum += value % 10;
      value = Math.floor(value / 10);
    }
    return sum;
}

sumDigits(87); // 15