// Create a function that returns the number of occurrences of each word inside a text. The return will be an array with objects inside {word, count}

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
wordOccurrences(word); // [g: 2, o: 3, d: 1, " ": 1, m: 1, …]