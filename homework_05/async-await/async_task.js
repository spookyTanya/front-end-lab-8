//create doAsyncMagic function using async/await that logs 
//to console results of asyncFn() called 4 times asynchronously

const waitFewSec = (msec, triggerFail) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (triggerFail) {
        reject(false);
        return;
      }

      resolve(true);
    }, msec);
  });
};
const asyncFn = async () => {
  const result = await waitFewSec(1000);
  return result;
};
  
async function doAsyncMagic(){
  var a = [];
  for(var i=0; i<4; i++){
    a.push(await asyncFn());
  }
  console.log(a);
}

doAsyncMagic(); // [true, true, true, true]


//create iterateRange function that returns sum of rangeGen() yields using async iterators.

async function* rangeGen() {
  for (let i = 1; i <= 15; i++) {
    yield i;
  }
}

async function iterateRange(){
  var sum = 0
  for await(var res of rangeGen()){
    sum += res;
  }
  return sum;
}

iterateRange();