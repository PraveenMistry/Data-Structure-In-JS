// count-1s-sorted-binary-array

let arr = [0,0,0,1,1,1,1];
let count = 0;

function countOnce(arr) {
	for(let i=0; i<arr.length;i++){
		if(0 ^ arr[i] === 1){
			count+=1;
		}
	}
	return count;
}

countOnce(arr);