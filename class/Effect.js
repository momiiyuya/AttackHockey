class Effect{
	constructor(){

	}

	effect(code){
		var src="./img/animation/";
		if(Math.floor(code/1000)===1){
			src += "anime1/";
		}
		else if(Math.floor(code/1000)===2){
			src += "anime2/";
		}
		else return false;

		code %= 1000;

		var size;

		if (Math.floor(code/100)===1) {
			src += "320240/";
			size = {x:120,y:120};
		}
		else if (Math.floor(code/100)===2) {
			src += "640480/";
			size = {x:240,y:240};
		}
		else return false;

		code %= 100;

		if(code<10) code="0"+code;

		src += "pipo-btleffect0"+code+".png";

		var effectImg = document.createElement("img");
		effectImg.src = src;

		if(effectImg.width===320){
			size.x=320;
		}

		var effect = {
			width:effectImg.width,
			height:effectImg.height,
			divideWidth:size.x,
			divideHeight:size.y,
			element:effectImg
		}
		return effect;
	}
}