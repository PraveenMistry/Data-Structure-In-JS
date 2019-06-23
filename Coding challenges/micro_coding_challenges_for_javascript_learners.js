// EX 1) Print numbers from 1 to 10

function printNumbers(num){
	for(var i=1;i<=num;i++){
		console.log(i);
	}
}

printNumbers(10);

// EX 2) Print the odd numbers less than 100

function printOddNumbers(num){
	for(var i=1;i<=num;i++){
		if(i%2!==0)
		console.log(i);
	}
}

printOddNumbers(10);


// EX 3) Print the multiplication table with 7

function printTable(num){
	for(var i=1;i<=10;i++){
		console.log(i*num);
	}
}

printTable(7);


// EX 4) Print all the multiplication tables with numbers from 1 to 10

function printTables(start,end){
	for(var i=start;i<=end;i++){
		for(var j=1;j<=10;j++){
			console.log(i*j);
		}
	}
}

printTables(1,4);


// EX 5) Calculate the sum of numbers from 1 to 10

function printSum(start,end){
	var sum=0;
	for(var i=start;i<=end;i++){
		sum+=i;
	}
	return sum;
}

printSum(1,4); // 10


// EX 6) Calculate 10!


function factorial(num){
	if(num===0 || num===1){return 1}
	else{return num*factorial(num-1)}
}

factorial(10); // 3628800


// EX 7) Calculate the sum of even numbers greater than 10 and less than 30

function printSumOfEventNumberBetween(start,end){
	var sum=0;
	for(var i=start;i<=end;i++){
		if(i%2===0)
			sum+=i;
	}
	return sum;
}

printSumOfEventNumberBetween(10,30); // 220


// EX 8) Calculate the sum of numbers in an array of numbers

function sum(total, num){
	 return total + num;
}

function sumOfArrayElement(numberArray){
	return numberArray.reduce(sum)
}

var numbers = [175, 50, 25];
sumOfArrayElement(numbers); // 250


// EX 9) Calculate the average of the numbers in an array of numbers

function sum(total, num){
	 return total + num;
}

function averageOfArrayElement(numberArray){
	return numberArray.reduce(sum)/numberArray.length;
}

var numbers = [175, 50, 25];
averageOfArrayElement(numbers); // 83.33333333333333


// EX 10)  Create a function that receives an array of numbers as argument and returns an array containing only the positive numbers

function checkPositive(num){
	return num>0;
}

function positiveNumber(numberArray){
	return numberArray.filter(checkPositive)
}

var numbers = [175, 50, 25, -4, 40, -12];
positiveNumber(numbers); // [175, 50, 25, 40]



// EX 10) Find the maximum number in an array of numbers

function getMaximum(numberArray){
	var maximum=-9999999;
	for(var i=0;i<numberArray.length-1;i++){
		if(maximum<numberArray[i]){maximum=numberArray[i]}
	}
	return maximum;
}

var numbers = [175, 50, 25, -4, 40, -12];
getMaximum(numbers); // 175


// EX 11) Print the first 10 Fibonacci numbers without recursion

function factorialWithoutRecursion(num){
	var fact=num;
	for(var i=1;i<num;i++){
		fact*=(num-i)
	}
	return fact;
}

factorialWithoutRecursion(10); // 3628800


// EX 12) Create a function that will find the nth Fibonacci number using recursion

function fibonacci(n){
	if(n===1){return [0,1]}
	else{
		var fi= fibonacci(n-1);
		fi.push(fi[fi.length-1]+fi[fi.length-2]);
		return fi;
	}
}


fibonacci(5); // [0, 1, 1, 2, 3, 5]


// EX 13) Create a function that will return a boolean specifying if a number is prime

function checkPrime(num){
	if(num<2){return false;}
	else{
		for(var i=2;i<num;i++){
			if(num%i===0){
				return false
			}
		}
	}
	return true;
}

checkPrime(5);


