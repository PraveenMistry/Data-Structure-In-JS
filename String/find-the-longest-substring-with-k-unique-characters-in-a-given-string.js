// find-the-longest-substring-with-k-unique-characters-in-a-given-string

/*
"aabbcc", k = 1
Max substring can be any one from {"aa" , "bb" , "cc"}.

"aabbcc", k = 2
Max substring can be any one from {"aabb" , "bbcc"}.

"aabbcc", k = 3
There are substrings with exactly 3 unique characters
{"aabbcc" , "abbcc" , "aabbc" , "abbc" }
Max is "aabbcc" with length 6.

"aaabbb", k = 3
There are only two unique characters, thus show error message.
*/

let s = 'aabacbebebe'//'aabbcc'
let k = 3;
let out= "";
let final= "";
let dist = "";
function sutString(){
  for(let j=0;j<s.length;j++){
    for(let i=j;i<s.length;i++){
      if(dist.length <= k){
        out+=s[i];
        if(dist.indexOf(s[i]) < 0){
          dist+=s[i];
        }
      }
    }
    if(dist.length === k && final.length < out.length){
      final = out
      out = "";
      dist = "";
    }else{
      out = "";
      dist = "";
    }
  }
  return final;
}

sutString(s)

/*
INPUT: aabacbebebe, k =3
OUTPUT: cbebebe

*/

// Method 2 (Linear Time)
// O(n)


/*

creata count object
sort by max count
merge till k

*/

let s = "aabacbebebe";
let k = 3;
 
let MAX_CHARS = 26;
 
function isValid(count, k)
{
    let val = 0;
    for(let i = 0; i < MAX_CHARS; i++){
        if (count[i] > 0){
            val++;
        }
    }
 
    // Return true if k is greater
    // than or equal to val
    return (k >= val);
}
 
function kUniques(s,k){
     
    let u = 0;
    let n = s.length;
    let count = new Array(MAX_CHARS);
     
    for(let i = 0; i < MAX_CHARS; i++){
        count[i] = 0;
    }
    for(let i = 0; i < n; i++){
    	if (count[s[i].charCodeAt(0) -
                   'a'.charCodeAt(0)] == 0){
            u++;
        }
        count[s[i].charCodeAt(0) -
              'a'.charCodeAt(0)]++;
    }
 	console.log("count",count, u);

 	if (u < k){
     	console.log("Not enough unique characters");
        return;
    }
    
    let curr_start = 0, curr_end = 0;
 
    let max_window_size = 1;
    let max_window_start = 0;
 
    for(let i = 0; i < MAX_CHARS; i++){
        count[i] = 0;
    }
     
    count[s[0].charCodeAt(0) -
           'a'.charCodeAt(0)]++;
 
    for(let i = 1; i < n; i++){  
        count[s[i].charCodeAt(0) -
               'a'.charCodeAt(0)]++;
        curr_end++;
 
        while (!isValid(count, k)){
            count[s[curr_start].charCodeAt(0) -
                            'a'.charCodeAt(0)]--;
            curr_start++;
        }
 
        if (curr_end - curr_start + 1 > max_window_size){
            max_window_size = curr_end - curr_start + 1;
            max_window_start = curr_start;
        }
    }
 
    console.log("Max sustring is : " +
                   s.substring(max_window_start,
                   max_window_start +
                   max_window_size + 1) +
                   " with length " + max_window_size);
    
}

kUniques(s, k);
 