// Create a function that will capitalize the first letter of each word in a text

function capitalizeFirstLetter(str){
	var text = str.toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');

    return text;
}

var str = "hello praveen";
capitalizeFirstLetter(str); // Hello Praveen