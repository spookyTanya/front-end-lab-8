import output from './output-module.js';
import calc from './calculating-module.js';
import '../styles/styles.css';

var rootNode = document.getElementById('root');

var inputs = document.createElement('div');
rootNode.appendChild(inputs);
inputs.className = "inputs";

var input1 = document.createElement('input');
input1.placeholder = "Enter first number";
inputs.appendChild(input1);
input1.className = "input";
var input2 = document.createElement('input');
input2.placeholder = "Enter second number";
inputs.appendChild(input2);
input2.className = "input";

var butts = document.createElement('div');
butts.className = "buttons";
rootNode.appendChild(butts);

var oper = ["+","-","*","/"];
for(var i=0;i<4;i++){
	var butt = document.createElement('button');
	butt.innerHTML=oper[i];
	butt.onclick = function(){
		output(out, calc(this, input1, input2));
	}
	butts.appendChild(butt);
}

var out = document.createElement('input');
out.className = "output";
rootNode.appendChild(out);
