class Laser extends TableObject{
	constructor(width,height,vector,position,team,power){
		super();
		this.name = "laser";
		this.width = 20;
		this.height = height*0.9;
		this.position=position;
		this.position.x -= this.width/2;
		this.team=team;
		if(this.team){
			this.position.y -= this.height; 	
		}
		this.color ="#339"
		this.power = power;
		this.count = 0;
		this.countLimit = rule.gameSpeedInterval*5;


				//create puck
		var laser = document.createElement("div");
		laser.style.width = this.width+"px";
		laser.style.height = this.height+"px";
		laser.style.position = "absolute";
		laser.style.top = this.position.y+"px";
		laser.style.left = this.position.x+"px";
		// laser.style.backgroundColor = this.color;
		this.DOM = laser;

		var laserImg = document.createElement("img");
		laserImg.src = "./img/laser.png";
		if(this.team){
			laserImg.style.transform = "rotate(180deg)";
		}
		laserImg.style.width = this.width+"px";
		laserImg.style.height = this.height+"px";	
		// laser.style.backgroundColor = this.color;
		this.laserImg = laserImg;
		laser.appendChild(laserImg);
	}

	move(){
		this.count++;
		if(this.count===this.countLimit){
			return "delete";
		}
	}

	collisionDetection(table,malletT,malletF){
		if(this.count<20) return;
		var turnMallet;
		if(this.collisionConditions()) {
			turnMallet=malletT;
		}
		else {
			turnMallet=malletF;
		}
		// console.log(malletTop,lowY,highY)
			// console.log("top collision")
		if(turnMallet.areaScope().left<this.core().left&&this.core().left<turnMallet.areaScope().right){
			// console.log("puck collision");
			return this.collision(table,turnMallet);
		}
	}

	collision(table,turnMallet){
		if(this.count%rule.gameSpeedInterval===0){
			// if(turnMallet.damage(this.power)){
			// 	if(turnMallet.team){
			// 		return "lose";
			// 	}
			// 	return "win";
			// }
			turnMallet.damage(this.power)
		}
	}
}