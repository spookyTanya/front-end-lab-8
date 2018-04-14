class Input {
    constructor(placeHolder) {
        this.placeHolder = placeHolder || "Type...";
        this._value = "";
       // this.valid = false;
    }

    get value() {
        return this._value;
    }

    setValue(newValue) {
        this._value = newValue;
        // this.valid = AddRequiredValidation(this._value) && 
        // AddMaxLengthValidation(this._value, 10) && 
        // AddNumberValidation(this._value);
    }
}

class NumberInput extends Input {
    constructor(placeHolder){
        super(placeHolder);
        this.type = "number";
    }
}

class TextInput extends Input {
    constructor(placeHolder){
        super(placeHolder);
        this.type = "string";
    }
}

function AddRequiredValidation(obj) {
    if(!obj.value){
        console.log('No value provided!');
        obj.valid = false;
    } else{
        console.log('Passed AddRequiredValidation');
        obj.valid = true;
    }
}

const AddMaxLengthValidation = function(obj, maxLength){
    if(obj.value.toString().length > maxLength){
        console.log('To long value!');
        obj.valid = false;
    } else {
        if(obj.valid == false){
            obj.valid = false;
        } else{
        console.log('Passed AddMaxLengthValidation');
        obj.valid = true;
        }
    }
}

const AddNumberValidation = function(obj){
    if(typeof obj.value != 'number'){
        console.log('Not a number!');
        obj.valid =  false;
    } else{
        if(obj.valid == false){
            obj.valid = false;
        } else{
            console.log('Passed AddNumberValidation');
            obj.valid = true;
        }
    }
}

let numberInput = new NumberInput("Type numbers...");
let textInput = new TextInput("Type string...");

numberInput.setValue("1");
AddRequiredValidation(numberInput);
AddMaxLengthValidation(numberInput, 10);
AddNumberValidation(numberInput);
console.log(numberInput.valid); 

console.log("\nstring");
AddRequiredValidation(textInput);
console.log(textInput.valid); 
textInput.setValue("1");
AddRequiredValidation(textInput);
AddMaxLengthValidation(textInput, 10);
console.log(textInput.valid); 
AddRequiredValidation(textInput);
AddMaxLengthValidation(textInput, 10);
textInput.setValue(1111111111111111111111111111);

console.log(textInput.valid);