/*

The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. 

arr[] = 64 25 12 22 11

// Find the minimum element in arr[0...4]
// and place it at beginning
11 25 12 22 64

// Find the minimum element in arr[1...4]
// and place it at beginning of arr[1...4]
11 12 25 22 64

// Find the minimum element in arr[2...4]
// and place it at beginning of arr[2...4]
11 12 22 25 64

// Find the minimum element in arr[3...4]
// and place it at beginning of arr[3...4]
11 12 22 25 64 

*/


var array = [64,25,12,22,11];

console.log("INPUT",array);

function swap(x,y) {
	var temp = array[x];
	array[x]=array[y];
	array[y]=temp;
}

function selectionSort(array,n){
	for (var i = 0; i < n-1; i++) {
		var minIndex = i;
		for(var j=i+1;j<n;j++){
			if(array[j]<array[minIndex]){
				minIndex = j;
			}
		}
		swap(minIndex,i);
	}
}

selectionSort(array,array.length);
console.log("OUTPUT",array);

/*

INPUT (5) [64, 25, 12, 22, 11]
VM78:25 OUTPUT (5) [11, 12, 22, 25, 64]

*/