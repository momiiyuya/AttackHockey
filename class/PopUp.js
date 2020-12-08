class PopUp{
	constructor(position, element){
		this.counter = 0;
		this.interval = 3;
		this.deleteTime = 100;
		this.position = position;

		this.DOM = element;
		this.DOM.style.position = "absolute";
		this.DOM.style.top = position.y+"px";
		this.DOM.style.left = position.x+"px";
	}

	move(){
		this.counter++;
		if(this.counter%this.interval===0){
			this.position.y--;
			this.DOM.style.top = this.position.y+"px";			
		}
	}


	collisionDetection(){
		if(this.counter>=this.deleteTime){
			return"delete";
		}
	}
}