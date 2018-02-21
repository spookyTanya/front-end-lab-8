function showResult(fighter) {
  console.log('Fighter', fighter.getName());
  console.log('- Combat stats:', fighter.getCombatHistory());
  console.log('- Properties:', fighter.getStats());
}

function fighter(combat){
	var history = {
		wins: 0,
		loses: 0
	};

	getName = () => combat.name;

	getStats = () => combat;

	Block = () => Math.random() > 0.5;

	getCombatHistory = () => history;

	function fight(defender){
		if(defender.Block()===true){
			return false;
		} else {
			var prevHealth = defender.getStats().hp;
			defender.getStats().hp -= this.getStats().attack;
			var health = defender.getStats().hp;
			if(health <= 0){
				history.wins++;
				defender.getCombatHistory().loses++;
				defender.getStats().hp = prevHealth;
				return true;
			}
			defender.getStats().hp = health;
			return true;

		}

	};

	return{
		getName,
		getStats,
		getCombatHistory,
		Block,
		fight
	}

}
 
 var fighter1 = fighter({name: 'John', attack: 100, hp: 100});
 var fighter2 = fighter({name: 'Kayn', attack: 50, hp: 300});
 var fighter3 = fighter({name: 'Bill', attack: 40, hp: 100});

 fighter1.fight(fighter2); // true, fighter 1 make damage to fighter 2
 fighter1.fight(fighter3); // true, fighter 1 make damage to fighter 3

 showResult(fighter1);
 showResult(fighter2); 
 showResult(fighter3);
