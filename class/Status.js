class Status{
	constructor(width,height){
		this.width=width;
		this.height=height;

		var status = document.createElement("div");
		status.style.width = (this.width-20)+"px";
		status.style.height = (this.height-20)+"px";
		status.style.margin = "20px";
		status.style.border = "solid 5px #555";
		status.style.borderRadius = "20px";
		status.style.float = "left";
		status.style.position = "relative";
		status.style.padding = "10px";
		status.style.backgroundColor = "rgba(255,255,255,0.8)";
		this.DOM = status;

		this.barWidth = (this.width-20);
		this.barHeight = (this.barWidth/10);

		var hpBarT = document.createElement("div");
		hpBarT.style.width = this.barWidth+"px";
		hpBarT.style.height = this.barHeight+"px";
		hpBarT.style.backgroundColor = "#f00";
		hpBarT.style.border = "solid 1px #000";
		this.HPbarTDOM = hpBarT;

		var hpBarF = document.createElement("div");
		hpBarF.style.width = this.barWidth+"px";
		hpBarF.style.height = this.barHeight+"px";
		hpBarF.style.backgroundColor = "#f00";
		hpBarF.style.border = "solid 1px #000";
		this.HPbarFDOM = hpBarF;

		var hpDisplayT = document.createElement("div");
		hpDisplayT.style = this.barHeight+"px";
		hpDisplayT.style.marginBottom = "10px";
		this.HPDisplayTDOM = hpDisplayT;

		var hpDisplayF = document.createElement("div");
		hpDisplayF.style = this.barHeight+"px";
		hpDisplayF.style.marginBottom = "10px";
		this.HPDisplayFDOM = hpDisplayF;

		var mpBarT = document.createElement("div");
		mpBarT.style.width = this.barWidth+"px";
		mpBarT.style.height = this.barHeight+"px";
		mpBarT.style.backgroundColor = "#ddd";
		mpBarT.style.border = "solid 1px #000";
		this.MPbarTDOM = mpBarT;

		var mpBarF = document.createElement("div");
		mpBarF.style.width = this.barWidth+"px";
		mpBarF.style.height = this.barHeight+"px";
		mpBarF.style.backgroundColor = "#ddd";
		mpBarF.style.border = "solid 1px #000";
		this.MPbarFDOM = mpBarF;

		var mpDisplayT = document.createElement("div");
		mpDisplayT.style.height = this.barHeight+"px";
		mpDisplayT.style.marginBottom = "10px";
		this.MPDisplayTDOM = mpDisplayT;

		var mpDisplayF = document.createElement("div");
		mpDisplayF.style.height = this.barHeight+"px";
		mpDisplayF.style.marginBottom = "10px";
		this.MPDisplayFDOM = mpDisplayF;

		var winner = document.createElement("div");
		winner.style.width = (this.width-20)+"px";
		winner.style.height = "40px";
		winner.style.position = "absolute";
		winner.style.bottom = "10px";
		winner.style.fontSize = "40px";
		this.winnerDOM = winner;

		status.appendChild(hpBarF);
		status.appendChild(hpDisplayF);
		status.appendChild(mpBarF);
		status.appendChild(mpDisplayF);
		status.appendChild(document.createElement("hr"));
		status.appendChild(hpBarT);
		status.appendChild(hpDisplayT);
		status.appendChild(mpBarT);
		status.appendChild(mpDisplayT);
		status.appendChild(winner)
	}

	init(malletT,malletF){
		this.HPbarFDOM.appendChild(malletF.HPbarDOM);
		this.HPDisplayFDOM.appendChild(malletF.HPDisplay);
		this.MPbarFDOM.appendChild(malletF.MPbarDOM);
		this.MPDisplayFDOM.appendChild(malletF.MPDisplay);
		this.HPbarTDOM.appendChild(malletT.HPbarDOM);
		this.HPDisplayTDOM.appendChild(malletT.HPDisplay);
		this.MPbarTDOM.appendChild(malletT.MPbarDOM);
		this.MPDisplayTDOM.appendChild(malletT.MPDisplay);
	}
}