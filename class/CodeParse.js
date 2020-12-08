class CodeParse{
	constructor(){
		this.code = {
			"8":"BackSpace",
			"13":"Enter",
			"32":"Space",
			"37":"Left",
			"38":"Up",
			"39":"Right",
			"40":"Down",
			"65":"A",
			"67":"C",
			"68":"D",
			"69":"E",
			"70":"F",
			"81":"Q",
			"82":"R",
			"83":"S",
			"86":"V",
			"87":"W",
			"88":"X",
			"90":"Z"
		}
	}

	parse(code){
		var key = this.code[code+""];
		if(key===undefined){
			key = "Undefined";
		}
		return key;
	}
}