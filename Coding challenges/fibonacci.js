// Create a function that will find the nth Fibonacci number using recursion

function fibonacci(n){
	if(n===1){return [0,1]}
	else{
		var fi= fibonacci(n-1);
		fi.push(fi[fi.length-1]+fi[fi.length-2]);
		return fi;
	}
}


fibonacci(5); // [0, 1, 1, 2, 3, 5]