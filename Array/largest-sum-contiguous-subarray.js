// largest-sum-contiguous-subarray


let arr = [-2,1,-3,4,-1,2,1,-5,4]
let max_so_far = -9999;
let max_from_end = 0;
let len  = arr.length;

function largestSumContiguousSubarray(){
	for(let i=0;i<len;i++){
		max_from_end +=arr[i] 
		if(max_so_far < max_from_end){
			max_so_far = max_from_end;
		}
		if(max_from_end < 0){
			max_from_end = 0;
		}
	}
	return max_so_far
}

largestSumContiguousSubarray();


// DP
let arr = [-2,1,-3,4,-1,2,1,-5,4]
let len  = arr.length;
let sumArray = [];
let sum = -999;

function largestSumContiguousSubarrayByDP(){
	sumArray[0] = arr[0] 
	for(let i=1;i<len;i++){
		sumArray[i] = Math.max(sumArray[i-1]+arr[i],arr[i]);
	}
	for(let j=0;j<sumArray.length-1;j++){
		if(sum < sumArray[j]){
			sum = sumArray[j];
		}
	}
	return sum;
}


largestSumContiguousSubarrayByDP();