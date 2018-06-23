//-------Variables------------//
var wins = 0;
var losses = 0;
var computerNumber = (Math.floor(Math.random * (120 - 19)) + 19);
// var myCrystals = [src="../images/red_cry.jpg"]
$("#computernumber").text(computerNumber);
$("#wins").text(wins);
$("#losses").text(losses);
console.log(computerNumber);
var score = 0;
$("#score").text("Score: " + score);
var cry1 = (Math.floor(Math.random * (1 - 12)) + 1);
var cry2 = (Math.floor(Math.random * (1 - 12)) + 1);
var cry3 = (Math.floor(Math.random * (1 - 12)) + 1);
var cry4 = (Math.floor(Math.random * (1 - 12)) + 1);

console.log(cry1);
console.log(cry2);
console.log(cry3);
console.log(cry4);


// start game
generateVariables = false;
if (generateVariables) {
  break;
}
else {
  generateVariables = true;
  restart();
}
//-------Functions----------//

// function createCrystals() {
//   for (var i = 0; i < 4; i++) {
//     $("#crystals").append(
//       `<img class="crystal" src=${myCrystals[i]}>`
//     )
//   }
// }

function restart() {

  ComputerNumber = Math.floor(Math.random() * (120 - 19)) + 19;
  $("#computernumber").text("Number to reach: " + computerNumber);
  Cry1 = Math.floor(Math.random() * (1 - 12)) + 1;
  Cry2 = Math.floor(Math.random() * (1 - 12)) + 1;
  Cry3 = Math.floor(Math.random() * (1 - 12)) + 1;
  Cry4 = Math.floor(Math.random() * (1 - 12)) + 1;
  score = 0;
  $("#score").text("Score: " + score);
  generateVariables = false;
  createCrystals();

}

function win() {
  alert("You Win!!!");
  wins++;
  $("#wins").text("Wins: " + wins);
  restart();

}

function lose() {
  alert("You Lose!!!");
  losses--;
  $("#losses").text("Losses: " + losses);
  restart();

}

// ----------Events------------//



$('#cry1').on('click', function () {
  score = score + cry1;

  $('score').text("Score: " + score);

  if (score == computerNumber) {
    win();
  }
  else if (score > computerNumber) {
    lose();
  }
});

$('#cry2').on('click', function () {
  score = score + cry2;

  $('#score').text("Score: " + score);

  if (score == computerNumber) {
    win();
  }
  else if (score > computerNumber) {
    lose();
  }
});

$('#cry3').on('click', function () {
  score = score + cry3;

  $('#score').text("Score: " + score);

  if (score == computerNumber) {
    win();
  }
  else if (score > computerNumber) {
    lose();
  }
});

$('#cry4').on('click', function () {
  score = score + cry4;

  $('#score').text("Score: " + score);

  if (score == computerNumber) {
    win();
  }
  else if (score > computerNumber) {
    lose();
  }
});  