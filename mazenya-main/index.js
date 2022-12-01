var randomNumber1=Math.floor(Math.random()*6)+1;
var imgRandomNumber="images/dice" + randomNumber1 +".png";
document.querySelector("img").setAttribute("src", imgRandomNumber);

var randomNumber2=Math.floor(Math.random()*6)+1;
var imgRandomNumber="images/dice" + randomNumber2 +".png";
document.getElementsByTagName('img')[1].setAttribute("src", imgRandomNumber);


if (randomNumber1>randomNumber2){
  document.getElementById("mbeya").innerText="Brighton wins!";
}
 else if (randomNumber2>randomNumber1){
  document.getElementById("mbeya").innerText="Munashe wins!";
} else{
  document.getElementById("mbeya").innerText="Draw!";
}
