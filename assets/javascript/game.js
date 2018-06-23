//-------Variables------------//
var wins = 0;
var losses = 0;
var computerNumber = (Math.floor(Math.random * 101) +19;
$("#computernumber").text(computerNumber);
$("#wins").html(wins);
$("#losses").html(loses);
console.log(computerNumber);
var score = 0;
$("#score").text(score);

var cry1 = (Math.floor(Math.random * 111) +1);
var cry2 = (Math.floor(Math.random * 111) +1);
var cry3 = (Math.floor(Math.random * 111) +1);
var cry4 = (Math.floor(Math.random * 111) +1);

console.log(cry1);
console.log(cry2);
console.log(cry3);
console.log(cry4);


//-------Functions----------//

function restart() {

    ComputerNumber = Math.floor(Math.random() * 101) + 19;
    $("#computernumber").text(computerNumber);
    Cry1 = Math.floor(Math.random() * 11) + 1;
    Cry2 = Math.floor(Math.random() * 11) + 1;
    Cry3 = Math.floor(Math.random() * 11) + 1;
    Cry4 = Math.floor(Math.random() * 11) + 1;
    score = 0;
    $("#score").text(score);
    
    }

function win() {
    alert ("You Win!!!");
    wins ++;
    $("#wins").text(wins);
    restart();

}    

function lose() {
    alert ("You Lose!!!");
    losses --;
    $("#losses").text(loses);
    restart();

}
    
// ----------Events------------//

$('#cry1').on ('click', function(){
    score = score + cry1;
    
    $('#curScore').text(score); 
          
        if (score == computerNumber){
          win();
        }
        else if (score > computerNumber){
          lose();
        }   
  });  

$('#cry2').on ('click', function(){
    score = score + cry2;
    
    $('#curScore').text(score); 
         
        if (score == computerNumber){
          win();
        }
        else if (score > computerNumber){
          lose();
        }   
  });  

$('#cry3').on ('click', function(){
    score = score + cry3;
    
    $('#curScore').text(score); 
          
        if (score == computerNumber){
          win();
        }
        else if (score > computerNumber){
          lose();
        }   
  });  

$('#cry4').on ('click', function(){
    score = score + cry4;
    
    $('#curScore').text(score); 
         
        if (score == computerNumber){
          win();
        }
        else if (score > computerNumber){
          lose();
        }   
  });  