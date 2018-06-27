$(document).ready(function() {

//Variables, gets a random number on reload
var crystalOneNumber = getCrystalNumber();
var crystalTwoNumber = getCrystalNumber();
var crystalThreeNumber = getCrystalNumber();
var crystalFourNumber = getCrystalNumber();

//Computer and user numbers
var computerNumber = getComputerNumber();
var currentUserNumber = 0;

//Score keeping
var userWins = 0;
var userLosses = 0;

//Making selectors into variables
var userArea = $(".userArea");
var computerArea = $(".computerArea");
var recordKeeping = $(".recordKeeping");
var lastGameReport = $(".lastGameReport");
var crystalOne = $(".crystalOne");
var crystalTwo = $(".crystalTwo");
var crystalThree = $(".crystalThree");
var crystalFour = $(".crystalFour");

//Hey dummy, are the numbers working?
console.log(crystalOneNumber);
console.log(crystalTwoNumber);
console.log(crystalThreeNumber);
console.log(crystalFourNumber);
console.log(computerNumber);

//This gets a random number for a crystal
function getCrystalNumber() {
    return Math.floor(Math.random() * 15);
}

//This will reset and start the game board
function resetGame() {

    //Hide the crystal values
    $(".crystalOneInfo").hide()
    $(".crystalTwoInfo").hide()
    $(".crystalThreeInfo").hide()
    $(".crystalFourInfo").hide()

    //Reset crystals
    crystalOneNumber = Math.floor(Math.random() * 10);
    crystalTwoNumber = Math.floor(Math.random() * 10);
    crystalThreeNumber = Math.floor(Math.random() * 10);
    crystalFourNumber = Math.floor(Math.random() * 10);

    //Set the crystal values while still hidden
    $(".crystalOneInfo").text(crystalOneNumber);
    $(".crystalTwoInfo").text(crystalTwoNumber);
    $(".crystalThreeInfo").text(crystalThreeNumber);
    $(".crystalFourInfo").text(crystalFourNumber);

    //What numbers did these gems get?
    console.log(crystalOneNumber);
    console.log(crystalTwoNumber);
    console.log(crystalThreeNumber);
    console.log(crystalFourNumber);

    //Reset computer and user numbers
    computerNumber = Math.floor(Math.random() * 100);
    console.log(computerNumber);
    currentUserNumber = 0;

    //Reset information area!
    userArea.text("Your current number is " + currentUserNumber);
    computerArea.text("Try to reach this number! Don't go over or you'll lose! " + computerNumber);
    recordKeeping.html("<p>Wins: " + userWins + "</p><p>Losses: " + userLosses);
}

//This will get a random computer number for the user to meet
function getComputerNumber(){
    let randomNumberCheck = Math.floor(Math.random() * 100);
    if (randomNumberCheck < 10) {
        return randomNumberCheck + 15;
    } else{
        return randomNumberCheck;
    }
}

//This will render the first game
function gameRender() {

    //Give the crystal info their numbers
    $(".crystalOneInfo").text(crystalOneNumber);
    $(".crystalTwoInfo").text(crystalTwoNumber);
    $(".crystalThreeInfo").text(crystalThreeNumber);
    $(".crystalFourInfo").text(crystalFourNumber);

    userArea.text("Your current number is " + currentUserNumber);
    computerArea.text("Try to reach this number! Don't go over or you'll lose! " + computerNumber);
    recordKeeping.html("<p>Wins: " + userWins + "</p><p>Losses: " + userLosses);
}

//Did the user win or lose?
function winCheck() {

    //User loses
    if (currentUserNumber > computerNumber){
        userLosses++;
        lastGameReport.text("I am sorry to inform you that you went over the number! :(")
        resetGame();
    } 
    
    //User wins
    else if(currentUserNumber === computerNumber){
        lastGameReport.text("Winner winner chicken dinner! :)")
        userWins++;
        resetGame();
    }
}

//When user clicks on a crystal, do these things currentUserNumber += crystalClickedNumber
crystalOne.on("click", function(e) {

    //Show the value of this crystal
    $(".crystalOneInfo").show();

    //Add this crystals number to the current number
    currentUserNumber += crystalOneNumber;

    //Update current number
    userArea.text("Your current number is " + currentUserNumber);

    //Did the user win or lose?
    winCheck();
});


//////////////////////////////SEEE FIRST BUTTON
crystalTwo.on("click", function(e) {
    $(".crystalTwoInfo").show();
    currentUserNumber += crystalTwoNumber;
    userArea.text("Your current number is " + currentUserNumber);
    winCheck();
});

crystalThree.on("click", function(e) {
    $(".crystalThreeInfo").show();
    currentUserNumber += crystalThreeNumber;
    userArea.text("Your current number is " + currentUserNumber);
    winCheck();
});

crystalFour.on("click", function(e) {
    $(".crystalFourInfo").show();
    currentUserNumber += crystalFourNumber;
    userArea.text("Your current number is " + currentUserNumber);
    winCheck();
});

//Initial game render
gameRender();
});