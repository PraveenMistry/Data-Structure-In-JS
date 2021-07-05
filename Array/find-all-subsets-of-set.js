// Find all subsets of set (power set)

let arr = [1,2,3];
let len = arr.length;
let result = [];

function printSubSet(){
	for(let i=0;i<(1 << len);i++){
		let subResult = [];
		let m = 1; // m is used to check set bit in binary representation
		for(let j=0; j< len;j++){
			if((i & m) > 0){
				subResult.push(arr[j]);
			}
			m = m << 1;
		}
		result.push(subResult);
	}
	return result;
}

printSubSet();