class Buff extends TableObject{
	constructor(width,height,mallet,position,team,value,param){
		super()

		this.width = width;
		this.height = height;
		this.position = position;
		this.counter = 0;
		this.interval = 10;
		this.num = 5;

		var heal = document.createElement("div");
		heal.style.display = "none";
		this.DOM = heal;
		// var healImg = document.createElement("img");
		// healImg.src = "./img/heal.png";
		// healImg.style.width = this.width*4+"px";
		// heal.style.backgroundColor = this.color;
		// this.healImg = healImg;
		// heal.appendChild(healImg);

		mallet.addBuffState(param,value);
	}

	move(){
		counter++;
		if(counter>=this.interval*this.num){
			return "delete";
		}
	}
	collisionDetection(){

	}
}