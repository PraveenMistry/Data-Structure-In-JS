// range-and-coefficient-of-range-of-array

/*
Input: arr[] = [15, 16, 10, 9, 6, 7, 17] 
Output: Range : 11 
Coefficient of Range : 0.478261 
Max = 17, Min = 6 
Range = Max – Min = 17 – 6 = 11 
Coefficient of Range = (Max – Min) / (Max + Min) = 11 / 23 = 0.478261
Input: arr[] = {5, 10, 15} 
Output: Range : 10 
Coefficient of Range : 0.5 
*/

let arr = [15, 16, 10, 9, 6, 7, 17];
let max = -99999;
let min = 99999;

function getMaxMin(){
	for(let i=0;i<arr.length;i++){
		if(min > arr[i]) min = arr[i]
		if(max < arr[i]) max = arr[i]
	}
}


/*
You can use object return 
return {
	min:min,
	max:max
}
*/


function findRangeCiefficient(){
 getMaxMin();
 // let min = Math.min(arr);
 // let max = Math.max(arr);
 let range = max - min;
 let coefficient = (max - min) / (max + min);

 return `range : ${range}, coefficient: ${coefficient}`
}


findRangeCiefficient();