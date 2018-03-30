var inputs = process.argv.slice(2);
var result = inputs.map(val=>val[0]).reduce((result,val)=>result+val);
console.log(result);