// sliding-window-maximum

// NOTE: Given an Array and an number k, Find the maximum element of from all the contiguous subarrays of size K

/*
Input: arr[] = {1, 2, 3, 1, 4, 5, 2, 3, 6}, K = 3 
Output: 3 3 4 5 5 5 6
Explanation: 
Maximum of 1, 2, 3 is 3
Maximum of 2, 3, 1 is 3
Maximum of 3, 1, 4 is 4
Maximum of 1, 4, 5 is 5
Maximum of 4, 5, 2 is 5 
Maximum of 5, 2, 3 is 5
Maximum of 2, 3, 6 is 6
*/


let arr = [1, 2, 3, 1, 4, 5, 2, 3, 6];
let len = arr.length;
let k 	= 3;
let max = -99;

function printKMax(){
	for(let i=0;i<=len-k;i++){
		max = arr[i];
		for(let j=i;j<i+k;j++){
			if(max<arr[j]){
				max = arr[j]
			}
		}
		console.log("max",max);
	}
}

printKMax();

