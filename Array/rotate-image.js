// Rotate Image

/*

You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. 
DO NOT allocate another 2D matrix and do the rotation.

Input: matrix = 
	[
		[1,2,3],
		[4,5,6],
		[7,8,9]
	]
Output: 
	[
		[7,4,1],
		[8,5,2],
		[9,6,3]
	]
*/
let matrix = 
	[
		[1, 2, 3, 4],
		[5, 6, 7, 8],
		[9, 10, 11, 12],
		[13, 14, 15, 16]
	];

let n = 4;


function rotateMatrix(){
	for(let x=0; x<Math.ceil(n/2); x++){
		for(let y=x; y<n-x-1; y++){
			let temp = matrix[x][y];
			matrix[x][y] = matrix[n-1-y][x];
			matrix[n-1-y][x] = matrix[n-1-x][n-1-y];
			matrix[n-1-x][n-1-y] = matrix[y][n-1-x];
			matrix[y][n-1-x] = temp;
		}
	}
	return matrix;
}

rotateMatrix();