// maximum-difference-between-two-elements-in-array
// NOTE SAME STOCK BUY SELL TO MAXIMUZE PROFIT


let arr = [14, 12, 70, 15, 99, 65, 21, 90];
let maxProfilt = -9999999;
let len = arr.length;
let lowestPriceTillThatDay = arr[0];

function findMaxProfilt() {
	for(let i=1;i<len;i++){
		if(lowestPriceTillThatDay < arr[i]){
			let profit = arr[i] - lowestPriceTillThatDay;
			if(profit > maxProfilt){
				maxProfilt = profit
			}
		}else if(lowestPriceTillThatDay > arr[i]){
			lowestPriceTillThatDay = arr[i];
		}
	}
	return maxProfilt;
}

findMaxProfilt();