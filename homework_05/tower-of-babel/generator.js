const max = +process.argv[2];
let FizzBuzz = function*(){
 	let start = 1;
 	while(start<=max){
 		let value = start;
 		start++;
 		if(value % 15===0){
 			value = "FizzBuzz";
 		} else if(value % 5===0){
 			value = "Buzz";
 		} else if(value % 3===0){
 			value = "Fizz";
 		}
 		yield value;
 	}
}(); 

for (var n of FizzBuzz) {
  console.log(n);
}