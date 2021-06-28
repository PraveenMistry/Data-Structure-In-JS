// pair-whose-sum-is-equal-to-x-in-array

let arr = [-40, -5,1,3, 6,7,8,20]
let n = arr.length;
let l = 0, r = n-1;

let closest = 0;
let pair = [];
let no = 15;

function findPairSum(){
	while(l<r){
		//  arr[i] + arr[j] - closest;
		let sum = arr[l]+arr[r] - closest;
		console.log("sum",l,r," => ",sum);
		if(Math.abs(sum) === no){
			console.log(arr[l],arr[r])
			pair.push({l:arr[l],r:arr[r]});
		}
		if ((sum + closest) < no) // Move to larger values || closest to no or x or 0 based on requirement
			l++;
		else // If this pair has more sum, move to smaller values.
			r--;
	}
	return `pair: ${JSON.stringify(pair)} ` ;
}

console.log("findPairSum",findPairSum());

