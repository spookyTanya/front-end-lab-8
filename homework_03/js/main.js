function Company(array){
	this.name = array.name,
	this.owner = array.owner,
	this.maxCount = array.maxCompanySize;
	let _employers = [];
	this.created = new Date();
	let _logs =  this.name + " was created in " + this.created + "\n";
	this.addNewEmployee = function(obj){
		if(typeof obj != "object"){
			console.log("Please try to add Employee instance \n");
			return false;
		}
		if(_employers.length < this.maxCount){
			_employers.push(obj);
		} else {
			var min = _employers[0];
			for(var i=0; i<_employers.length; i++){
				if(min.salary > _employers[i].salary){
					min = _employers[i];
					var x = i;
				}
			}
			_employers[x].fire();
			var b = new Date();
			min.endwork = b.getTime();
			_employers[x] = obj;
		}
		obj.works = true;
		var a = new Date();
		obj.startwork = a.getTime();
		obj.hire(this);
		_logs+= obj.name + " starts working at " + this.name + " in " + a + "\n";
	}
	this.removeEmployee = function(id){
		var b = new Date();
		_employers[id].endwork = b.getTime();
		_logs += _employers[id].name + " ends working at " + this.name + " in " + b;
		_employers[id].fire();
		_employers.splice(id, id-1);
		_employers[id].works = false;
	}
	this.getAvarageSalary = function(){
		var avrSal = 0;
		for(var i=0; i<_employers.length; i++){
			avrSal += _employers[i].salary;
		}
		return avrSal/_employers.length;
	}
	this.getAvarageAge = function(){
		var avrAge = 0;
		for(var i=0; i<_employers.length; i++){
			avrAge += _employers[i].age;
		}
		return avrAge/_employers.length;
	}
	this.getEmployees = function(){
		return _employers;
	}
	this.getFormattedListOfEmployees = function(){
		var list = "";
		for(var i=0; i<_employers.length; i++){
			list += `${_employers[i].name}` + " - works in " +`${this.name}` +" "+ `${_employers[i].timeworking}` +" seconds \n"; //дописати 
		}
		return list;
	}
	this.getHistory = function(){
		return _logs;
	}
}

function Employee(array){
	this.name = array.name,
	this.primarySkill = array.skill,  
	this.age = array.age, 
	this.salary = array.salary;
	this.company = ""; 
	this.works = false, 
	this.startwork,
	this.endwork = 0, 
	this.timeworking = 0;
	let _log = '';
	this.getWorkTimeInSeconds = function(){
		if(this.works === true && this.startwork !==0 && this.endwork===0){
			this.timeworking = this.startwork * 100;
		}
		else if(this.startwork !==0 && this.endwork !== 0){
			this.timeworking = this.endwork - this.startwork;
			return this.timeworking*100;
		} else if(this.works === true && this.startwork !==0 && this.endwork === 0){
			var a = new Date();
			this.timeworking = a.getTime()*100 - this.startwork;
		}
	}
	this.getSalary = function(){
		return this.salary;
	}
	this.setSalary = function(val){
		if(isFinite(val) && val > 0){
			if(this.salary < val){
				_log += "change salary from "+ this.salary + " to " + val + "\n";
				this.salary = val;
			} else{
				_log += "try to change salary from " + this.salary + " to " + val + "\n" ;
			}
			return this.salary; 
		} else {
			return false;
		}
	}
	this.hire = function(obj){
		var a = new Date();
		this.company = obj.name;
		_log += this.name + " is hired to " + obj.name + " in " + a +"\n";
	}
	this.fire = function(){
		var a = new Date();
		_log += this.name + " is fired from " + this.company + " in " + a +"\n";
		this.company = "";
		
	}
	this.getHistory = function(){
		return _log;
	}
}

let artem = new Employee({name: "Artem", age: 15, salary: 1000, primarySkill: "UX"});
let vova = new Employee({name: "Vova", age: 16, salary: 2000, primarySkill: "BE"});
let vasyl = new Employee({name: "Vasyl", age: 25, salary: 1000, primarySkill: "FE"});
let ivan = new Employee({name: "Ivan", age: 35, salary: 5000, primarySkill: "FE"});
let orest = new Employee({name: "Orest", age: 29, salary: 300, primarySkill: "AT"});
let anton = new Employee({name: "Anton", age: 19, salary: 500, primarySkill: "Manager"});

let epam = new Company({name: "Epam", owner: "Arkadii", maxCompanySize: 5});

epam.addNewEmployee(artem);
epam.addNewEmployee(vova);
epam.addNewEmployee(vasyl);
epam.addNewEmployee(ivan);
epam.addNewEmployee(orest);
epam.addNewEmployee(anton);
console.log(epam);
epam.removeEmployee(2);
console.log(epam);
console.log(epam.getAvarageSalary()); 
console.log(epam.getAvarageAge());
console.log(epam.getEmployees());
console.log(epam.getFormattedListOfEmployees());
setTimeout(console.log(vasyl.getWorkTimeInSeconds()), 1000);
console.log(vasyl.getWorkTimeInSeconds());
console.log(epam.getHistory());
console.log(orest.getHistory());
epam.addNewEmployee(5,6,9,5); 