// find-leaders-in-array

//NOTE: We need to print all the leaders present in the array. Element is the leader if it is greater than right side of elements.

let arr = [14, 12, 70, 15, 99, 65, 21, 90];
let max_right_from = 0;
let len = arr.length-1;

function findLeader(arr, max_right_from, len){
	for(let i= len; i>=0; i--){
		if(max_right_from < arr[i]){
			max_right_from = arr[i];
			console.log("max_right_from",max_right_from)
		}
	}
}
findLeader(arr, max_right_from, len);