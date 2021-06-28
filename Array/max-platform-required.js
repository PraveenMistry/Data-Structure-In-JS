// Steps
// - sort both
// - compare one with other


let arrival = [100, 140, 150, 200, 215, 400]
let departure = [110, 300, 220, 230, 315, 600];
let i  = 0, j  = 0, platform = 0, max_platform = 0;
let n = arrival.length;

function findMaxPlatform(){
	arrival.sort();
	departure.sort();
	while(i<n && j<n){
		if(arrival[i] < departure[j]){
			platform++;
			i++
			if(max_platform < platform){
				max_platform = platform;
			}
		}else{
			platform--;
			j++;
		}
	}
	return max_platform;
}

console.log(findMaxPlatform()) // 4