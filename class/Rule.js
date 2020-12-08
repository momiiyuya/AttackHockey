class Rule{
	constructor(){
		this.tableSize = {
			width:540,
			height:680
		}
		this.acceleration = 0.05;
		this.accelerationInterval = 100;
		this.gameSpeedInterval = 8;//低いほど早い
		this.addMPInterval=100;
		// this.rule = "freeWeapon";
		this.rule = "oneWeapon";
		this.start = false;
		this.pause = false;
		this.end = false;
		this.stan = 5;
	}

	reverseStart(){
		this.start = !this.start;
	}

	reversePause(){
		this.pause = !this.pause;
	}

	reverseEnd(){
		this.end = !this.end;
	}
}