// Calculate the sum of even numbers greater than 10 and less than 30

function printSumOfEventNumberBetween(start,end){
	var sum=0;
	for(var i=start;i<=end;i++){
		if(i%2===0)
			sum+=i;
	}
	return sum;
}

printSumOfEventNumberBetween(10,30); // 220