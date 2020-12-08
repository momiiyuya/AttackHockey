class Table{
	constructor(width,height){
		this.width=width;
		this.height=height;
		this.playPositionT=height*0.9;
		this.playPositionF=height*0.1;

		//create table
		var table = document.createElement("div");
		table.style.width = width+"px";
		table.style.height = height+"px";
		table.style.margin = "20px";
		table.style.border = "solid 5px #555";
		table.style.borderRadius = "20px";
		table.style.position = "relative";
		table.style.float = "left";
		table.style.backgroundColor = "rgba(255,255,255,0.8)";
		this.DOM = table;

		//true team area create
		var playFieldT = document.createElement("div");
		playFieldT.style.width = width+"px";
		playFieldT.style.height = "1px";
		playFieldT.style.backgroundColor = "#777";
		playFieldT.style.position = "absolute";
		playFieldT.style.top = this.playPositionT+"px";
		this.playFieldT = playFieldT;

		//false team area create	
		var playFieldF = document.createElement("div");
		playFieldF.style.width = width+"px";
		playFieldF.style.height = "1px";
		playFieldF.style.backgroundColor = "#777";
		playFieldF.style.position = "absolute";
		playFieldF.style.top = this.playPositionF+"px";
		this.playFieldF = playFieldF;

		//add field
		table.appendChild(playFieldT);
		table.appendChild(playFieldF);
	}

	init(malletT,malletF,puck){
		table.playFieldT.appendChild(malletT);
		table.playFieldF.appendChild(malletF);
		table.DOM.appendChild(puck);
		// console.log("table init")
	}

	addWeapon(weapon){
		table.DOM.appendChild(weapon);
	}

	addPopUp(popUp){
		table.DOM.appendChild(popUp);
	}
}