
// Create a function that will receive an array of numbers as argument and will return a new array with distinct elements

function distinct(numbers){
	var newArray  = [];
	numbers.map(function (item) {
	    if(newArray.indexOf(item) < 0){
	    	newArray.push(item);
	    }
	});
	return newArray;
}

var numbers 	=[1,2,3,53,2,7];
distinct(numbers); // [1, 2, 3, 53, 7]