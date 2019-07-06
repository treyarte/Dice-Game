let min = 1;
let max = 6;
let randomNumber1 = 0;
let randomNumber2 = 0;

//Returns a random number between a range of numbers
function randomNumberGenerator(max, min){

  return Math.floor(Math.random() * (max - min + 1) + min);
}

randomNumber1 = randomNumberGenerator(max, min);
randomNumber2 = randomNumberGenerator(max, min);

//determing the winner
if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerText = "🚩 Player 1 Wins! ";
}else if (randomNumber1 < randomNumber2){
  document.querySelector("h1").innerText = "Player 2 Wins! 🚩";
}else{
  document.querySelector("h1").innerText = "Draw";
}

//changes the image of the players dice to an image matching the randomNumbers
document.querySelector(".img1").setAttribute("src", `images/dice${randomNumber1}.png`);

//changes the image of player2's dice to a dice matching the random number
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");
