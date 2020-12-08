var derectionFlag={
	"Up":false,
	"left": false,
	"right":false
}

var weaponFlag = new Object();
var oneWeaponFlag = null;

var playerMallet = malletT;
document.onkeydown = (e)=>{
	if(!e) e = window.event; // レガシー



	// ------------------------------------------------------------
	// 入力情報を取得
	// ------------------------------------------------------------
	// キーコード
	var key_code = codeParse.parse(e.keyCode);

	// ------------------------------------------------------------
	// 出力テスト
	// ------------------------------------------------------------
	// console.log("code:" + key_code);
	if(key_code==="BackSpace") location.reload();

	if(rule.end){
		return;
	}

	if(!rule.start||rule.pause){
		if(key_code==="Enter"&&!rule.start){
			rule.reverseStart();
			game_main();
		}
		if(key_code==="Space"&&rule.pause){
			rule.reversePause();
			game_main();
		}
		return;
	}


	switch(key_code){
		case "Up":
			// console.log("↑キー down");
			if (!derectionFlag["Up"]) {
				derectionFlag["Up"] = true;
				playerMallet.push_(table,puck);
			}
			break;
		case "Down":
			if (!derectionFlag["Up"]) {
				derectionFlag["Up"] = true;
				playerMallet.push_(table,puck);
			}
			// console.log("↓キー down");
			break;
		case "Right":
			// console.log("→キー down");
			// malletT.move("right");
			if (!derectionFlag["right"]) {
				derectionFlag["right"] = true;
				playerMove("right");
			}
			break;
		case "Left":
			// console.log("←キー down");
			if (!derectionFlag["left"]) {
				derectionFlag["left"] = true;
				playerMove("left");
			}
			break;
		case "Space":
			// console.log("Spaseキー down");
			derectionFlag["right"] = false;
			derectionFlag["left"] = false;
			rule.reversePause();
			break;
		case "Enter":
			// console.log("Enterキー down");
			break;
		default:
			console.log("その他キー down :"+key_code);
			if(rule.rule==="oneWeapon"){
				if(oneWeaponFlag===null){
					oneWeaponFlag = key_code;
					playerAttack(key_code);
				}
			}
			else if(weaponFlag[key_code] === undefined ||weaponFlag[key_code] === false){
				// console.log(weaponFlag[key_code])
				weaponFlag[key_code]=true;
				playerAttack(key_code);
			}
			break;
	}
};

document.onkeyup = (e)=>{
	if(!e) e = window.event; // レガシー

	// ------------------------------------------------------------
	// 入力情報を取得
	// ------------------------------------------------------------
	// キーコード
	var key_code = codeParse.parse(e.keyCode);
	// ------------------------------------------------------------
	// 出力テスト
	// ------------------------------------------------------------
	// console.log("code:" + key_code);

	switch(key_code){
		case "Up":
			derectionFlag["Up"] = false;
			// console.log("↑キー up");
			break;
		case "Down":
			derectionFlag["Up"] = false;
			// console.log("↓キー up");
			break;
		case "Right":
			// console.log("→キー up");
			derectionFlag["right"] = false;
			break;
		case "Left":
			// console.log("←キー up");
			derectionFlag["left"] = false;
			break;
		case "Enter":
			// console.log("Enterキー up");
			break;
		case "BackSpace":
			// console.log("BackSpaceキー up");
			break;
		default:
			// console.log("未登録キー up");
				weaponFlag[key_code]=false;
				oneWeaponFlag = null;
			break;
	}
}

playerMove = (derection)=>{
	if(derectionFlag[derection]){
		playerMallet.move(derection);
		setTimeout(()=>{
			playerMove(derection);
		},rule.gameSpeedInterval);
	}
}

playerAttack = (code)=>{
	if(rule.rule==="oneWeapon"){
		if(oneWeaponFlag===code){
			var weapons = playerMallet.attack(code);
			attack(playerMallet,table,weapons);
			setTimeout(()=>{
				playerAttack(code);
			},rule.gameSpeedInterval);
		}
	}
	else if(weaponFlag[code]){
		var weapons = playerMallet.attack(code);
		attack(playerMallet,table,weapons);
		setTimeout(()=>{
			playerAttack(code);
		},rule.gameSpeedInterval);
	}
}