// Rotate an array to the left 1 position

function rotateLeft(){
	var firstElement = array.shift();
	array.push(firstElement);
	return array;
}

var array = ["Banana", "Orange", "Apple", "Mango"];
rotateLeft(array); // ["Orange", "Apple", "Mango", "Banana"]