/*
Example.

Input 1: johndoe
Input 2: 08061972
Expected Output: j0o8h0n6d1o9e72

#Code:

var outputArray =[];
var output ="";

var input1 ="johndoe";
var input2 = 08061972;

*/

#Code

function mergeArray(input1,input2){
    	var firstArray = [...input1];
    	var secondArray = [...input2]; 	
	var evenIndex = 0;
	var oddIndex = 1;
	for(let i=0; i<firstArray.length; i++) {
        	outputArray[evenIndex]= firstArray[i];
		evenIndex=2+evenIndex;
	}
	for(let i=0; i<secondArray.length; i++) {
        	outputArray[oddIndex]= secondArray[i];
		oddIndex=2+oddIndex;
	}
	return outputArray.join("");
}


output = mergeArray(input1.toString(),input2.toString())
console.log("output", output); // j0o8h0n6d1o9e72