// Create a function to convert a CSV text to a “bi-dimensional” array

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