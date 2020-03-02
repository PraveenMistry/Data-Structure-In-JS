/*

Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.

If we take a closer look at Bubble Sort algorithm, we can notice that in first pass, 
we move largest element to end (Assuming sorting in increasing order). 
In second pass, we move second largest element to second last position and so on.

Recursion Idea.

Base Case: If array size is 1, return.
Do One Pass of normal Bubble Sort. This pass fixes last element of current subarray.
Recur for all elements except last of current subarray.

*/



function swap(array, first_Index, second_Index){
    var temp = array[first_Index];
    array[first_Index] = array[second_Index];
    array[second_Index] = temp;
}

function recursiveBubbleSort(array,len){

	if(len===0)
		return;

    for (var i=0; i < len; i++){
        if (array[i] > array[i+1]){
            swap(array, i, i+1);
        }
    }
    return recursiveBubbleSort(array,len-1);
}

var array = [3, 0, 2, 5, -1, 4, 1];
var len = array.length;

console.log("array Length",array,len);
recursiveBubbleSort(array,len);
console.log("OUTPUT",array);

/*
array, Length (7) [3, 0, 2, 5, -1, 4, 1] 7
VM115:25 OUTPUT (7) [-1, 0, 1, 2, 3, 4, 5]
*/