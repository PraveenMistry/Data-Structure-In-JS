// Create a function that will return in an array the first “p” prime numbers greater than “n”

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

function printNextPrime(n){
	var num = 99;
	var prime;
	for(var i=n+1;i<=num;i++){
		if(checkPrime(i)){return i}
	}
	return prime;
}

printNextPrime(7); // 11