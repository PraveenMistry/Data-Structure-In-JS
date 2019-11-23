// Rotate an array to the right 1 position

function rotateRight(){
	var lastElement = array.pop();
	array.unshift(lastElement);
	return array;
}

var array = ["Banana", "Orange", "Apple", "Mango"];
rotateRight(array); // ["Mango", "Banana", "Orange", "Apple"]