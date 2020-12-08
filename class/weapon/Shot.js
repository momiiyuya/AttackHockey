class Shot extends TableObject{
	constructor(width,height,vector,position,team,power){
		super();
		this.name = "shot";
		this.width = 20;
		this.height = 20;
		this.beforePosition;
		this.position=position;
		this.position.x -= this.width/2;
		this.position.y -= this.height/2;
		this.limit={left:0,right:width-this.width,bottom:height-this.height}
		this.vector = vector;
		this.speed = 5;
		this.team=team;
		this.color ="#999"
		this.power = power;


				//create puck
		var shot = document.createElement("div");
		shot.style.width = this.width+"px";
		shot.style.height = this.height+"px";
		shot.style.position = "absolute";
		shot.style.top = this.position.y+"px";
		shot.style.left = this.position.x+"px";
		// shot.style.backgroundColor = this.color;
		shot.style.overflow = "hidden";
		this.DOM = shot;

		var shotImg = document.createElement("img");
		shotImg.src = "./img/shot.png";
		shotImg.style.width = this.width+"px";
		shotImg.style.height = this.height+"px";
		// shotImg.style.marginLeft = "-17px";	
		// shot.style.backgroundColor = this.color;
		this.shotImg = shotImg;
		shot.appendChild(shotImg);
	}

	move(){
    	super.move();
    	var rotate = calculate_radian(calculate_cosine(this.vector.y,this.vector.x));

		if(this.team){
			rotate= -rotate +180;
		}
		else{
			rotate;
		}
		this.DOM.style.transform = "rotate("+(-rotate)+"deg)";

		if(this.position.x<this.limit.left){
			this.vector.x = -this.vector.x;
			this.position.x = -this.position.x;
		}
		else if(this.position.x>this.limit.right){
			this.vector.x = -this.vector.x;
			this.position.x = this.limit.right-(this.position.x-this.limit.right);  
		}

		if(this.position.y<0||this.position.y>this.limit.bottom){
			return "delete";
		}

		// console.log("move puck")
		this.DOM.style.top=this.position.y+"px";
		this.DOM.style.left=this.position.x+"px";

		return "continue";
	}

	collision(table,turnMallet){
	// 	if(turnMallet.damage(this.power)){
	// 		if(turnMallet.team){
	// 			return "lose";
	// 		}
	// 		return "win";
	// 	}
	// 	return "delete";
		turnMallet.damage(this.power);
		return "delete";
	}
}