// Remove Duplicates from Sorted Array

/*

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

*/

// can use shift method

// function removedElement(array, position){
// 	let temp = array[position];
// 	for (let i = (position - 1); i >= 0; i--) {                
// 	    array[i+1] = array[i];
// 	}
// 	return temp;
// }


let array = [0,0,1,1,1,2,2,3,3,4];

let out = [];
let len = array.length - 1;

function removeDuplicate(){
	if (len >= 0) {
	    for (let i = 0;i < len; i++) {
	        if (array[i] !== array[i+1]) {
	            out.push (array[i]);
	        }
	    }
	    out.push (array[len]);
	}
	return out;
}

removeDuplicate();