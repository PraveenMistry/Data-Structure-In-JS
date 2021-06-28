let array = [10,70,40,91,80,16,22];
let len = array.length;
let sl = -1;
let l  = -1;


function findSecondLaegest(){
  for(let i=0;i<len;i++){
    if(l < array[i]){
     sl = l;
     l = array[i];
    }else if(sl < array[i] && l != array[i]){
    	sl = array[i];
    }
  }
  
  return `Second Largest: ${sl}, Largest: ${l}`
}


console.log(findSecondLaegest());