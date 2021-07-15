// Reverse String

/*

Input: s = "Hello"
Output: "olleH"

*/
let s = "Hello";

function reverseString(){
	let r = s.split("").reverse().join("");
	return r;
}

reverseString();

// 2 using loop

let s = "Hello";
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
	return arr;
}


reverse();