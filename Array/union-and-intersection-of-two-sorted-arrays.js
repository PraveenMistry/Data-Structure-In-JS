// union-and-intersection-of-two-sorted-arrays

/*
Input : arr1[] = [1, 3, 4, 5, 7]
        arr2[] = [2, 3, 5, 6]
Output : Union : [1, 2, 3, 4, 5, 6, 7]
         Intersection : [3, 5]

Input : arr1[] = [2, 5, 6]
        arr2[] = [4, 6, 8, 10] 
Output : Union : [2, 4, 5, 6, 8, 10] 
         Intersection : [6]
	
*/	

let arr1 = [1, 3, 4, 5, 7]
let arr2 = [2, 3, 5, 6]
let n = arr1.length;
let m = arr2.length;
let i = 0;
let j = 0;
let union = [];
let intersection = [];

function getUnionIntersection(){
	while(i < n && j < m){
		console.log()
		if(arr1[i] < arr2[j]){
			union.push(arr1[i]);
			i++;
		}else if(arr1[i] > arr2[j]){
			union.push(arr2[j]);
			j++;
		}else {
			intersection.push(arr2[j]);
			union.push(arr2[j]);
			i++;
			j++;
		}
		
	}
	/* Print remaining elements of
         the larger array */
    while (i < n){
        union.push(arr1[i]);
        i++;
    }
    while (j < m){
        union.push(arr2[j]);
        j++;
    }

	return `union : ${union}, intersection : ${intersection}`;
}

getUnionIntersection();
