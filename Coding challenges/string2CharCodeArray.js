// Create a function that will convert a string in an array containing the ASCII codes of each character

function string2CharCodeArray(str){
	var result = [];
	str.split("").forEach(function(s){
		result.push(s.charCodeAt());
	})
	return result;
}
var str="hello";
string2CharCodeArray(str); // 104 101 108 108 111