// Print the distance between the first 100 prime numbers

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

function printDistancePrime(num){
	var distance =[];
	var prime=[];
	for(var i=1;i<=num;i++){
		if(checkPrime(i)){
			prime.push(i);
			if(i>2)
			distance.push(i-prime[prime.length-2])
		}
	}
	ret = {'primeArray':prime,'distance':distance}
	return ret;
}

printDistancePrime(100); 