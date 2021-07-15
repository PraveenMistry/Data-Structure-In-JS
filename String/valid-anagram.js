// Valid Anagram


/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

Input: s = "anagram", t = "nagaram"
Output: true

Input: s = "rat", t = "car"
Output: false

*/

// using sort, match
// using count both  
// using one count 

// let s = "anagram", t = "nagaram";
let  s = "rat", t = "car"
let count = [];

function checkAnagram(){
	let n = s.length;
	let m = t.length;
	if(n !== m){
		return false
	}
	for(let i=0;i<n;i++){
        if(!count[s[i]]){count[s[i]]=0}
        if(!count[t[i]]){count[t[i]]=0}
		count[s[i]]++;
		count[t[i]]--;
	}
	for(let j in count){
		if(count[j] < 0){
			return false
		}
	}
	return true;
}

checkAnagram();