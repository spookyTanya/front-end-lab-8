const max = +process.argv[2];
let FizzBuzz = {
  [Symbol.iterator]() {
    let start = 1;
    return{
    	next() {
    		if(start<=max){
	    		let value = start;
	    		if(value % 15===0){
	    			value = "FizzBuzz";
	    		}else if(value % 3===0){
	    			value = "Fizz";
	    		} else if(value % 5===0){
	    			value = "Buzz";
	    		} 
	    	start++;
	    	return {done: false, value: value};
	    	} return {done: true};
    	}
    }
  }
} 

for (var n of FizzBuzz) {
  console.log(n);
}