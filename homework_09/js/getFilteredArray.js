function predicateFunction(x) { 
return x > 3;
} 

function  getFilteredArray(array, func){
	var arr1 = array.slice();
	var finalarr = [];
	forEach(array, func);
	for(var i=0; i<array.length; ++i){
		if(array[i]==true){
			finalarr.push(arr1[i]);
		}
	}
	return finalarr;
}

getFilteredArray([7,1,6,9,4,3], predicateFunction);