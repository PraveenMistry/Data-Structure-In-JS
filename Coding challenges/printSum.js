// Calculate the sum of numbers from 1 to 10

function printSum(start,end){
	var sum=0;
	for(var i=start;i<=end;i++){
		sum+=i;
	}
	return sum;
}

printSum(1,4); // 10