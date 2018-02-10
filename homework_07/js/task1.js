var i=0, j, k, n;
var x = parseInt(prompt("Enter the number of floors"));
if(x>20||x<=0){
	console.log('Incorrect data!');
} else{
	while (i<x) {
	    k = "";
	    n = "";
	    for (j=0; j<x-i; j++) {
	    	k += "   ";
	    }
	    for (j=0; j<i+i+1; j++){
	    	n += "[~]";
	    }
	    console.log(k + n);
	    i++;
	}
}