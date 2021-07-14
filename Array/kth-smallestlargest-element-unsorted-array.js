// kth-smallest and largest-element-unsorted-array

// using hashmap in java
let arr = [0, 5, 3, 6, 4]
let k 	= 3;
let len = arr.length;

function findKthMax(){
  let sortedArr = arr.sort((a,b) => a-b);	
  return {'kth-smallest': sortedArr[k-1], 'k-largest':sortedArr[len-k]};
}

findKthMax();