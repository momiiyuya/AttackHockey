
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