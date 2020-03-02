/*

Merge Sort is a Divide and Conquer algorithm. It divides input array in two halves, calls itself for the two halves and then merges the two sorted halves. 
The merge() function is used for merging two halves. 
The merge(arr, l, m, r) is key process that assumes that arr[l..m] and arr[m+1..r] are sorted and merges the two sorted sub-arrays into one


MergeSort(arr[], l,  r)
If r > l
     1. Find the middle point to divide the array into two halves:  
             middle m = (l+r)/2
     2. Call mergeSort for first half:   
             Call mergeSort(arr, l, m)
     3. Call mergeSort for second half:
             Call mergeSort(arr, m+1, r)
     4. Merge the two halves sorted in step 2 and 3:
             Call merge(arr, l, m, r)

*/

var array = [38, 27, 43, 3, 9, 82, 10];
var middle;
console.log("INPUT",array);


// Merges two subarrays of arr[]. 
// First subarray is arr[l..m] 
// Second subarray is arr[m+1..r]
function merge(){

}

function mergeSort(array){
	if(r > l){

		// Same as (l+r)/2, but avoids overflow for 
        // large l and h 
		middle = l+(r-l)/2;
		// Sort first and second halves 
		mergeSort(array, l, middle);
		mergeSort(array, middle, r);
		merge(array,l,middle,r);
	}
}

mergeSort(array,0,array.length-1);
console.log("OUTPUT",array);


// Trick Math.pow(2,n)

function mergeTwoArray(){

}

function mergeSortTrick(array){
	var len = array.length-1;
	var untill = Math.log2(len);;
	for(var i=0;i<untill;i++){
		console.log("i",i);
	}
}


var array = [38, 27, 43, 3, 9, 82, 10];
mergeSortTrick(array);


