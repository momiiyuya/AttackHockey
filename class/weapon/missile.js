class Missile extends TableObject{
	constructor(width,height,vector,position,team,power){
		super();
		this.name = "missile";
		this.width = 10;
		this.height = 20;
		this.beforePosition;
		this.position=position;
		this.position.x -= this.width/2;
		this.position.y -= this.height/2;
		this.limit={left:0,right:width-this.width,bottom:height-this.height}
		this.vector = vector;
		this.speed = -3;
		this.team=team;
		this.color ="#000"
		this.acceleration = 0.1;
		this.power = power;


				//create puck
		var missile = document.createElement("div");
		missile.style.width = this.width+"px";
		missile.style.height = (714/783 * 10)+"px";
		missile.style.position = "absolute";
		missile.style.top = this.position.y+"px";
		missile.style.left = this.position.x+"px";
		// missile.style.backgroundColor = this.color;
		this.DOM = missile;
		var missileImg = document.createElement("img");
		missileImg.src = "./img/missile.png";
		missileImg.style.transform = "rotate(65deg)";
		missileImg.style.width = this.width*4+"px";
		missileImg.style.height = (714/783 * 10)*4+"px";	
		missileImg.style.marginLeft = "-17px";	
		// missile.style.backgroundColor = this.color;
		this.missileImg = missileImg;
		missile.appendChild(missileImg);

	}

	move(){
    	super.move();
		this.speed+=this.acceleration;

		var rotate = calculate_radian(calculate_cosine(this.vector.y,this.vector.x));

		if(this.team){
			rotate= -rotate;
		}
		else{
			rotate += 180;
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