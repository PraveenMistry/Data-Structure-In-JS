// add-1-to-a-given-number

/*
Method 1 
To add 1 to a number x (say 0011000111), 
flip all the bits after the rightmost 0 bit (we get 0011000000). 
Finally, flip the rightmost 0 bit also (we get 0011001000) to get the answer. 
*/


/*
Method 2 
We know that the negative number is represented in 2’s complement form on most of the architectures. We have the following lemma hold for 2’s complement representation of signed numbers.
Say, x is numerical value of a number, then
~x = -(x+1) [ ~ is for bitwise complement ]
(x + 1) is due to the addition of 1 in 2’s complement conversion
To get (x + 1) apply negation once again. So, the final expression becomes (-(~x)). 
*/

/*
Input:  12
Output: 13

Input:  6
Output: 7
*/

/*
	GET BINARY OF A NUMBER
*/

// Method 1 

function addOneByBinary(num){
	// (12).toString(2)
	let binary = num.toString(2).split("");
	for(let i=binary.length-1;i>=0;i--){
		if(binary[i] != 0){
			binary[i] = 0;
		}else {
			binary[i] = 1;
			break;
		}
	}
	return parseInt(binary.join(""),2);
}

let num = 12;
addOneByBinary(num)


// Method 2 

function addOne(num){
	return -(~num);
}

let num = 12;
addOne(num);