// check-if-a-key-is-present-in-every-segment-of-size-k-in-an-array

/*

Input : 
arr[] = { 3, 5, 2, 4, 9, 3, 1, 7, 3, 11, 12, 3} 
x = 3 
k = 3 
Output : Yes 
There are 4 non-overlapping segments of size k in the array, {3, 5, 2}, {4, 9, 3}, {1, 7, 3} and {11, 12, 3}. 3 is present all segments.
Input : 
arr[] = { 21, 23, 56, 65, 34, 54, 76, 32, 23, 45, 21, 23, 25} 
x = 23 
k = 5 
Output :Yes 
There are three segments and last segment is not full {21, 23, 56, 65, 34}, {54, 76, 32, 23, 45} and {21, 23, 25}. 
23 is present all window.
Input :arr[] = { 5, 8, 7, 12, 14, 3, 9} 
x = 8 
k = 2 
Output : No

*/


let arr = [5, 8, 7, 12, 14, 3, 9];
let len = arr.length;
let positions =[];
let k = 2; // segment
let x = 8; // element
let is_present = true;

function checkSegment(){
	for(let i=0; i<len;i++){
		if(x == arr[i]) positions.push(i);
	}
	let index = 0;
	for (let i=0;i<len;i+=k){
		if(!(i <= positions[index] && i+k-1 >= positions[index])){
			return 'No';
		}
		index++;
	}
	return 'Yes'
}

checkSegment();