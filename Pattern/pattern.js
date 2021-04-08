Q.1)

*
**
***
****
*****

for(let i=1;i<=5;i++){
   	for(let j=1;j<=i;j++){
    	console.log("*")
   	}
   	console.log("\n");
}


Q.2)

1
22
333
4444
55555


for(let i=1;i<=5;i++){
    for(let j=1;j<=i;j++){
        console.log(i)
   }
    console.log("\n");
}


Q.3)

1
12
123
1234
12345


for(let i=1;i<=5;i++){
    for(let j=1;j<=i;j++){
        console.log(j)
   }
    console.log("\n");
}

Q.4)

A
BB
CCC
DDDD
EEEEE

let char = ['A','B','C','D','E','F','G','H']
for(let i=0;i<5;i++){
    for(let j=0;j<=i;j++){
        console.log(char[i])
   }
    console.log("\n");
}

Q.5)

A
AB
ABC
ABCD
ABCDE

let char = ['A','B','C','D','E','F','G','H']
for(let i=0;i<5;i++){
    for(let j=0;j<=i;j++){
        console.log(char[j])
   }
    console.log("\n");
}


Q.5)

*****
****
***
**
*


for(let i=1;i<=5;i++){
   	for(let j=5;j>=i;j--){
    	console.log("*")
   	}
   	console.log("\n");
}

OR


for(let i=1;i<=5;i++){
   	for(let j=1;j<=(6-i);j++){
    	console.log("*")
   	}
   	console.log("\n");
}

Q.6)

11111
2222
333
44
5

for(let i=1;i<=5;i++){
   	for(let j=5;j>=i;j--){
    	console.log(i)
   	}
   	console.log("\n");
}

OR

for(let i=1;i<=5;i++){
    for(let j=1;j<=(6-i);j++){
        console.log(i)
   }
    console.log("\n");
}



Q.7)

12345
1234
123
12
1

for(let i=1;i<=5;i++){
   	for(let j=5;j>=i;j--){
    	console.log(j)
   	}
   	console.log("\n");
}


OR

for(let i=1;i<=5;i++){
    for(let j=1;j<=(6-i);j++){
        console.log(j)
   }
    console.log("\n");
}


Q.8)

AAAAA
BBBB
CCC
DD
E

let char = ['A','B','C','D','E','F','G','H']

for(let i=0;i<5;i++){
   	for(let j=5;j>i;j--){
    	console.log(char[i])
   	}
   	console.log("\n");
}


OR

for(let i=0;i<5;i++){
    for(let j=1;j<=(5-i);j++){
        console.log(char[i])
   }
    console.log("\n");
}



Q.9)

ABCDE
ABCD
ABC
AB
A

let char = ['A','B','C','D','E','F','G','H']

for(let i=1;i<=5;i++){
   	for(let j=5;j>=i;j--){
    	console.log(char[5-j])
   	}
   	console.log("\n");
}

OR 


for(let i=0;i<5;i++){
    for(let j=0;j<=(4-i);j++){
        console.log(char[j])
   }
    console.log("\n");
}


Q.10)

55555
4444
333
22
1

for(let i=5;i>=1;i--){
   	for(let j=0;j<i;j++){
    	console.log(i)
   	}
   	console.log("\n");
}


Q.11)

54321
5432
543
54
5


for(let i=1;i<=5;i++){
   	for(let j=5;j>=i;j--){
    	console.log(j)
   	}
   	console.log("\n");
}



Q.12)

EEEEE
DDDD
CCC
BB
A


let char = ['A','B','C','D','E','F','G','H']
for(let i=4;i>=0;i--){
   	for(let j=0;j<=i;j++){
    	console.log(char[i]);
   	}
   	console.log("\n");
}




Q.13)

EDCBA
EDCB
EDC
ED
E


let char = ['A','B','C','D','E','F','G','H']
for(let i=1;i<=5;i++){
   	for(let j=5;j>=i;j--){
    	console.log(char[5-j])
   	}
   	console.log("\n");
}



Q.14)

    *
   **
  ***
 ****
*****


for(let i=1;i<=5;i++){
   	for(let j=5;j>=1;j--){
   		if(i>=j){
    		console.log("i",i,"j",j,"*")
    	}else{
			console.log("i",i,"j",j,"\t")
    	}
   	}
   	console.log("\n");
}


OR

for(let i=1;i<=5;i++){
   	for(let j=5;j>i;j--){
    	console.log("i",i,"j",j,"space")
   	}
    for(let k=1;k<=i;k++){
    	console.log("i",i,"k",k,"*")
   	}
   	console.log("\n");
}



Q.15)

    1
   22
  333
 4444
55555


let count = 0;
for(let i=1;i<=5;i++){
	if(count < 5){
	   	for(let j=5;j>=1;j--){
	   		if(i>=j){
	    		console.log(i)
	    	}else{
				console.log("space")
	    	}
	   	}
	   	console.log("\n");
	   	count++;
	}else{
		break;
	}
}

OR

for(let i=1;i<=5;i++){
   	for(let j=5;j>i;j--){
    	console.log("i",i,"j",j,"space")
   	}
    for(let k=1;k<=i;k++){
    	console.log(i)
   	}
   	console.log("\n");
}



Q.16)

    1
   12
  123
 1234
12345

let count = 0;
for(let i=5;i>=1;i--){
	if(count < 5){
	   	for(let j=1;j<=5;j++){
	   		if(i<=j){
	    		console.log(j)
	    	}else{
				console.log("space")
	    	}
	   	}
	   	console.log("\n");
	   	count++;
	}else{
		break;
	}
}


OR

for(let i=1;i<=5;i++){
   	for(let j=5;j>i;j--){
    	console.log("i",i,"j",j,"space")
   	}
    for(let k=1;k<=i;k++){
    	console.log(k)
   	}
   	console.log("\n");
}


Q.17)

    A
   BB
  CCC
 DDDD
EEEEE


let char = ['A','B','C','D','E','F','G','H']
for(let i=0;i<5;i++){
   	for(let j=4;j>i;j--){
    	console.log("i",i,"j",j,"space")
   	}
   	for(let k=0;k<=i;k++){
    	console.log(char[i])
   	}
   	console.log("\n");
}


Q.18)

    A
   AB
  ABC
 ABCD
ABCDE

let char = ['A','B','C','D','E','F','G','H']

for(let i=0;i<5;i++){
   	for(let j=4;j>i;j--){
    	console.log("i",i,"j",j,"space")
   	}
   	for(let k=0;k<=i;k++){
    	console.log(char[k])
   	}
   	console.log("\n");
}



Q.19)

*****
 ****
  ***
   **
    *

for(let i=0;i<5;i++){
	for(let j=1;j<=i;j++){
    	console.log("i",i,"j",j,"space")
   	}
   	for(let k=i;k<5;k++){
    	console.log("i",i,"k",k,"*")
   	}
}


Q.20)

55555
 4444
  333
   22
    1

for(let i=5;i>=1;i--){
	for(let j=(5-1);j>=i;j--){
    	console.log("i",i,"j",j,"space")
   	}
   	for(let k=1;k<=i;k++){
   		console.log(i)
   	}
}


