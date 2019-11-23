// Calculate 10!
function factorial(num){
	if(num===0 || num===1){return 1}
	else{return num*factorial(num-1)}
}

factorial(10); // 3628800