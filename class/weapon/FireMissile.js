class FireMissile extends Missile{
	constructor(width,height,vector,position,team,power) {
    	super(width,height,vector,position,team);
  	}

	collision(table,turnMallet){
		turnMallet.addAbnormalState("fire");
		return "delete";
	}
}