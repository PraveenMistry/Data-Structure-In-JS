// longest-common-prefix-in-array-of-strings

let arr = ["javasctipt", "jav2a", "javateam"];
let len = arr.length;
let smallerString = "";
let smallerStringLength = 9999999;
let result = [];
let tempPrifix = "";

function longestCommonPrefix(){
	for(let i=0;i<len;i++){
		if(smallerStringLength > arr[i].length){
			smallerString = arr[i]
			smallerStringLength = arr[i].length;
		}
	}
	let k = 0;
	while(smallerStringLength > 0){
		if(arr[k].indexOf(smallerString) === 0){
			tempPrifix = smallerString;
			break;
		}
		smallerStringLength --;
		smallerString = smallerString.slice(0,smallerStringLength)
	}

	for(let i=0;i<len;i++){
		if(arr[i].indexOf(tempPrifix) !== 0){
			return false;
		}
	}
	return tempPrifix;
}

longestCommonPrefix();