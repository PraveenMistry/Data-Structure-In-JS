// find-first-repeating-element-array-integers

let arr = [10, 7, 8, 1, 8, 7, 6];
let countObject = {};

function firstRepeat(){
	for(let i=0;i<arr.length;i++){
		if(countObject[arr[i]]){
			countObject[arr[i]]+=1;
		}else{
			countObject[arr[i]] = 1;
		}
	}
    for(obj in countObject){
        if(countObject[obj] > 1){
            return obj;
        }
    }
	return -1;
}


firstRepeat();