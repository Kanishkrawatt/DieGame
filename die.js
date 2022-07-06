var randomval1 = Math.floor(Math.random()*6+1)
var path = "images/dice"+randomval1+".png";
document.getElementsByTagName("img")[0].setAttribute("src",path);

var randomval2 = Math.floor(Math.random()*6+1)
var path2 = "images/dice"+randomval2+".png";
document.getElementsByTagName("img")[1].setAttribute("src",path2);
var result = document.getElementsByTagName("h1")[0];
if(randomval1>randomval2){
    result.innerHTML = "P1 win"
}
else if(randomval1<randomval2){
    result.innerHTML = "P2 win"
}

else if(randomval1=randomval2){
    result.innerHTML = "Draw"

}