// find-local-minima-array

// NOTE: element if it is less than its neighbor

let arr = [10, 5, 3, 6, 13, 16, 7];
let len = arr.length;
let l=0; let r=len-1;

function searchLocalMinima(arr,l,r){
	let mid = l+(r-l)/2;
	if( arr[mid]<arr[mid-1] && arr[mid]<arr[mid+1]){ // can check array OutOFBound
		return arr[mid];
	}
	if(mid > 0 && arr[mid]>arr[mid-1]){
		r=mid-1;
	}else {
		l=mid+1;
	}
	return searchLocalMinima(arr,l,r);
}

searchLocalMinima(arr,l,r);