// EX 14) Calculate the sum of digits of a positive integer number

function sumOfDigit(num){
	var sum=0;
	num.toString().split("").forEach(function(n){
		sum+=Number(n);
	})
	return sum;
}

sumOfDigit(1234); //10

//OR

function sumDigits(value) {
	var sum = 0;
    while (value) {
      sum += value % 10;
      value = Math.floor(value / 10);
    }
    return sum;
}

sumDigits(87); // 15



// EX 15) Print the first 100 prime numbers


function checkPrime(num){
	if(num<2){return false;}
	else{
		for(var i=2;i<num;i++){
			if(num%i===0){
				return false
			}
		}
	}
	return true;
}

function printPrime(num){
	var prime=[];
	for(var i=1;i<=num;i++){
		if(checkPrime(i)){prime.push(i)}
	}
	return prime;
}

printPrime(100); // [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]


// EX 16) Create a function that will return in an array the first “p” prime numbers greater than “n”

function checkPrime(num){
	if(num<2){return false;}
	else{
		for(var i=2;i<num;i++){
			if(num%i===0){
				return false
			}
		}
	}
	return true;
}

function printNextPrime(n){
	var num = 99;
	var prime;
	for(var i=n+1;i<=num;i++){
		if(checkPrime(i)){return i}
	}
	return prime;
}

printNextPrime(7); // 11


// EX 17) Rotate an array to the left 1 position

function rotateLeft(){
	var firstElement = array.shift();
	array.push(firstElement);
	return array;
}

var array = ["Banana", "Orange", "Apple", "Mango"];
rotateLeft(array); // ["Orange", "Apple", "Mango", "Banana"]


// EX 17) Rotate an array to the right 1 position

function rotateRight(){
	var lastElement = array.pop();
	array.unshift(lastElement);
	return array;
}

var array = ["Banana", "Orange", "Apple", "Mango"];
rotateRight(array); // ["Mango", "Banana", "Orange", "Apple"]


// EX 18) Create a function to reverse an array and return the result as a new array

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


reverseArray([1, 2, 3, 4, 5]); //  [5, 4, 3, 2, 1]

// OR (recursive)

let reverseArray = (arr, n) => {
  if(n == 0){
     return [];
  }
  return [arr[n-1]].concat(reverseArray(arr, --n));
}

reverseArray([1, 2, 3, 4, 5]); //  [5, 4, 3, 2, 1]


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


reverseArray([1, 2, 3, 4, 5]); //  [5, 4, 3, 2, 1]




// EX 19) Create a function that will merge two arrays and return the result as a new array


function merge(first,second){
	var newArray = first.concat(second);
	return newArray;
}

var first 	=[1,2,3];
var second 	=[4,5,6];
merge(first,second);


// OR 

function merge(first,second){
	var newArray  = first.concat(second.filter(function (item) {
	    return first.indexOf(item) < 0;
	}));
	return newArray;
}

var first 	=[1,2,3];
var second 	=[4,5,6,2];
merge(first,second);


// EX 20) Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both

function composeSum(sum,n){
	return sum+=n;
}

function firstOrSecondArgument(first,second){
	var compose = 0;
	if(first){
		compose= first.reduce(composeSum);
	}else{
		compose= second.reduce(composeSum);
	}
	return compose;
}

var first 	=[1,2,3];
var second 	=[4,5,6,2];
firstOrSecondArgument(first,second); // 6


// EX 21) Create a function that will receive an array of numbers as argument and will return a new array with distinct elements


function distinct(numbers){
	var newArray  = [];
	numbers.map(function (item) {
	    if(newArray.indexOf(item) < 0){
	    	newArray.push(item);
	    }
	});
	return newArray;
}

var numbers 	=[1,2,3,53,2,7];
distinct(numbers); // [1, 2, 3, 53, 7]


// EX 22) Calculate the sum of first 100 prime numbers and return them in an array

