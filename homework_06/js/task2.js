var usd, euro, grn1, grn2, k1, k2, k3, grn11, grn22;
k1 = 34.5116;
k2 = 27.7424; 
k3 = (k1/k2).toFixed(2) ;
euro = + prompt("Input amount of EURO ");
usd = + prompt("Input amount of USD ");
if(parseInt(euro * k1)==(euro * k1)){
	grn1 = euro * k1 ;
} else grn1 = (euro * k1).toFixed(2);
if(parseInt(usd * k2)==usd * k2){
	grn2 = usd * k2;
} else grn2 = (usd * k2).toFixed(2);
console.log(euro+ " euros are equal " + grn1 + " UAH, " + usd + " dollars are equal " + grn2 + " UAH, one euro is equal " + k3 + " dollars");