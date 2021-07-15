// Reverse Integer

/*

Input: x = 123
Output: 321


Input: x = -123
Output: -321


Input: x = 120
Output: 21


*/


// EX 1
let x = 120 // -123;
let r = 0;


function reverseNumber(){
	let isNeg = x < 0 ? true : false
	x = isNeg ? -x : x;
	while(x>0){
		let lastDigit = x%10;
		r = lastDigit + (r * 10);
		x = parseInt(x/10,10);
	}
	return isNeg ? -r : r;
}

reverseNumber();


// EX 2
let s = -123;

function reverseString(){
	let r = s.toString().split("").reverse().join("");
	return r;
}

reverseString();