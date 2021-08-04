// subtract-1-without-arithmetic-operators

/*

12 => ["1", "1", "0", "0"]
11 => ["1", "0", "1", "1"]
*/

function addOneByBinary(num){
	// (12).toString(2)
	let binary = num.toString(2).split("");
	for(let i=binary.length-1;i>=0;i--){
		if(binary[i] == 0){
            binary[i] = 1;
        }
        else{
			binary[i] = 0;
            break;
		}
	}
	return parseInt(binary.join(""),2);

}

let num = 12;
addOneByBinary(num)