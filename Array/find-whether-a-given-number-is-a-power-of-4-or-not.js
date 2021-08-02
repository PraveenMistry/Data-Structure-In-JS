
function checkIsPow4(n){
	while(n != 1)
	{
	    if(n % 4 != 0)
	    return false;
	    n = n / 4;    
	}
	return true;
}

let n = 126;
checkIsPow4(n);

/*

A number n is a power of 4 if the following conditions are met. 
a) There is only one bit set in the binary representation of n (or n is a power of 2) 
b) The count of zero bits before the (only) set bit is even.
For example 16 (10000) is the power of 4 because there is only one bit set and count of 0s before the set bit is 4 which is even.

*/

function isPowerOfFour(n)
{
    let count = 0;
     
    /*Check if there is
    only one bit set in n*/
    let x = n & (n - 1);

    if ( n > 0 && x == 0)
    {
        /* count 0 bits
        before set bit */
        while(n > 1)
        {
            n >>= 1;
            count += 1;
        }
     
        /*If count is even
        then return true
        else false*/
        return (count % 2 == 0) ? 1 : 0;
    }
     
        /* If there are more than
        1 bit set then n is not a
        power of 4*/
    return 0;
}

let n = 126;
isPowerOfFour(n)