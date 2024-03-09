var randomNum1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNum1 + ".png";
var randomImagesource = "Images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src" , randomImagesource);

var randomNum2 = Math.floor(Math.random() * 6)+1;
var randomImagesource2 = "Images/dice" + randomNum2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src" , randomImagesource2);

if(randomNum1 > randomNum2)
{
    document.querySelector("h1").innerHTML = "Player 1 wins! &#128515;";
}
else if(randomNum1 < randomNum2)
{
    document.querySelector("h1").innerHTML = "Player 2 wins! &#128515;";
}
else
{
    document.querySelector("h1").innerHTML = "Draw!";
}