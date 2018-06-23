
//-------Variables------------//
window.wins = 0;
window.losses = 0;
window.computerNumber = 0;
window.score = 0;
window.cry1 = 0;
window.cry2 = 0;
window.cry3 = 0;
window.cry4 = 0;

$(document).ready(function (e) {
  
  restart();

  function restart() {

    window.computerNumber = getRandomNumber(19,120);
    window.cry1 = getRandomNumber(1,12);
    window.cry2 = getRandomNumber(1,12);
    window.cry3 = getRandomNumber(1,12);
    window.cry4 = getRandomNumber(1,12);
    window.score = 0;


    console.log(window.cry1);
    console.log(window.cry2);
    console.log(window.cry3);
    console.log(window.cry4);
    console.log(window.computerNumber);

    updateHtml();

  }

  function win() {
    alert("You Win!!!");
    window.wins++;
    $("#wins").text("Wins: " + wins);
    restart();

  }

  function lose() {
    alert("You Lose!!!");
    window.losses++;
    $("#losses").text("Losses: " + losses);
    restart();

  }

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function updateHtml () {
    // var myCrystals = [src="../images/red_cry.jpg"]
    $("#computernumber").text("Number to reach: " + window.computerNumber);
    $("#wins").text("Wins: " + window.wins);
    $("#losses").text("Losses: " + window.losses);
    $("#score").text("Score: " + window.score);
  }

  // ----------Events------------//



  $('#cry1, #cry2, #cry3, #cry4').on('click', function () {

    var thisID = $(this).attr("id");
    var point = 0;

    

    switch(thisID) {
      case "cry1":
        point = window.cry1;
        break;
      case "cry2":
        point = window.cry2;
        break;
      case "cry3":
        point = window.cry3;
        break;
      case "cry4":
        point = window.cry4;
        break;
      default:
        point = 0;
    }

    window.score += point;
    $(this).html(point);

    $('score').text("Score: " + window.score);

    updateHtml();

    if (window.score == window.computerNumber) {
      win();
    }
    else if (window.score > window.computerNumber) {
      lose();
    }
  });

});