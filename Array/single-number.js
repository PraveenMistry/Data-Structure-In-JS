// Single Number

/*

Input: nums = [2,2,1]
Output: 1


Input: nums = [4,1,2,1,2]
Output: 4

*/

// sort
// count object

let nums = [4,1,2,1,2];
let count = [];

function countObject(){
	for(let i=0;i<nums.length;i++){
		if(count[nums[i]]){
			count[nums[i]]++
		}else{
			count[nums[i]] = 1;
		}
	}
	return count;
}

function checkSingleNumber(){
	count = countObject();
	for(key in count){
		if(count[key] === 1){
			return key;
		}
	}
	return false;
}

checkSingleNumber();