class Mallet{
	constructor(width,team){
		this.name="mallet";
		this.size=100;
		this.position={x:width/2-this.size/2,y:0};
		this.thickness=10;
		this.range = width;
		this.limit={left:0,right:width-this.size};
		this.speed=3;
		this.power=10;
		this.pushHeight = 30;
		this.team=team;
		this.state=[];
		this.reflectPower=0;
		this.buff={};
		this.originalSpeed=this.speed;
		this.originalReflectPower = this.reflectPower;
		this.originalSize = this.size;

		if(this.team){
			this.position.y = table.playPositionT;
		}
		else{
			this.position.y = table.playPositionF;
		}

		this.HP=100;
		this.MAXHP=100;
		this.addHP=1;
		this.MP=100;
		this.MAXMP=100;
		this.addMP=1;

		this.weapon = {
			"Z":[{name:"shot",vector:{x:0,y:1},power:1,charge:0,chargeTime:30}],
			"C":[{name:"shot",vector:{x:0.2,y:0.8},power:1,charge:0,chargeTime:40},{name:"shot",vector:{x:-0.2,y:0.8},power:1,charge:0,chargeTime:40}],
			"X":[{name:"missile",vector:{x:0,y:1},power:2,charge:0,chargeTime:50}],
			"V":[{name:"laser",vector:{},power:1,charge:0,chargeTime:100}]
		}
		this.skill = {
			"A":{magic:3,charge:0,chargeTime:50,weapon:[{name:"shot",vector:{x:-0.3,y:0.7},power:1},{name:"shot",vector:{x:-0.2,y:0.8},power:1},{name:"shot",vector:{x:-0.1,y:0.9},power:1},{name:"shot",vector:{x:0,y:1},power:1},{name:"shot",vector:{x:0.1,y:0.9},power:1},{name:"shot",vector:{x:0.2,y:0.8},power:1},{name:"shot",vector:{x:0.3,y:0.7},power:1}]},
			"S":{magic:20,charge:0,chargeTime:60,weapon:[{name:"missile",vector:{x:-0.05,y:0.95},power:2},{name:"missile",vector:{x:0,y:1},power:2},{name:"missile",vector:{x:0.05,y:0.95},power:2}]},
			"D":{magic:30,charge:0,chargeTime:100,weapon:[{name:"stanShot",vector:{x:0,y:1}}]},
			"F":{magic:20,charge:0,chargeTime:80,weapon:[{name:"fireMissile",vector:{x:0,y:1}}]},
			"Q":{magic:30,charge:0,chargeTime:100,weapon:[{name:"heal",vector:{x:0,y:0},power:20}]},
			"W":{magic:10,charge:0,chargeTime:200,weapon:[{name:"buff",vector:{x:0,y:0},param:"speed",power:2}]},
			"E":{magic:10,charge:0,chargeTime:200,weapon:[{name:"buff",vector:{x:0,y:0},param:"size",power:2}]},
			"R":{magic:10,charge:0,chargeTime:200,weapon:[{name:"buff",vector:{x:0,y:0},param:"reflect",power:5}]}
		}

		if(team) this.teamColor = "#f00";
		else this.teamColor = "#00f";

		//create mallet
		var mallet = document.createElement("div");
		mallet.style.width = this.size+"px";
		mallet.style.height = this.thickness+"px";
		mallet.style.marginTop = -(this.thickness/2)+"px";
		mallet.style.marginLeft = this.position.x+"px";
		mallet.style.backgroundColor = this.teamColor;
		this.DOM = mallet;
		if(!team){
			this.DOM.style.transform = "rotate(180deg)";
		}

		var hpBar = document.createElement("div");
		hpBar.style.backgroundColor="#0f0";
		this.HPbarDOM = hpBar;
		this.HPbarWidth = 0;
		this.HPbarHeight = 0;

		var mpBar = document.createElement("div");
		mpBar.style.backgroundColor="#05f";
		this.MPbarDOM = mpBar;
		this.MPbarWidth = 0;
		this.MPbarHeight = 0;

		var hpDisplay = document.createElement("div");
		hpDisplay.innerHTML=this.HP+"/"+this.MAXHP;
		this.HPDisplay = hpDisplay;
		this.HPDisplaySize=0;

		var mpDisplay = document.createElement("div");
		mpDisplay.innerHTML=this.MP+"/"+this.MAXMP;
		this.MPDisplay = mpDisplay;
		this.MPDisplaySize=0;
	}

	barFitting(width,height){
		this.HPbarWidth = width;
		this.HPbarHeight = height;
		this.HPbarDOM.style.width = width+"px";
		this.HPbarDOM.style.height = height+"px";
		this.MPbarWidth = width;
		this.MPbarHeight = height;
		this.MPbarDOM.style.width = width+"px";
		this.MPbarDOM.style.height = height+"px";

		this.HPDisplaySize = height;
		this.MPDisplaySize = height;
		this.HPDisplay.style.fontSize = this.HPDisplaySize+"px";
		this.MPDisplay.style.fontSize = this.MPDisplaySize+"px";
	}

