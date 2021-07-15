// Plus One


/*

Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.
The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.
You may assume the integer does not contain any leading zero, except the number 0 itself.


Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.



Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.

*/

let digits = [4,3,2,9];
let lastIndex = digits.length-1;

function plusOne(lastIndex){
	if(digits[lastIndex]+1 > 9){
		digits[lastIndex] = 0;
		lastIndex --;
		return plusOne(lastIndex);
	}else{
		digits[lastIndex] = digits[lastIndex]+1;
		return digits;
	}

}

plusOne(lastIndex);