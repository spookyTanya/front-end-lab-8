function isPrime(x){
	var i = x-1;
	while(x%i!=0 && i>1){
		i--;
	} 
	if(i==1){
		return true;
	} else { return false;}

}