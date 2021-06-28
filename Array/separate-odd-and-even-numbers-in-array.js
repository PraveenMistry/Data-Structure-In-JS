// separate-odd-and-even-numbers-in-array



let arr = [12, 17, 70, 15, 22, 65, 21, 90];
let len = arr.length;
let l=0; let r = len-1;
let result = [];

function seprateValues(){
	for(let i=0;i<len;i++){
		if(arr[i] %2 ===0){
			result[l] =arr[i];
			l++;
		}else{
			result[r] = arr[i];
			r--;
		}
	}
	return JSON.stringify(result);
}

seprateValues();
