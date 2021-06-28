// find-peak-element-array

// NOTE: element of the array which is GREATER THAN / EQUAL TO its neighbours
// reverse of local minima

let arr = [4, 10, 20, 40, 15];
let len = arr.length;
let l = 0; let r= len-1;

function findPeak(arr,l,r) {
	let mid = Math.ceil(l + (r-l)/2);
	if(arr[mid] >= arr[mid+1] && arr[mid] >= arr[mid-1]){
		return arr[mid];
	}
	if(arr[mid] < arr[mid-1]){
		r=mid-1;
	}else{
		l=mid+1;
    }
	return findPeak(arr,l,r);
}

findPeak(arr,l,r)