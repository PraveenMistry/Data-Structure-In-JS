// find-subarrays-given-sum-array

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

// Explain:
// [2, 3, 6, 4, 9, 0, 11]
/*

1
start end =0;
currSum = 0; target = 9;
not match else => end++ 1;
currSum = 0+2;


2
end 1,start 0
2==9 ! false
2 > 9 ! false
currSum = 2+3 = 5
end++ => 2

3
end 2,start 0
5==9 !false
5<9 !false
currSUm = 5+6 => 11
end++ => 3

4.
end 3,start 0
11==9 !false
11>9 true
	currSum = 11 - 2 => 9
	start++ => 1

5. 
end 3,start 1
9==9 true 
	print start 1 and end (end-1) => 1, 2

6. 



*/