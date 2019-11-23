//  Create a function that will return a Boolean value indicating if two circles defined by center coordinates and radius are intersecting

/*
Distance between centers C1 and C2 is calculated as
 C1C2 = sqrt((x1 - x2)2 + (y1 - y2)2).
There are three condition arises.
1. If C1C2 == R1 + R2
     Circle A and B are touch to each other.
2. If C1C2 > R1 + R2
     Circle A and B are not touch to each other.
3. If C1C2 < R1 + R2
      Circle intersects each other.
*/

function checkCircleIntersecting(x1,x2,y1,y2,r1,r2){
	var result="";
	var C1C2 = Math.sqrt((Number(Number(x1) - Number(x2))*2) + Number((Number(y1) - Number(y2))*2));
	console.log("C1C2",C1C2);
	console.log("r1+r2",r1+r2);
	if(C1C2===(r1+r2)){
		result="Circle A and B are touch to each other";
	}else if(C1C2 > r1 + r2){
		result="Circle A and B are not touch to each other";
	}
	else if(C1C2 < r1 + r2){
		result="Circle intersects each other";
	}
	return result;
}

var x1=7,x2=3,y1=3,y2=1;
var r1=5,r2=3;
checkCircleIntersecting(x1,x2,y1,y2,r1,r2); // "Circle intersects each other"