function checkPrime(num){
	if(num<2){return false;}
	else{
		for(var i=2;i<num;i++){
			if(num%i===0){
				return false
			}
		}
	}
	return true;
}

function printPrime(num){
	var sum =0;
	var prime=[];
	for(var i=1;i<=num;i++){
		if(checkPrime(i)){prime.push(i);sum+=i;}
	}
	ret = {'primeArray':prime,'sum':sum}
	return ret;
}

printPrime(100); 


// EX 23) Print the distance between the first 100 prime numbers

function checkPrime(num){
	if(num<2){return false;}
	else{
		for(var i=2;i<num;i++){
			if(num%i===0){
				return false
			}
		}
	}
	return true;
}

function printDistancePrime(num){
	var distance =[];
	var prime=[];
	for(var i=1;i<=num;i++){
		if(checkPrime(i)){
			prime.push(i);
			if(i>2)
			distance.push(i-prime[prime.length-2])
		}
	}
	ret = {'primeArray':prime,'distance':distance}
	return ret;
}

printDistancePrime(100); 


// EX 24) Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.


function addToNumber(a,b){
	var sum = Number(a)+Number(b)
	return sum;
}

var str1 = "5";
var str2 = "5";
addToNumber(str1,str2); // 10


// EX 25) Create a function that will return the number of words in a text


function countWords(str){
	return str.length;
}

var str = "Hello Praveen";
countWords(str); // 13


// EX 26) Create a function that will capitalize the first letter of each word in a text


function capitalizeFirstLetter(str){
	var text = str.toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');

    return text;
}

var str = "hello praveen";
capitalizeFirstLetter(str); // Hello Praveen


// EX 27) Calculate the sum of numbers received in a comma delimited string

function calculateSum(numbers){
	var sum = 0;
	numbers.toLowerCase()
    .split(',')
    .map((number) => sum+=Number(number));

    return sum;
}


var numbers = "1,51,1,20,5";
calculateSum(numbers); // 78


// EX 28) Create a function that returns the number of occurrences of each word inside a text. The return will be an array with objects inside {word, count}

function wordOccurrences(text){
	var wordCounts=[];
	var arrayOfWords = text.split('');
	for (i = 0; i < arrayOfWords.length; i++) {
	    var word = arrayOfWords[i];
	    if (!wordCounts[word]) {
	        wordCounts[word] = 1;
	    } else {
	        wordCounts[word]++;
	    }
	}
	return wordCounts;
}

var word = "good morning";
wordOccurrences(word); // [g: 2, o: 3, d: 1, " ": 1, m: 1, …]



// EX 29) Create a function to convert a CSV text to a “bi-dimensional” array

function csv2Array(csv){
	var rows = csv.split('\n');
	var bodyObj = [];
	var headers = [];

	var header = rows[0].split(' ');
	for (var j = 0; j < header.length; j++) {
		headers.push(header[j]);
	}

	for(var i=1;i<rows.length;i++){
		var body = rows[i].split(' ');
		for (var j = 0; j < header.length; j++) {
			var key   = headers[j];
			var value = body[j];
			key.push(value);
		}
	}
	return bodyObj;
}

var csv="OrderID Orderdate Return\n408-1688254-1913131 28-May-2019 Approved\n408-1688254-19177 29-May-2019 Approved";
csv2Array(csv);


0: {OrderID: "408-1688254-1913131"}
1: {Orderdate: "28-May-2019"}
2: {Return: "Approved"}
3: {OrderID: "408-1688254-19177"}
4: {Orderdate: "29-May-2019"}
5: {Return: "Approved"}

// EX 30) Create a function that converts a string to an array of characters

function string2CharArray(str){
	return str.split("");
}
var str="hello";
string2CharArray(str); // ["h", "e", "l", "l", "o"]



// EX 31) Create a function that will convert a string in an array containing the ASCII codes of each character

