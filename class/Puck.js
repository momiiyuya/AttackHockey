class Puck extends TableObject{
	constructor(width,height){
		super();
		this.name="puck";
		this.width=20;
		this.height=20;
		this.beforePosition;
		this.position={x:width/2-this.width/2,y:height/2-this.height/2};
		this.limit={left:0,right:width-this.width,bottom:height-this.height}
		this.originalSpeed=3;
		this.speed=this.originalSpeed;

		var ranX = Math.random() * 2 - 1  ;
		do{
			var ranY = Math.random() * 2 - 1  ;
		} while(Math.abs(ranY)<0.1)
		var sumRan = Math.abs(ranX)+Math.abs(ranY);

		this.vector={x:ranX/sumRan,y:ranY/sumRan};

		if(this.vector.y>0) this.turn = true;
		else this.turn = false; 

		//create puck
		var puck = document.createElement("div");
		puck.style.width = (this.width-10)+"px";
		puck.style.height = (this.height-10)+"px";
		puck.style.border = "solid 5px rgba(0,0,0,0)";
		puck.style.borderRadius = this.width+"px"
		puck.style.position = "absolute";
		puck.style.top = this.position.y+"px";
		puck.style.left = this.position.x+"px";
		this.DOM = puck;

		var bomImg = document.createElement("img");
		bomImg.src = "./img/bom.png";
		bomImg.style.width = this.width+"px";
		bomImg.style.height = this.height+"px";
		bomImg.style.marginLeft = "-5px";
		bomImg.style.marginTop = "-5px";
		bomImg.style.transform = "rotate(135deg)";
		// bomImg.style.marginLeft = "-17px";	
		// bom.style.backgroundColor = this.color;
		this.bomImg = bomImg;
		puck.appendChild(bomImg);
	}

	move(){
    	super.move();
    	var rotate = calculate_radian(calculate_cosine(this.vector.y,this.vector.x));

    	if(!this.turn){
			rotate= -rotate;
		}
		else{
			rotate += 180;
		}
		this.DOM.style.transform = "rotate("+(-rotate)+"deg)";

		this.speed=(this.speed-this.originalSpeed)*0.98+this.originalSpeed;

		if(this.position.x<this.limit.left){
			this.vector.x = -this.vector.x;
			this.position.x = -this.position.x;
		}
		else if(this.position.x>this.limit.right){
			this.vector.x = -this.vector.x;
			this.position.x = this.limit.right-(this.position.x-this.limit.right);  
		}

		if(this.position.y<=0){
			return　"win";
		}
		else if(this.position.y>=this.limit.bottom){
			return　"lose";
		}

		// console.log("move puck")
		this.DOM.style.top=this.position.y+"px";
		this.DOM.style.left=this.position.x+"px";

		return "continue";
	}

	reflect(vectorX,vectorY,power){
		// console.log("reflect");
		if(this.vector.y>0){
			this.vector.y+=vectorY;
		}
		else{
			this.vector.y-=vectorY;
		}
		this.vector.x += vectorX;
		this.vector.y = -this.vector.y;
		this.speed+=power;
		var sum = Math.abs(this.vector.x)+Math.abs(this.vector.y);
		this.vector.x = this.vector.x/sum;
		this.vector.y = this.vector.y/sum;
		this.turn = !this.turn;
	}

	areaScope(){
		//四角形の当たり判定
		var area = {
			top:this.position.y,
			bottom:this.position.y+this.width,
			left:this.position.x,
			right:this.position.x+this.height
		}
		return　area;
	}

	collisionConditions(){
		return this.turn;
	}

	collision(table,turnMallet){
		var collisionPart = (this.core().left-turnMallet.areaScope().left)/turnMallet.size;
		collisionPart -= 0.5;
		collisionPart /= 0.5;
		collisionPart *= 0.9999;
		// console.log((this.core().left-turnMallet.areaScope().left)/turnMallet.size)
		this.reflect(collisionPart,1-Math.abs(collisionPart),turnMallet.reflectPower);
	}

}