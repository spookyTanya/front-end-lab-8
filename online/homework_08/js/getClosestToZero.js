function getClosestToZero(){
	var min = Math.abs(arguments[0]);
	for (var i = 0; i < arguments.length; i++){
		if(min>Math.abs(arguments[i])){
			min = Math.abs(arguments[i]);
			var x = arguments[i]; 
		}
	}
	return x;
}