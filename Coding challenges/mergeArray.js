// Create a function that will merge two arrays and return the result as a new array

function merge(first,second){
	var newArray = first.concat(second);
	return newArray;
}

var first 	=[1,2,3];
var second 	=[4,5,6];
merge(first,second);


// OR 

function merge(first,second){
	var newArray  = first.concat(second.filter(function (item) {
	    return first.indexOf(item) < 0;
	}));
	return newArray;
}

var first 	=[1,2,3];
var second 	=[4,5,6,2];
merge(first,second);