
function assign(obj, obj1, obj2){
	for(var i=1; i<arguments.length; i++){
		for(var key in arguments[i]){
			var x = key;
			var y = arguments[i][key];
			obj[x] = y;
		}
	}
	return obj;
}

var defaults = { width: 100, height: 100 };
var options = { width: 150 };
var configs = assign({a: 2}, defaults, options); // -> {width: 150, height: 100}
console.log(configs);


function Base(obj){
	this.fighter = obj;
	this._totalhitpoints = obj.hitpoints;	
	this._currenthitpoints = obj.hitpoints;
}

Base.prototype.getHitpoints = function(){
	return this._currenthitpoints;
}

Base.prototype.setHitpoints = function(val){
	this._currenthitpoints = val;
}

Base.prototype.getAttack = function(){
	return this.fighter.attack;	
}

Base.prototype.setAttack = function(val){
	this.fighter.attack = val;
}

Base.prototype.isAlive = function(){
	if(this._currenthitpoints>0){
		return true;
	} return false;
}

Base.prototype.fight = function(defender){
	if(defender.isAlive()){
		defender._currenthitpoints -= this.fighter.attack;
	} 
}

Base.prototype.getTotalHitpoints = function(){
	return this._totalhitpoints;
}

Base.prototype.setTotalHitpoints = function(val){
	this._totalhitpoints = val;
}

function Champion(){
	Base.apply(this, arguments);
	this._block = false;
}
Champion.prototype = Object.create(Base.prototype);
Champion.prototype.constructor = Champion;

Champion.prototype.heal = function(){
	if(this.getHitpoints() + 5 <= this.getTotalHitpoints()){
		//this._currenthitpoints +=5;
		this.setHitpoints(this.getHitpoints()+5);
	}
}

Champion.prototype.defence = function(){
	this._block = true;
}

Champion.prototype.fight = function(defender){
	if(defender.isAlive()){
		defender.setHitpoints(defender.getHitpoints()-this.getAttack());
		//defender._currenthitpoints -= this.fighter.attack;
	} else {
		this.setAttack(this.getAttack()+1);
	}
	
}

function Monster(){
	Base.apply(this, arguments);
	this._rage = 0;
}
Monster.prototype = Object.create(Base.prototype);
Monster.prototype.constructor = Monster;

Monster.prototype.fight = function(defender){
	if(defender.isAlive() && !defender._block){
		if(this._rage!=0){
			defender.setHitpoints(defender.getHitpoints()-this.getAttack()*2)
			//defender._currenthitpoints -= this.fighter.attack*2;
			this._rage--;
		} else if(defender.isAlive()){
			defender.setHitpoints(defender.getHitpoints()-this.getAttack());
			//defender._currenthitpoints -= this.fighter.attack;
		}	
	}
	if(defender._block){
		defender._block = false;
		if(this._rage>0) this._rage--;	
	}
	if(!defender.isAlive()){
		this.setHitpoints(Math.floor(this.getHitpoints() + defender.getTotalHitpoints()/4));
		this.setTotalHitpoints(Math.floor(this.getTotalHitpoints() + defender.getTotalHitpoints()/10));
	}
	//return;
}


Monster.prototype.enrage = function(){
	this._rage=2;
}

Monster.prototype.fury = function(){
	if(this.getHitpoints()>5 && this.getTotalHitpoints()>5){
		this.setHitpoints(this.getHitpoints()-5);
		this.setTotalHitpoints(this.getTotalHitpoints()-5) ;
		this.setAttack(this.getAttack()+2);
	}
}

let hunter = new Champion({name: 'Rexxar', attack: 10, hitpoints: 60});
let beast = new Monster({name: 'King Krush', attack: 8, hitpoints: 80});
console.log(beast.getTotalHitpoints());
hunter.fight(beast);
console.log(beast.getHitpoints()); // -> 70
beast.enrage();
hunter.fight(beast);
console.log(beast.getHitpoints()); // -> 60
beast.fight(hunter);
console.log(hunter.getHitpoints()); // -> 44
//console.log(hunter.getTotalHitpoints()); // 60
hunter.heal(); 
console.log(hunter.getHitpoints()); // 49
// //hunter.defence();
beast.fight(hunter);  
console.log(hunter.getHitpoints()); // 28
beast.fury();
beast.fight(hunter);
console.log(hunter.getHitpoints()); // 18
console.log(beast.getHitpoints()); // 55
beast.fight(hunter); 
console.log(hunter.getHitpoints()); // 8 
beast.fight(hunter);
console.log(hunter.getHitpoints()); // -2
beast.fight(hunter);
console.log(hunter.getHitpoints());
 console.log(beast.getTotalHitpoints()); // 86
 console.log(beast.getHitpoints());  // 70
 