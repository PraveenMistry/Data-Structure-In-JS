/*

Find the count of the letters in a word and order them alphabetically

Input: apple
Expected Output:
a - 1
e - 1
l - 1
p - 2

Example 2.

Input banana
Expected Output:
a - 3
b - 1
n - 2

*/

#CODE

var input = "apple"; 
var output = []; 

function sortObject(obj) {
  return Object.keys(obj)
    .sort().reduce((a, v) => {
    a[v] = obj[v];
    return a; }, {});
}

function countLetter(input) {
  return input.split('').reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});
}

output = countLetter(input);

console.log("output", sortObject(output)); 
