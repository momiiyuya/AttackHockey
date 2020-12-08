class COM{
	constructor(mallet){
		// console.log("COM")
		this.mallet = mallet;
		this.interval = 1;
		this.attackInterval = 50;
		this.skillInterval = 300;

		this.weapon = Object.keys(mallet.weapon)[0];
		this.weaponInterval = 10;
		this.counter = 0;
	}

	play(moveElements,mallet){
		for(var i=0;i<moveElements.length;i++){
			if(moveElements[i].name=="puck"){
				var puckCenter = moveElements[i].core().left;
				var malletCenter = this.mallet.center();
				if(puckCenter>malletCenter){
					this.mallet.move("right");
				}
				else if(puckCenter<malletCenter){
					this.mallet.move("left");
				}
				
				if(Math.floor(Math.random()*100)===0){
					mallet.push_(table,moveElements[i]);
				}
			}
		}
	}

	attack(mallet){
		// return mallet.attack("V")
		this.counter++;
		if(this.counter>=this.weaponInterval){
			this.counter = 0;
			var weapons = Object.keys(mallet.weapon)
			this.weapon = weapons[Math.floor(Math.random()*weapons.length)];
		}
		return mallet.attack(this.weapon);
	}

	skill(mallet){
		// return mallet.attack("S")
		var skills = Object.keys(mallet.skill)
		var skill = skills[Math.floor(Math.random()*skills.length)];
		this.skillInterval = mallet.skill[skill].magic*rule.addMPInterval;
		return mallet.attack(skill);
	}
}