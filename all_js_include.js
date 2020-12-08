function importClass() {
if (! new Array().push) return false;
    var scripts = new Array(
        // ファイル名
        "CodeParse",
        "Rule",
        "TableObject",
        "Effect",
        "PopUp",
        "Animate",
        "Mallet",
        "Puck",
        "Table",
        "Status",
        "COM"
    );
    for (var i=0; i<scripts.length; i++) {
        document.write('<script type="text/javascript" src="./class/' +scripts[i] +'.js" charset="utf-8"></script>');
    }
}
function importWeapon() {
if (! new Array().push) return false;
    var scripts = new Array(
        // ファイル名
        "Shot",
        "StanShot",
        "Missile",
        "FireMissile",
        "Laser",
        "Heal",
        "Buff"
    );
    for (var i=0; i<scripts.length; i++) {
        document.write('<script type="text/javascript" src="./class/weapon/' +scripts[i] +'.js" charset="utf-8"></script>');
    }
}
function importPlane() {
if (! new Array().push) return false;
    var scripts = new Array(
        // ファイル名
        "White",
        "Black"
    );
    for (var i=0; i<scripts.length; i++) {
        document.write('<script type="text/javascript" src="./class/plane/' +scripts[i] +'.js" charset="utf-8"></script>');
    }
}
function importJS() {
if (! new Array().push) return false;
    var scripts = new Array(
        // ファイル名
        "imgLoad",
        "index",
        "renderer",
        "attack",
        "keyboard"
    );
    for (var i=0; i<scripts.length; i++) {
        document.write('<script type="text/javascript" src="./js/' +scripts[i] +'.js" charset="utf-8"></script>');
    }
}
importClass();
importWeapon();
importPlane();
importJS();