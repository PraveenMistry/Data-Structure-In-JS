// write-a-program-to-reverse-an-array-or-string

/*
Input  : arr[] = {1, 2, 3}
Output : arr[] = {3, 2, 1}

Input :  arr[] = {4, 5, 1, 2}
Output : arr[] = {2, 1, 5, 4}
*/

let arr = [4, 5, 1, 2];
let start = 0;
let end = arr.length-1;


function reverse(){
	while(start <= end){
		let tmp = arr[start];
		arr[start] = arr[end];
		arr[end] = tmp;
		start++;
		end--;
	}
	return arr;
}


reverse();


// FOR string IN JS YOU HAVE TO CONVERT IT TO ARRAY

