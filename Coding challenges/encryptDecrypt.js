// Implement the Caesar cypher as a single function encryptDecrypt(text, key);

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