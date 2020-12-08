class StanShot extends Shot{
	constructor(width,height,vector,position,team,power) {
    	super(width,height,vector,position,team);
    	this.speed=10;
  	}

	collision(table,turnMallet){
		turnMallet.addAbnormalState("stan");
		return "delete";
	}
}