// Print the first 100 prime numbers

function checkPrime(num){
	if(num<2){return false;}
	else{
		for(var i=2;i<num;i++){
			if(num%i===0){
				return false
			}
		}
	}
	return true;
}

function printPrime(num){
	var prime=[];
	for(var i=1;i<=num;i++){
		if(checkPrime(i)){prime.push(i)}
	}
	return prime;
}

printPrime(100); // [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]