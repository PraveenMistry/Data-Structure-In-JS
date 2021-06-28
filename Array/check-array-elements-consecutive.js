// check-array-elements-consecutive

let arr = [47, 43, 45, 41, 44, 46]
let min = 9999;
let max = -9999;
let len = arr.length;
let visited = {};
let loop = 0;


function checkConsecutive(){
	for(let i=0;i<len;i++){
		if(arr[i]>max){
			max = arr[i];
		}else if(arr[i]<min){
			min = arr[i]
		}
	}
	// check length mathc
	if(max-min+1 !== len){
		return "NO";
	}



	for (let i= min;i<min+len;i++){
		visited[loop] = min+loop;
		if(visited[loop] !== i){
			return "NO"
		}
		loop++;
	}
	return "YES";

}

checkConsecutive();