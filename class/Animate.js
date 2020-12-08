class Animate extends PopUp{
	constructor(position,detail,scale){
		super(position,document.createElement("div"));

		this.divideWidth = detail.divideWidth;
		this.divideHeight = detail.divideHeight;
		this.horizon = detail.width/detail.divideWidth;
		this.vertical = detail.height/detail.divideHeight;
		this.page = 0;
		this.animeSpeedInterval = 8;//高いほど遅い

		var trim = document.createElement("div");
		trim.style.width = detail.divideWidth+"px";
		trim.style.height = detail.divideHeight+"px";
		trim.style.overflow = "hidden";
		trim.style.position = "relative";
		trim.style.transform = "scale("+scale+","+scale+")";
		trim.style.marginTop = "-"+(detail.divideHeight/2)+"px";
		trim.style.marginLeft = "-"+(detail.divideWidth/2)+"px";
		this.DOM.appendChild(trim)


		var anime = detail.element;
		anime.style.position = "absolute";
		this.anime = anime;
		trim.appendChild(anime)

		setTimeout(()=>{
			this.animate();
		},rule.gameSpeedInterval*this.animeSpeedInterval);
	}
	// detail{
	// 	width:
	// 	height:
	// 	divideWidth:
	// 	devideHeight:
	//  element:
	// }

	animate(){
		if(this.page>=this.horizon*this.vertical){
			this.DOM.parentNode.removeChild(this.DOM);
			return;
		}
		this.anime.style.top = (-(this.page%this.vertical)*this.divideHeight)+"px";
		this.anime.style.left = (-(this.page%this.horizon)*this.divideWidth)+"px";
		this.page++;
		setTimeout(()=>{
			this.animate();
		},rule.gameSpeedInterval*this.animeSpeedInterval);
	}
}