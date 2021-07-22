// find-the-row-with-maximum-number-1s

let arr = [
  [0,0,0,1,1,1],
  [0,0,1,1,1,1],
  [0,1,1,1,1,1] // 2
]


let c = arr[0].length-1; //  5
let r = arr.length-1; // 2
let n = 3;
let m = 5;
let result =0 ;
let resultCOunt =0 ; // number of 1st

function findRow(){
  while(c >= 0 && r >= 0){
    if(arr[r][c] == 1){
      c--;
    }
    else if(resultCOunt < m - c){ 
      result = r;
      resultCOunt = m - c;
      r--; 
    }
    counter++;
  }
  return result;
}

findRow();


