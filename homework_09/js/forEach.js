function forEach(array, func){
		for(var i=0; i<array.length; ++i){
			array[i] = (func(array[i]));
		}		
	return array;
}
