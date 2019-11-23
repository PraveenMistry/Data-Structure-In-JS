// Find the maximum number in an array of numbers

function getMaximum(numberArray){
	var maximum=-9999999;
	for(var i=0;i<numberArray.length-1;i++){
		if(maximum<numberArray[i]){maximum=numberArray[i]}
	}
	return maximum;
}

var numbers = [175, 50, 25, -4, 40, -12];
getMaximum(numbers); // 175