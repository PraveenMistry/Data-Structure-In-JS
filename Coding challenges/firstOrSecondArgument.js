// Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both

function composeSum(sum,n){
	return sum+=n;
}

function firstOrSecondArgument(first,second){
	var compose = 0;
	if(first){
		compose= first.reduce(composeSum);
	}else{
		compose= second.reduce(composeSum);
	}
	return compose;
}

var first 	=[1,2,3];
var second 	=[4,5,6,2];
firstOrSecondArgument(first,second); // 6