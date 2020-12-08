var body = document.getElementsByTagName('body')[0];
var codeParse = new CodeParse()
var rule = new Rule();
// console.log(rule)
var effect = new Effect();
var table = new Table(rule.tableSize.width,rule.tableSize.height);
var status_ = new Status(table.width/2,table.height);
var malletT = new White(table.width,true);
var malletF = new Black(table.width,false);
var puck = new Puck(table.width,table.height)

var autoMoveElements = new Array();
// var popUp = new Array();

var comMallet = malletF
// var comT = new COM(malletT);
var comF = new COM(comMallet);

game_init=()=>{
	return new Promise((resolve,reject)=>{
		body.appendChild(status_.DOM);
		malletT.barFitting(status_.barWidth,status_.barHeight)
		malletF.barFitting(status_.barWidth,status_.barHeight)
		status_.init(malletT,malletF);
		body.appendChild(table.DOM);
		table.init(malletT.DOM,malletF.DOM,puck.DOM);
		autoMoveElements.push(puck);	
		// console.log("init")
		resolve("OK");	
	});
}


var counter=0;
game_main=()=>{
	if(rule.pause||!rule.start){
		return;
	}

	counter++;
	for(var i=0;i<autoMoveElements.length;i++){
		// console.log(autoMoveElements[0]);
		var flag = autoMoveElements[i].move();

		var flag2 = autoMoveElements[i].collisionDetection(table,malletT,malletF);
		if(flag=="win"||flag2=="win") {
			console.log("win")
			rule.reverseEnd();
			status_.winnerDOM.innerHTML = "WIN";
			return;
		} 
		if(flag=="lose"||flag2=="lose"){
			rule.reverseEnd();
			console.log("lose");
			status_.winnerDOM.innerHTML = "LOSE";
			return;	
		} 
		if(flag=="delete"||flag2=="delete"){
			// console.log(autoMoveElements[i].DOM.parentNode)
			autoMoveElements[i].DOM.parentNode.removeChild(autoMoveElements[i].DOM);
			autoMoveElements.splice(i,1);
			// console.log(autoMoveElements)
			i--;
			continue;
		}

	}
	// console.log(autoMoveElements);

	// console.log("game_main:"+counter);

	//COM move
	if(counter%comF.interval===0){//難易度
		comF.play(autoMoveElements,comMallet);
	// console.log("game_main:"+counter);
	}

	//COM attack
	if(counter%comF.attackInterval===0){//難易度
		attack(comMallet,table,comF.attack(comMallet))
	// console.log("game_main:"+counter);
	}
		//COM skill
	if(counter%comF.skillInterval===0){//難易度
		attack(comMallet,table,comF.skill(comMallet))
	// console.log("game_main:"+counter);
	}

	//puck accele
	if(counter%rule.accelerationInterval===0){
		puck.originalSpeed+=rule.acceleration;
		// console.log("speed up"+puck.originalSpeed)
	}

	//charge
	malletT.charge(rule.addMPInterval,counter);
	malletF.charge(rule.addMPInterval,counter);


	// console.log("game_main:"+counter);
	// if(counter>100) return;

	setTimeout(()=>{
		game_main();	
	},rule.gameSpeedInterval)
}

async function init(){
	var test = await game_init();
}

var _imgArray = ["missile.png","shot.png","laser.png","bom.png","backgroundImage1.jpg"];
function loopImageLoader(i){
  var image1 = new Image();
  image1.src = "./img/"+_imgArray[i];
  image1.onload = function(){
    i++;
    if(_imgArray.length != i){
      //alert("nextnum : " + i);//debug
      loopImageLoader(i);
    }
  }
}
loopImageLoader(0);
var _imgArray2 = ["plane_white.png","plane_black.png"];
function loopImageLoader2(i){
  var image1 = new Image();
  image1.src = "./img/plane/"+_imgArray2[i];
  image1.onload = function(){
    i++;
    if(_imgArray2.length != i){
      //alert("nextnum : " + i);//debug
      loopImageLoader2(i);
    }
  }
}
loopImageLoader2(0);
var _imgArray3 = ["07","10","16"];
function loopImageLoader3(i){
  var image1 = new Image();
  image1.src = "./img/animation/anime1/320240/pipo-btleffect0"+_imgArray3[i]+".png";
  image1.onload = function(){
    i++;
    if(_imgArray3.length != i){
      //alert("nextnum : " + i);//debug
      loopImageLoader3(i);
    }
  }
}
loopImageLoader3(0);
var _imgArray4 = ["21","27","36"];
function loopImageLoader4(i){
  var image1 = new Image();
  image1.src = "./img/animation/anime2/320240/pipo-btleffect0"+_imgArray4[i]+".png";
  image1.onload = function(){
    i++;
    if(_imgArray4.length != i){
      //alert("nextnum : " + i);//debug
      loopImageLoader4(i);
    }
  }
}
loopImageLoader4(0);

calculate_cosine = function (y,x) { 
	if (y<0) {
		return [-y / Math.sqrt(x*x + y*y),x];
	}
	return [y / Math.sqrt(x*x + y*y),x]; 
};
calculate_radian = function (cos) {
	if(cos[1]<0){
		return -Math.acos(cos[0]) / (Math.PI / 180)
	}
 	return Math.acos(cos[0]) / (Math.PI / 180); 
};
body.background="./img/backgroundImage1.jpg";
body.style.backgroundSize="cover";

window.onload = ()=>{
	init();
}