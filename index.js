
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImage1 = "dice" + randomNumber1 + ".png";
var randomImageSource1 = randomImage1;

var randomImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = randomImage2;


document.querySelector(".img1").setAttribute("src" , randomImageSource1);
document.querySelector(".img2").setAttribute("src" , randomImageSource2);

if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 wins 🚩";
}

else if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins 🚩";
} 

else{
    document.querySelector("h1").innerHTML = "DRAW!!";

}
