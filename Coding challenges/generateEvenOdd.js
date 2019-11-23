/*
Question 2: The input consist of a string, "o" represents odd number, "e" represents even number to be printed


Example 1.
Input: 8-e
Expected Output: 2|4|6|8

Example 2.
Input: 6-o
Expected Output: 1|3|5

Example 3.
Input: 1-o
Expected Output: 1

*/

# CODE

var input = "4-e"; 
var lastElement; 
var seriesType;
var outputSeries = [];
  
function getLastOfElement(input){
	return parseInt(input.split("-")[0]);
}

function getSeries(input){
	return input.split("-")[1]==='e'?"EVEN":"ODD";
}

lastElement = getLastOfElement(input);
seriesType  = getSeries(input);


function generateSeries(lastElement, seriesType) {
  	var startElement =2;
	if(seriesType==="ODD")
  		startElement =1;

	for(let i=startElement;i<=lastElement;){	
		outputSeries.push(i);
		i=i+2;
			
	}
	
 	return outputSeries; 
}

generateSeries(lastElement ,seriesType);

console.log("OUTPUT", outputSeries.join("|"));