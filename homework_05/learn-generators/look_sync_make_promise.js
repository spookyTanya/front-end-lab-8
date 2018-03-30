function askFoo(){
	return new Promise(function(resolve, reject){
		resolve('foo');
	});
}

function run(generator){
	var it = generator();
	function start(result){
		return result.value.then(function (value){
			return start(it.next(value));
		})
	}
	start(it.next());
}

run(function*(){
	var foo = yield askFoo();
	console.log(foo);
})