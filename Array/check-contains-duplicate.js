// Contains Duplicate

/*

Input: nums = [1,2,3,1]
Output: true

Input: nums = [1,2,3,4]
Output: false

*/

let nums = [1,2,3,4];
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

function checkDuplicate(){
	count = countObject();
	for(key in count){
		if(count[key] > 1){
			return true;
		}
	}
	return false;
}

checkDuplicate();