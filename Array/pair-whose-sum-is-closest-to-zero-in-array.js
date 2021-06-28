// pair-whose-sum-is-closest-to-zero-in-array

let arr = [1,3,-5,7,8,20,-40,6]
arr.sort();

let sum = 0; 
let minSum = 9999999999;
let n = arr.length;
let l = 0, r = n-1;
let minLeft = l, minRight = n-1;
let closest = 0;


function findMinSum(){
	while(l<r){
		let sum = arr[l]+arr[r] - closest; // also can sum = arr[i] + arr[j] - x; here x is 0 (closest to 0)
		if(Math.abs(sum) < Math.abs(minSum)){
			minSum = sum;
			minLeft = l;
			minRight = r;
		}
		if(sum<closest){
			l++
		}else{
			r--;
		}
	}
	return `minSum : ${minSum}, arr[minLeft] : ${arr[minLeft]},  arr[minRight] : ${arr[minRight]}, ` ;
}

console.log("findMinSum",findMinSum());