	move(direction){
		switch(direction){
			case "left":
				this.position.x-=this.speed;
				if(this.position.x<this.limit.left) this.position.x=this.limit.left;
				break;
			case "right":
				this.position.x+=this.speed;
				if(this.position.x>this.limit.right) this.position.x=this.limit.right;
				break;
			default:
				break;
		}
		this.DOM.style.marginLeft = this.position.x+"px";
	}

	push_(table,puck){
		var area = this.areaScope();
		if(this.team){
			area.top = this.position.y - this.pushHeight; 
			area.bottom = this.position.y;
		}
		else{
			area.top = this.position.y; 
			area.bottom = this.position.y + this.pushHeight;
		}
		if(area.top<puck.core().top&&puck.core().top<area.bottom&&area.left<puck.core().left&&puck.core().left<area.right&&puck.turn===this.team){
			puck.reflect(0,1,this.power);
		}

		if(this.team){
			this.DOM.style.height = this.pushHeight+this.thickness/2+"px";
			this.DOM.style.marginTop = (-this.pushHeight)+"px"
		}
		else{
			this.DOM.style.height = this.pushHeight+this.thickness/2+"px";
		}

		if(this.DOM.children.length!=0){
			this.DOM.children[0].style.marginTop =(this.pushHeight)+"px"
		}


		setTimeout(()=>{
			this.DOM.style.height = this.thickness+"px";
			this.DOM.style.marginTop = -(this.thickness/2)+"px";
			if(this.DOM.children.length!=0){
				this.DOM.children[0].style.marginTop = 0+"px"
			}
		},rule.gameSpeedInterval*5);
	}

	attack(code){
		var weapon=this.weapon[code];
		if(weapon===undefined) {
			var skill = this.skill[code];
			if(skill!==undefined){
				if(this.MP>skill.magic&&skill.charge===0){
					skill.charge = skill.chargeTime;
					this.UsingMP(skill.magic);
					weapon=skill.weapon;
				}
				else weapon=[];
			}
			else{
				weapon=[];	
			}
		}
		return weapon;
	}

	charge(addMPInterval,counter){
		var weapons = Object.keys(this.weapon);
		for(var i=0;i<weapons.length;i++){
			var weapon = this.weapon[weapons[i]];
			for(var j=0;j<weapon.length;j++){
				weapon[j].charge--;
				if(weapon[j].charge<0){
					weapon[j].charge=0;
				}
			}
		}
		var skills = Object.keys(this.skill);
		for(var i=0;i<skills.length;i++){
			var skill = this.skill[skills[i]];
			skill.charge--;
			if(skill.charge<0){
				skill.charge = 0;
			}
		}

		if(counter%addMPInterval===0){
			this.MP+=this.addMP;
			if(this.MP>this.MAXMP) {
				this.MP = this.MAXMP;
				}
			this.HP+=this.addHP;
			if(this.HP>=this.MAXHP) {
				this.HP=this.MAXHP;
			}
			var barLength = (this.MP/this.MAXMP)*this.MPbarWidth;
			this.MPbarDOM.style.width=barLength+"px"; 
			this.MPDisplay.innerHTML = this.MP+"/"+this.MAXMP;
		}
	}

	damage(damage){
		// var flag=false;
		this.HP-=damage;
		if(this.HP<=0) {
			this.HP=0;
			// flag=true;
		}
		this.calcSpeed();
		var barLength = (this.HP/this.MAXHP)*this.HPbarWidth;
		this.HPbarDOM.style.width=barLength+"px"; 
		this.HPDisplay.innerHTML = this.HP+"/"+this.MAXHP;

		var popUpText = document.createElement("b");
		popUpText.style.color = "#f00";
		popUpText.style.height = 20+"px";
		popUpText.style.fontSize = 20+"px";
		popUpText.innerHTML = "-"+damage;
		table.addPopUp(popUpText);

		var popUpDamege = new PopUp({x:this.position.x+this.size/2,y:this.position.y},popUpText);
		autoMoveElements.push(popUpDamege);

		var tmpEffect = effect.effect(2136)
		if(tmpEffect){
			var animate = new Animate({x:this.position.x+this.size/2,y:this.position.y},tmpEffect,0.5);			
			table.addPopUp(animate.DOM);
		}
		// return flag;
	}

