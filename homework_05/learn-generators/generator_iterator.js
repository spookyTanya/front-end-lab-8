function *factorial(n){
	var start = 1;
	for(var i=1; i<=n; i++){
		start *= i;
		yield start;
	}
}

for(var n of factorial(5)){
	console.log(n);
}