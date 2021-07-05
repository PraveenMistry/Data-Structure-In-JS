// find-contiguous-subarray-with-sum-to-given-value-array

let arr = [14,12,70,15,99,65,21,90];
let x = 97;
let len = arr.length;
let start = 0;
let sum=0;
let lastIndex = -1;
// let end = len-1;

function findContiguousSubArray(){

	for(let i=0;i<len;i++){
		
		while(sum > x && start < i-1){
			sum-=arr[start];
			start++;
			console.log("while",start,sum)
		}

		
		console.log("sum",sum);
		if(sum===x){
			lastIndex =i-1;
			break;
		}
		sum+=arr[i];

	}
	if(lastIndex>=0){
		return `FOUND START FROM ${start} TO ${lastIndex} `
	}
	return 'NOT FOUND';


}

findContiguousSubArray();