	heal(heal){
		this.HP+=heal;
		if(this.HP>=this.MAXHP) {
			this.HP=this.MAXHP;
		}
		this.calcSpeed();
		var barLength = (this.HP/this.MAXHP)*this.HPbarWidth;
		this.HPbarDOM.style.width=barLength+"px"; 
		this.HPDisplay.innerHTML = this.HP+"/"+this.MAXHP;

		var popUpText = document.createElement("b");
		popUpText.style.color = "#0f0";
		popUpText.style.height = 20+"px";
		popUpText.style.fontSize = 20+"px";
		popUpText.innerHTML = heal;
		table.addPopUp(popUpText);
		
		var popUpDamege = new PopUp({x:this.position.x+this.size/2,y:this.position.y},popUpText);
		autoMoveElements.push(popUpDamege);

		var tmpEffect = effect.effect(1107)
		if(tmpEffect){
			var animate = new Animate({x:this.position.x+this.size/2,y:this.position.y},tmpEffect,0.8);			
			table.addPopUp(animate.DOM);
		}
	}

	calcSpeed(){
		this.speed = this.originalSpeed * this.HP / this.MAXHP;
		if(this.state.indexOf("stan")>=0){
			this.speed /= rule.stan;
		}
		if(this.state.indexOf("buffspeed")>=0){
			this.speed *= this.buff.speed;
		}
	}

	changeSize(size){
		var beforeSize = size;
		this.size = this.originalSize;
		if(this.state.indexOf("buffsize")>=0){
			this.size = this.originalSize * 2;
		}

		this.position.x = this.position.x + beforeSize/2 - this.size/2;
		this.limit.right = this.range - this.size;
		if(this.position.x<0){
			this.position.x = 0;
		}
		else if(this.position.x>this.limit.right){
			this.position.x = this.limit.right;
		}
		this.DOM.style.width = this.size + "px";
		this.DOM.style.marginLeft = this.position.x+"px";
		if(this.DOM.children.length!=0){
			this.DOM.children[0].style.marginLeft = ((this.size - this.originalSize)/2)+"px"
		}
	}

	addAbnormalState(state){
		console.log("addAbnormalState")
		if(this.state.indexOf(state)>=0) return;
		this.state.push(state);
		switch(state){
			case "stan":
				this.calcSpeed();
				this.DOM.style.backgroundColor = "#ff0"
				var tmpEffect = effect.effect(2127);
				if(tmpEffect){
					var animate = new Animate({x:this.position.x+this.size/2,y:this.position.y},tmpEffect,1);			
					table.addPopUp(animate.DOM);
				}
				setTimeout(()=>{
					this.state.splice(this.state.indexOf(state),1);
					this.calcSpeed();
					this.DOM.style.backgroundColor = this.teamColor;
					// console.log(this.state)
				},500*rule.gameSpeedInterval)
				break;
			case "fire":
				this.DOM.style.backgroundColor = "#d33"
				for(var i=1;i<6;i++){
					setTimeout(()=>{
						this.damage(2);
					},i*100*rule.gameSpeedInterval)
				}
				setTimeout(()=>{
					this.state.splice(this.state.indexOf(state),1);
					this.DOM.style.backgroundColor = this.teamColor;
				},500*rule.gameSpeedInterval)
			default :
				break;
		}
	}

	addBuffState(param,value){
		if(this.state.indexOf("buff"+param)>=0) return;
		this.state.push("buff"+param);

		var tmpEffect = effect.effect(2121)
		if(tmpEffect){
			var animate = new Animate({x:this.position.x+this.size/2,y:this.position.y},tmpEffect,0.5);			
			table.addPopUp(animate.DOM);
		}
		switch(param){
			case "speed":
				this.buff.speed = value;
				this.calcSpeed();
				this.DOM.style.backgroundColor = "#0f0"
				setTimeout(()=>{
					this.state.splice(this.state.indexOf("buff"+param),1);
					this.calcSpeed();
					this.DOM.style.backgroundColor = this.teamColor;
				},500*rule.gameSpeedInterval)	
				break;	
			case "size":
				this.buff.size = value;
				this.changeSize(this.size);
				this.DOM.style.backgroundColor = "#0f0"
				setTimeout(()=>{
					this.state.splice(this.state.indexOf("buff"+param),1);
					this.changeSize(this.size);
					this.DOM.style.backgroundColor = this.teamColor;
				},500*rule.gameSpeedInterval)	
				break;	
			case "reflect":
				this.buff.reflect = value;
				this.reflectPower += value;
				this.DOM.style.backgroundColor = "#0f0"
				setTimeout(()=>{
					this.state.splice(this.state.indexOf("buff"+param),1);
					this.reflectPower = this.originalReflectPower;
					this.DOM.style.backgroundColor = this.teamColor;
				},500*rule.gameSpeedInterval)	
				break;	
			default :
				break;
		}
	}

	UsingMP(magic){
		// console.log("using mp")
		this.MP-=magic;
		if(this.MP<=0) {
			return false;
		}
		var barLength = (this.MP/this.MAXMP)*this.MPbarWidth;
		this.MPbarDOM.style.width=barLength+"px"; 
		this.MPDisplay.innerHTML = this.MP+"/"+this.MAXMP;
		return true;
	}

	areaScope(){
		var area={
			left:this.position.x,
			right:this.position.x+this.size
		}
		return area;
	}

	center(){
		return this.position.x+this.size/2;
	}
}