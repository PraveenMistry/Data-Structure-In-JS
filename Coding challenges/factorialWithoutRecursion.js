// Print the first 10 Fibonacci numbers without recursion

function factorialWithoutRecursion(num){
	var fact=num;
	for(var i=1;i<num;i++){
		fact*=(num-i)
	}
	return fact;
}

factorialWithoutRecursion(10); // 3628800