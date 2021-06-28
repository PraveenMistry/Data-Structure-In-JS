function search(array, left, right, x){
  let mid = Math.ceil(left+((right-left)/2));
  console.log("mid",mid);
  if(array[mid]===x){
  	return mid;
  }
  if(array[mid] >= array[left]){
  	if(x <= array[mid] && x > array[mid]){
  		right = mid -1;
  	}else{
  		left = mid + 1;
  	}
  }
  if(array[mid] <= array[right]){
  	if(x <= array[right] && x > array[mid]){
  		left = mid + 1;
  	}else{
  		right = mid - 1;
  	}
  }
  console.log("left",left,"right",right)
  return search(array, left, right, x)
}


let array = [16,19,21,25,5,8,10];
let left = 0;
let right = array.length - 1;
let x = 8;

console.log(search(array, left, right, x));