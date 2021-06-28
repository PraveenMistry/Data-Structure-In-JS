// USING HASH

function makeCountObject(){
	for(let i =0; i < len; i ++){
		let ele = array[i];
		if(countObject[ele]){
			countObject[ele]++;
		}else{
			countObject[ele] = 1;
		}
	}
}


function findOddOccurance(){
	makeCountObject();
	for(let obj in countObject){
		if(countObject[obj]%2 !== 0){
			return obj;
		}
	}

}


let array = [16, 19, 19, 21, 25, 25, 5, 8, 10, 40 ,40, 40, 30,30, 20, 20, 40, 40, 21, 16, 16, 16, 5, 8, 10];
let result = -1;
let countObject = {};
let len = array.length;
console.log("findOddOccurance =>",findOddOccurance());

// USING XOR => BUT ONLY ONE ODD OCCURANCE

function findOddOccuranceUsingXor() {
	let result = 0;
	for (let i=0;i<array.length;i++){
		console.log("array[i]",array[i], "res",result ^ array[i])
		result = result ^ array[i];
	}
	return result;
}