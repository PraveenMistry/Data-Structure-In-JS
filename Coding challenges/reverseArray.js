// Create a function to reverse an array and return the result as a new array

function reverse(array){
	return array.reverse();
}

var array = ["Banana", "Orange", "Apple", "Mango"];
reverse(array); // ["Mango", "Apple", "Orange", "Banana"]



// OR (array.pop)

let reverseArray = (arr) => {
  if(arr.length === 0){
    return [];
  }
  
  return [arr.pop()].concat(reverseArray(arr));
}


reverseArray([1, 2, 3, 4, 5]); //  [5, 4, 3, 2, 1]



// OR (recursive)

let reverseArray = (arr, n) => {
  if(n == 0){
     return [];
  }
  return [arr[n-1]].concat(reverseArray(arr, --n));
}

reverseArray([1, 2, 3, 4, 5]); //  [5, 4, 3, 2, 1]



// OR (stack)

let reverseArray = (arr) => {
    let stack = new Stack();

    for(let i = 0; i < arr.length; i++){
       stack.push(arr[i]);
    }

    for(let i = 0; i < arr.length; i++){
      arr[i] = stack.pop();
    }
  
  return arr;
}


reverseArray([1, 2, 3, 4, 5]); //  [5, 4, 3, 2, 1]