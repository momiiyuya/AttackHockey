attack = (mallet,table,weapons)=>{
	var width = table.width;
	var height = table.height;
	for(var i=0;i<weapons.length;i++){
		if(weapons[i].charge===0 || weapons[i].charge===undefined){
			var vector = new Object();
			vector.x = weapons[i].vector.x;
			vector.y = weapons[i].vector.y;
			// console.log(weapons[i].vector)
			var position = new Object();
			position.x = mallet.center();
			var team = mallet.team;
			if(team){
				position.y = table.playPositionT
				vector.y = -vector.y 
			}
			else{
				position.y = table.playPositionF
			}
			var power = weapons[i].power;
			var weapon;
			switch(weapons[i].name){
				case "shot":
					weapon = new Shot(width,height,vector,position,team,power);
					break;
				case "stanShot":
					weapon = new StanShot(width,height,vector,position,team,power);
					break;
				case "missile":
					weapon = new Missile(width,height,vector,position,team,power);
					break;
				case "fireMissile":
					weapon = new FireMissile(width,height,vector,position,team,power);
					break;
				case "laser":
					weapon = new Laser(width,height,vector,position,team,power);
					break;
				case "heal":
					weapon = new Heal(width,height,mallet,position,team,power);
					break;
				case "buff":
					weapon = new Buff(width,height,mallet,position,team,power,weapons[i].param);
					break;
				default:
					continue;
					break;
			}
			// console.log(weapon)
			table.addWeapon(weapon.DOM);
			autoMoveElements.push(weapon);
			weapons[i].charge = weapons[i].chargeTime;
		}
	}
}