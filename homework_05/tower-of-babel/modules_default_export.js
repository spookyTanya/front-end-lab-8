var arg1 = process.argv[2];
var arg2 = process.argv[3];

import MMath from './Math';
console.log(MMath.PI);
console.log(MMath.sqrt(+arg1));
console.log(MMath.square(+arg2));