// Create a function to calculate the distance between two points defined by their x, y coordinates

function calculateDistance(point1,point2){
	var diffX=point2.x-point1.x;
	var diffY=point2.y-point1.y;
	return {x:diffX,y:diffY};
}

var point1 ={x:2,y:1};
var point2 ={x:53,y:12};
calculateDistance(point1,point2); // {x: 51, y: 11}