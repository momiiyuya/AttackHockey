class TableObject{
	constructor(){
	}

	move(){
		this.beforePosition = Object.assign({},this.position);
		this.position.x+=this.vector.x*this.speed;
		this.position.y+=this.vector.y*this.speed;
	}

	core(){
		var core ={
			top:this.position.y+this.height/2,
			left:this.position.x+this.width/2
		}	
		return　core;
	}

	collisionDetection(table,malletT,malletF){
		var turnMallet;
		var malletTop;
		var malletBottom;
		var lowY;
		var highY;
		if(this.collisionConditions()) {
			turnMallet=malletT
			malletTop=table.playPositionT-malletT.thickness/2-this.width;
			malletBottom=table.playPositionT+malletT.thickness/2-this.height;
			lowY = this.beforePosition.y;
			highY = this.position.y;
		}
		else {
			turnMallet=malletF;
			malletTop=table.playPositionF+malletF.thickness/2;
			malletBottom=table.playPositionF-malletF.thickness/2;
			lowY = this.position.y;
			highY = this.beforePosition.y;
		}
		// console.log(malletTop,lowY,highY)
		if(lowY<=malletTop&&malletTop<=highY||lowY<=malletBottom&&malletBottom<=highY){
			// console.log("top collision")
			if(turnMallet.areaScope().left<this.core().left&&this.core().left<turnMallet.areaScope().right){
				// console.log("puck collision");
				return this.collision(table,turnMallet);
			}
		}
	}

	collisionConditions(){
		return !this.team;
	}

	collision(table,turnMallet){

	}

}