// Move all zeroes to end of array

/*

Input : arr[]  = {1, 2, 0, 0, 0, 3, 6};
Output : arr[] = {1, 2, 3, 6, 0, 0, 0};

*/

var arr = [1, 2, 0, 0, 0, 3, 6];
var counter = 0;

for(var i=0;i<arr.length;i++){
	if(arr[i]!==0){
		arr[counter++] = arr[i];
	}
}

console.log("countter",counter)

while(counter<arr.length){
	arr[counter++] = 0;
}


console.log("OUTPUT",arr)


// Using Swap

var arr = [1, 2, 0, 0, 0, 3, 6];
var counter = 0;

function swap(x,y){
	var tmp = arr[x];
	arr[x] = arr[y];
	arr[y] = tmp;
}

for(var i=0;i<arr.length;i++){
	if(arr[i]!==0){
		swap(counter++,i);
	}
}


console.log("OUTPUT",arr)