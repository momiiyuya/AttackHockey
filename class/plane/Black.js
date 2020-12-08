class Black extends Mallet{
	constructor(width,team){
		super(width,team);

		var planeImg = document.createElement("img");
		planeImg.src = "./img/plane/plane_black.png";
		planeImg.style.width = this.size+"px";

		this.DOM.appendChild(planeImg);
	}	
}