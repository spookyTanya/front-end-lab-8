function *upper(items){
	for(var i=0; i<items.length; i++){
		try{
			if(typeof items[i] == "string"){
				yield items[i].toUpperCase();
				// items[i];
			} else {
				throw("null");
			}}
			catch(error){
				yield null;
			}
		
		
	}
}

var bad_items = ['a', 'B', 1, 'c'];

for(var item of upper(bad_items)){
	console.log(item);
}