// separate-0s-and-1s-in-array


let arr = [0,1,0,0,1,1,1,0,1];
let len = arr.length;
let l=0; let r = len-1;
let result = [];

function seprateValues(){
	for(let i=0;i<len;i++){
		if(arr[i]===0){
			result[l] =0;
			l++;
		}else{
			result[r] = 1;
			r--;
		}
	}
	return JSON.stringify(result);
}

seprateValues();

