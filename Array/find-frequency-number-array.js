// find-frequency-number-array

let arr = [0, 5, 5, 5, 4]
let x = 5;
let len = arr.length;
let count = 0

function findFrequency(){
	for(let i=0;i<len;i++){
		if(arr[i] === x) count++
	}
	return count;
}

findFrequency();