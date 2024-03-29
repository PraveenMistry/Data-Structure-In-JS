// turn-off-the-rightmost-set-bit

/*

Input:  12 (00...01100)
Output: 8 (00...01000)

Input:  7 (00...00111)
Output: 6 (00...00110)

Let the input number be n. n-1 would have all the bits flipped after the rightmost set bit (including the set bit). 
So, doing n&(n-1) would give us the required result.

*/

function turnOffRightMostSetBit(num){
	// (12).toString(2)
	let binary = num.toString(2).split("");
	for(let i=binary.length-1;i>=0;i--){
		if(binary[i] == 1){
            binary[i] = 0;
            break
        }
	}
	return parseInt(binary.join(""),2);

}

let num = 12;
turnOffRightMostSetBit(num)