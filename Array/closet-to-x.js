// pair-whose-sum-is-closest-to-x-in-array


let arr = [-40, -5,1,3, 6,7,8,20]
let minSum = 9999999999;
let n = arr.length;
let l = 0, r = n-1;

let minLeft = 0, minRight = 0;
let closest = -20;

function findMinSum(){
	while(l<r){
		//  arr[i] + arr[j] - closest;
		let sum = arr[l]+arr[r] - closest;
		if(Math.abs(sum) < minSum){
			minSum = Math.abs(arr[l] + arr[r] - closest);
			minLeft = l;
			minRight = r;
		}
		if ((sum + closest) < closest) // Move to larger values
			l++;
		else // If this pair has more sum, move to smaller values.
			r--;
	}
	return `arr[minLeft] : ${arr[minLeft]},  arr[minRight] : ${arr[minRight]}, ` ;
}

console.log("findMinSum",findMinSum());