// multiply-an-integer-with-3.5 without *

/*
Examples :
Input: 2
Output: 7

Input: 5
Output: 17 (Ignore the digits after decimal point)
*/

/*
Solution: 
1. We can get x*3.5 
by adding 2*x, x and x/2. 
To calculate 2*x, left shift x by 1 and to calculate x/2, right shift x by 1. 
*/


function multiplyBy3AndHalf(num){
	return (num << 1) + (num) + (num >> 1);
}

let num = 5;
multiplyBy3AndHalf(num);

/*
Another Approach:
Another way of doing this could be by doing a binary multiplication by 7 then divide by 2 using only <<, ^, &, and >>.
But here we have to mention that only positive numbers can be passed to this method.


We can multiply a number by 7 using bitwise operator. 
First left shift the number by 3 bits (you will get 8n) then 
subtract the original numberfrom the shifted number and return the difference (8n – n). 
or you can say ((n << 3) - n)

*/


function multiplyBy3AndHalfBy7(num){
	return (((num << 3) - num) >> 1);
}

let num = 5;
multiplyBy3AndHalfBy7(num);