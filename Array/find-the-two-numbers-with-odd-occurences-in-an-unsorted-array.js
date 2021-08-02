// find-the-two-numbers-with-odd-occurences-in-an-unsorted-array

/*
Given an unsorted array that contains even number of occurrences for all numbers except two numbers. 
Find the two numbers which have odd occurrences in O(n) time complexity and O(1) extra space.

Input: [12, 23, 34, 12, 12, 23, 12, 45]
Output: 34 and 45

Input: [4, 4, 100, 5000, 4, 4, 4, 4, 100, 100]
Output: 100 and 5000

Input: [10, 20]
Output: 10 and 20

*/

/*
COUNT OBJECT OCCURENCE AND PRINT IF COUNT IS ODD
*/

function findOddOccrences(){
	for(let i=0;i<input.length;i++){
		if(occrences[input[i]]){
			occrences[input[i]]++;
		}else{
			occrences[input[i]] = 1;
		}
	}

	// console.log("occrences",occrences, typeof occrences, Array.isArray(occrences));
	for(ele in occrences){
		if(occrences[ele]%2 !== 0) output.push(ele);
	}
	return output;
}


let input = [12, 23, 34, 12, 12, 23, 12, 45];
let occrences = {};
let output = [];
findOddOccrences(input);