function forEach(array, func){
		for(var i=0; i<array.length; ++i){
			array[i] = (func(array[i]));
		}		
	return array;
}

forEach([1,2,3,4], function test(x) {
	console.log(x);
});