// Valid Sudoku

/*

Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.

Input: board = 
[["5","3","","","7","","","",""]
,["6","","","1","9","5","","",""]
,["","9","8","","","","","6",""]
,["8","","","","6","","","","3"]
,["4","","","8","","3","","","1"]
,["7","","","","2","","","","6"]
,["","6","","","","","2","8",""]
,["","","","4","1","9","","","5"]
,["","","","","8","","","7","9"]]
Output: true



Input: board = 
[["8","3","","","7","","","",""]
,["6","","","1","9","5","","",""]
,["","9","8","","","","","6",""]
,["8","","","","6","","","","3"]
,["4","","","8","","3","","","1"]
,["7","","","","2","","","","6"]
,["","6","","","","","2","8",""]
,["","","","4","1","9","","","5"]
,["","","","","8","","","7","9"]]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.


*/

let board = 
[
	["8","3","","","7","","","",""],
	["6","","","1","9","5","","",""],
	["","9","8","","","","","6",""],
	["8","","","","6","","","","3"],
	["4","","","8","","3","","","1"],
	["7","","","","2","","","","6"],
	["","6","","","","","2","8",""],
	["","","","4","1","9","","","5"],
	["","","","","8","","","7","9"]
]

// let board = 
// [
// 	["5","3","","","7","","","",""],
// 	["6","","","1","9","5","","",""],
// 	["","9","8","","","","","6",""],
// 	["8","","","","6","","","","3"],
// 	["4","","","8","","3","","","1"],
// 	["7","","","","2","","","","6"],
// 	["","6","","","","","2","8",""],
// 	["","","","4","1","9","","","5"],
// 	["","","","","8","","","7","9"]
// ]

let n = 9;
let m = 9;
let dx = 0;
let dy = 0;

function validSudoku(){
	while(dx < n && dy < m){
		let ele = board[dx][dy];
		for(let i=dx+1;i<n;i++){
			if(ele !== "" && ele == board[i][dy]){
				console.log("DX",dx,ele,i,board[i][dy]);
				return false;
			}
		}
		for(let j=dy+1;j<m;j++){
			if(ele !== "" && ele == board[dx][j]){
				console.log("DY",dy,ele,j,board[dy][j]);
				return false;
			}
		}
		dx++;
		dy++;
	}
	return true;
}

validSudoku();




