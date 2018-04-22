export default function calc(butt, input1, input2){
    var pr ="";
	pr+=input1.value;
	pr+=butt.innerHTML;
	pr+=input2.value;
	console.log(pr);
	return eval(pr);
}