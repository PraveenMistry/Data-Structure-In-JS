// Calculate the sum of first 100 prime numbers and return them in an array

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

function printSumOfPrime(num){
	var sum =0;
	var prime=[];
	for(var i=1;i<=num;i++){
		if(checkPrime(i)){prime.push(i);sum+=i;}
	}
	ret = {'primeArray':prime,'sum':sum}
	return ret;
}

printSumOfPrime(100); 
