 // First Unique Character in a String

 /*

Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

Input: s = "loveleetcode"
Output: 2

Input: s = "aabb"
Output: -1

 */

let str = "loveleetcode"
let feq = [];

function makeCountObject(feq, str){
	let array = str.split("");
	let len = array.length;
	for(let i =0; i < len; i ++){
		let ele = array[i];
		if(feq[ele]){
			feq[ele]++;
		}else{
			feq[ele] = 1;
		}
	}
	return feq;
}

function calculateFeq(str){
	
	feq = makeCountObject(feq, str);
	for(let k in feq){
		if(feq[k] === 1){
			return k;
		}
	}
	return -1;
}


calculateFeq(str);