function string2CharCodeArray(str){
	var result = [];
	str.split("").forEach(function(s){
		result.push(s.charCodeAt());
	})
	return result;
}
var str="hello";
string2CharCodeArray(str); // 104 101 108 108 111


// EX 32) Create a function that will convert an array containing ASCII codes in a string

function string2CharCodeArray(array){
	var result = [];
	array.forEach(function(s){
		result.push(s.charCodeAt());
	})
	return result;
}

var strArray=["convert","array","ASCII"];
string2CharCodeArray(strArray);//[99, 97, 65] 



// EX 33) Implement the Caesar cypher as a single function encryptDecrypt(text, key);

var alphabet = "abcdefghijklmnopqrstuvwxyz";
var fullAlphabet = alphabet + alphabet + alphabet;

function encryptDecrypt(cipherText, cipherOffset){

  cipherOffset = (cipherOffset % alphabet.length);
  var cipherFinish = '';

  for(i=0; i<cipherText.length; i++){
     var letter = cipherText[i];
     var upper = (letter == letter.toUpperCase());
     letter = letter.toLowerCase();
    
     var index = alphabet.indexOf(letter);
     if(index == -1){
       cipherFinish += letter;
     } else {
       index = ((index + cipherOffset) + alphabet.length);
       var nextLetter = fullAlphabet[index];
       if(upper) nextLetter = nextLetter.toUpperCase();
       cipherFinish += nextLetter;
     }
  }
    
 return cipherFinish;
}

var text="Praveen";
var key=7;
encryptDecrypt(text, key); // "Wyhcllu"


// EX 34)  Implement the bubble sort algorithm for an array of numbers

function swap(arr, first_Index, second_Index){
    var temp = arr[first_Index];
    arr[first_Index] = arr[second_Index];
    arr[second_Index] = temp;
}

function bubbleSort(arr){

    var len = arr.length,
        i, j, stop;

    for (i=0; i < len; i++){
        for (j=0, stop=len-i; j < stop; j++){
            if (arr[j] > arr[j+1]){
                swap(arr, j, j+1);
            }
        }
    }

    return arr;
}

bubbleSort([3, 0, 2, 5, -1, 4, 1]); // [-1, 0, 1, 2, 3, 4, 5]


// EX 35)  Create a function to calculate the distance between two points defined by their x, y coordinates

function calculateDistance(point1,point2){
	var diffX=point2.x-point1.x;
	var diffY=point2.y-point1.y;
	return {x:diffX,y:diffY};
}

var point1 ={x:2,y:1};
var point2 ={x:53,y:12};
calculateDistance(point1,point2); // {x: 51, y: 11}


// EX 36)  Create a function that will return a Boolean value indicating if two circles defined by center coordinates and radius are intersecting

/*

Distance between centers C1 and C2 is calculated as
 C1C2 = sqrt((x1 - x2)2 + (y1 - y2)2).

There are three condition arises.
1. If C1C2 == R1 + R2
     Circle A and B are touch to each other.
2. If C1C2 > R1 + R2
     Circle A and B are not touch to each other.
3. If C1C2 < R1 + R2
      Circle intersects each other.

*/

function checkIntersecting(x1,x2,y1,y2,r1,r2){
	var result="";
	var C1C2 = Math.sqrt((Number(Number(x1) - Number(x2))*2) + Number((Number(y1) - Number(y2))*2));
	console.log("C1C2",C1C2);
	console.log("r1+r2",r1+r2);
	if(C1C2===(r1+r2)){
		result="Circle A and B are touch to each other";
	}else if(C1C2 > r1 + r2){
		result="Circle A and B are not touch to each other";
	}
	else if(C1C2 < r1 + r2){
		result="Circle intersects each other";
	}
	return result;
}

var x1=7,x2=3,y1=3,y2=1;
var r1=5,r2=3;
checkIntersecting(x1,x2,y1,y2,r1,r2); // "Circle intersects each other"

