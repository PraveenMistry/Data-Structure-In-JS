let array = [10,40,70,21,70,16,22];
let len = array.length;
let smallest = 9999999999;
let largest  = -1;


function findSmall(array, len, smallest, largest){
  for(let i=0;i<len;i++){
  	if(smallest > array[i]){
     smallest = array[i]
    }
    if(largest < array[i]){
     largest = array[i]
    }
  }
  
  return `Smallest: ${smallest}, Largest: ${largest}`
}


console.log(findSmall(array, len, smallest, largest));