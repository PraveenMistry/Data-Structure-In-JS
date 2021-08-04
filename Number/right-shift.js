// Right Shift

/*
The right shift operator (>>) shifts the first operand the specified number of bits to the right. 
Excess bits shifted off to the right are discarded. Copies of the leftmost bit are shifted in from the left. 
Since the new leftmost bit has the same value as the previous leftmost bit, 
the sign bit (the leftmost bit) does not change. 
Hence the name "sign-propagating".
*/

const a = 5;          //  00000000000000000000000000000101
const b = 2;          //  00000000000000000000000000000010
const c = -5;         // -00000000000000000000000000000101

console.log(a >> b);  //  00000000000000000000000000000001
// expected output: 1

console.log(c >> b);  // -00000000000000000000000000000010
// expected output: -2


/*

9 (base 10): 00000000000000000000000000001001 (base 2)
9 >> 2 (base 10): 00000000000000000000000000000010 (base 2) = 2 (base 10)



Likewise, -9 >> 2 yields -3, because the sign is preserved:
-9 (base 10): 11111111111111111111111111110111 (base 2)
-9 >> 2 (base 10): 11111111111111111111111111111101 (base 2) = -3 (base 10)
*/