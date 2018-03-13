function reverseNumber(n) {
	s = Math.sign(n);
	m = Math.abs(n);
    for(var r = 0; m>0; m = Math.floor(m / 10)) {
        r *= 10;
        r += m % 10;
    }
    return r*s;
}