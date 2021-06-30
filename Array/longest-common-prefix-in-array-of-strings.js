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

// DAC

let arr = ["javasctipt", "jav2a", "javateam", "jadu"];
let len = arr.length;
let l=0;
let r= len-1;

function findPrefixUntill(str1, str2){
	console.log("length",str2, typeof str2)
	let n1 = str1.length;
	let n2 = str2.length;
	let result = "";
	for (let i = 0, j = 0; i <= n1 - 1 &&
                j <= n2 - 1; i++, j++) {
		if(str1[i]==str2[j]){
			result += str1[i];
		}
	}
	return result;
}

function findPrefix(arr,l,r){
	if(l===r){
		return arr[l]
	}
	if(l<r){
		let mid = Math.ceil(l+(r-l)/2);
		let str1 = findPrefix(arr,l,mid-1);
		let str2 = findPrefix(arr,mid,r);
		return	findPrefixUntill(str1,str2);
	}
	return null;
}

findPrefix(arr,l,r);