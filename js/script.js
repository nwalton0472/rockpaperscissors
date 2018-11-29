// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */

// DOCUMENT READY FUNCTION BELOW
var userChoice = "";
var computerChoice = "";
var winner = "";
var randomNumber = 0;

$("#shoot").click(function(){
    userChoice = $("#input").val();
    randomNumber = Math.random();
    $("#userChoice").text(userChoice);
    
    console.log();
    if (randomNumber < .333){
    computerChoice = "rock"
    $("#computerChoice").text(computerChoice);
    }
  else if (randomNumber < .666) {
      userChoice = "paper"
      $("#userChoice").text(userChoice);
  } else {
        computerChoice = "siccors"
        $("#computerChoice").text(computerChoice);
    }
});



