// Print all the multiplication tables with numbers from 1 to 10

function printTables(start,end){
	for(var i=start;i<=end;i++){
		for(var j=1;j<=10;j++){
			console.log(i*j);
		}
	}
}

printTables(1,4);