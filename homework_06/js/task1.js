var a, b, c, mn, mx, maxlen, sq1, sq2, square, per;
a = + prompt("Enter first length");
b = + prompt("Enter second length");
c = + prompt("Enter third length");
if (a<(b+c)&&b<(a+c)&&c<(b+a)) {
	per = (a + b + c) / 2;
	square = Math.sqrt(per*(per - a)*(per - b)*(per - c));
	if (a<b) {
		mn = a;
		mx = b;
	}else{
		mx = a;
		mn = b;
	}
	if (mx<c) {
		maxlen = c;
	} else{
		maxlen = mx;
		mx = c;
	}
	sq1 = Math.pow(maxlen, 2);
	sq2 = Math.pow(mn, 2) + Math.pow(mx, 2);
	if (sq1==sq2) {
		if(parseInt(square)==square){
			console.log('Type of triangle is right triangle and square is ' + square);
		} else console.log('Type of triangle is right triangle and square is ' + square.toFixed(2));
	} else if((a==b)&&(b==c)&&(c==a)){
		if(parseInt(square)==square){
			console.log('Type of triangle is equilateral triangle and square is ' + square);
		} else 	console.log('Type of triangle is equilateral triangle and square is ' + square.toFixed(2));
	} else if((a==b)||(b==c)||(c==a)){
		if(parseInt(square)==square){
			console.log('Type of triangle is isosceles triangle and square is ' + square);
		} else console.log('Type of triangle is isosceles triangle and square is ' + square.toFixed(2));
	} else if((a!=b)&&(b!=c)&&(c!=a)){
		if(parseInt(square)==square){
			console.log('Type of triangle is scalene triangle and square is ' + square);
		} else console.log('Type of triangle is scalene triangle and square is ' + square.toFixed(2));
	} 
}else{
	console.log('Incorrect data!')
}
