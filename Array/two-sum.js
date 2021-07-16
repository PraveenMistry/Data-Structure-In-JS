// Two sum

/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.


Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].

*/
// Subarray
// https://github.com/PraveenMistry/Data-Structure-In-JS/blob/master/Array/find-subarrays-given-sum-array.js

let arr = [2, 3, 6, 4, 9, 0, 11];
let len = arr.length;
let target = 9; 

function solveEfficient(arr, target) {
    let start = 0, end = 0;
    let currSum = 0;
    while (start < arr.length && end <= arr.length) {
        if (currSum == target) {
            console.log("starting index : " + start + ", " + "Ending index : " + (end - 1));

            if (end <= arr.length - 1) {
                currSum += arr[end];
            }
            end++;

        }
        else {
            if (currSum > target) {
                currSum -= arr[start];
                start++;
            } else {
                if (end <= arr.length - 1) {
                    currSum += arr[end];
                }
                end++;
            }
        }
    }
}

solveEfficient(arr,target);


// 