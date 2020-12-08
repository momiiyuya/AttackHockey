function importClass() {
if (! new Array().push) return false;
    var scripts = new Array(
        // ファイル名
        // 'test'
    );
    for (var i=0; i<scripts.length; i++) {
        document.write('<script type="text/javascript" src="./class/' +scripts[i] +'.js" charset="utf-8"></script>');
    }
}
function importJS() {
if (! new Array().push) return false;
    var scripts = new Array(
        // ファイル名
        // 'test'
    );
    for (var i=0; i<scripts.length; i++) {
        document.write('<script type="text/javascript" src="./js/' +scripts[i] +'.js" charset="utf-8"></script>');
    }
}
importClass();
importJS();