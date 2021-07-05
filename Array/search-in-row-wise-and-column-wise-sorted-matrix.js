// search-in-row-wise-and-column-wise-sorted-matrix


/*

We will use below logic to search an element

Elements right to current element will be greater than element
Elements left to current element will be lesser than element
Elements down to current element will be greater than element
Elements top to current element will be lesser than element

Algorithm:
Starts with top right element, so initialise r=0 and c=
sortedMatrix[0].length-1
Iterate over matrix with boundary conditions.
If current element lets say m is equal to element X, return it.
If m < X, go left,so decrease column by 1 (c--).
If m > X, go right, so increase row by 1(r++).

*/


let arr =
[
	[1, 6, 10, 12,20],
	[4, 8, 15, 22, 25],
	[5, 20, 35, 37, 40],
	[10, 28, 38, 45, 55]
]

let x = 37;
let rowCount = arr.length-1;
let currentRow 	= 0;
let currentColumn = arr[0].length-1;
let found = false;


function searchInMatrix(){
	while(!found){
		if(x===arr[currentRow][currentColumn]){
			found = true;
			return { row: currentRow, column: currentColumn }
		}
		if(x > arr[currentRow][currentColumn]){
			currentRow++;
		}else if(x < arr[currentRow][currentColumn]){
			currentColumn--;
		}
		if(currentColumn == 0 && currentRow === rowCount){
			return 'NOT FOUND';
		}
	}
}
