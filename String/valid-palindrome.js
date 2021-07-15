// Valid Palindrome

/*
Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
*/

// using sort, match

let s = "race a car" //"amanaplanacanalpanama";
let start = 0;
let arr = s.split("");
let end = arr.length-1;


function reverse(){
	while(start <= end){
		let tmp = arr[start];
		arr[start] = arr[end];
		arr[end] = tmp;
		start++;
		end--;
	}
	return arr.join("");
}

function palindromeCheck(){

	let r = reverse();
	if(s === r)
		return true
	else
		return false
}

palindromeCheck();