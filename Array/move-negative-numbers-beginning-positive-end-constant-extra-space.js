// move-negative-numbers-beginning-positive-end-constant-extra-space
/*

Input: -12, 11, -13, -5, 6, -7, 5, -3, -6
Output: -12 -13 -5 -7 -3 -6 11 6 5

*/

let arr = [-12, 11, -13, -5, 6, -7, 5, -3, -6];
let len = arr.length;
let result = [];
let tmp = [];

function segrigate(){
	for (let i=0; i<len; i++){
		if(arr[i] < 0){ result.push(arr[i])}
		else tmp.push(arr[i]);	
	}
	let index =0;
	for (let j=result.length;j<len;j++){
		result.push(tmp[index])
		index++;
	}
	return result;
}

segrigate();

/*

Without space complexity
- we can get 2 index start=0, end = len-1;
from start < 0 ok else check end > 0 thn swap till start <= end

*/

