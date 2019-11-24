/*

Write a function rotate(ar[], d, n) that rotates arr[] of size n by d elements.

INPUT:
array = [1,2,3,4,5,6,7]

Rotation of the above array by 2 will make array

OUTPUT:
array = [3,4,5,6,7,1,2]

*/

// 1) Using Temp

/*
Input arr[] = [1, 2, 3, 4, 5, 6, 7], d = 2, n =7
1) Store d elements in a temp array
   temp[] = [1, 2]
2) Shift rest of the arr[]
   arr[] = [3, 4, 5, 6, 7, 6, 7]
3) Store back the d elements
   arr[] = [3, 4, 5, 6, 7, 1, 2]
*/


var arr =[1, 2, 3, 4, 5, 6, 7], d = 2;
var temp =[];
if(d<n){
    for(var i=0;i<d;i++){
        temp.push(arr[i]);
    }
    console.log("Array Elements should be shift",temp);
    for(var i=d;i<arr.length-1;i++){
        arr[i-d]=arr[i];
    }
    console.log("Array Remaining Elements After Shift",arr);
    for(var i=0;i<temp.length;i++){
        arr.push(temp[i]);
    }
    console.log("Array After Shift",arr);

}else{
    console.log("Array Length small then you want to rotate")
}

// Time Complexity eq: 3n+3
// Time Complexity : O(n) (Order of n)


// 2) Rotate one by one

/*
leftRotate(arr[], d, n)
start
  For i = 0 to i < d
    Left rotate all elements of arr[] by one
end
*/

var arr =[1, 2, 3, 4, 5, 6, 7], d = 2;

function leftRotateByOne(arr){
    var temp =arr[0];
    for(var i=0;i<arr.length-1;i++){
        arr[i]=arr[i+1];
    }
    arr[i] = temp;
}

for(var i=0;i<d;i++){
    leftRotateByOne(arr)
}

console.log("FINISH",arr);

// Time Complexity eq: n+3
// Time Complexity : O(n) (Order of n)



// 3) The Reversal Algorithm

/*

Let the array be arr[] = [1, 2, 3, 4, 5, 6, 7], d =2 and n = 7
A = [1, 2] and B = [3, 4, 5, 6, 7]

Reverse A, we get ArB = [2, 1, 3, 4, 5, 6, 7]
Reverse B, we get ArBr = [2, 1, 7, 6, 5, 4, 3]
Reverse all, we get (ArBr)r = [3, 4, 5, 6, 7, 1, 2]

*/

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], d = 4;
var n   = arr.length;
var a   = [];
var b   = [];
var ArBr = [];
function rvereseArray(arr){
   return arr.reverse();
}


function leftRotate(arr,d,n){
    if (d == 0) 
        return; 

    a = rvereseArray(arr.slice(0,d)); 
    b =rvereseArray(arr.slice(d,n)); 
    ArBr = a.concat(b); 

    return rvereseArray(ArBr); 
}

output = leftRotate(arr,d,n);

console.log("output",output);

