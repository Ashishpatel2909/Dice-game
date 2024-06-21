var randomNumber = Math.floor(Math.random() * 6) + 1;
var randomSourceImage = "dice" + randomNumber + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomSourceImage);

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomSourceImage = "dice" + randomNumber1 + ".png"
document.querySelectorAll("img")[1].setAttribute("src", randomSourceImage);

if(randomNumber > randomNumber1) {
    document.querySelector("h1").innerHTML = " BOY  IS WINNER ";

} else if(randomNumber1 > randomNumber) {
    document.querySelector("h1").innerHTML = " GIRL  IS WINNER ";

} else{
    document.querySelector("h1").innerHTML = " IT'S DRAW "
}