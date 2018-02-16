function times2(x) { return x * 2; }

function getTransformedArray(array, func){
	var finalArr = [];
	forEach(array, pushel);
	function pushel(x){
		finalArr.push(func(x));
	}		
	return finalArr;
}

getTransformedArray([1,2,3,4], times2);