$(document).ready(function(){
//random number generated when the page is loaded
    var random = Math.floor(Math.random() * 101) + 19;
    $("#random-number").text(random);
//want to generate random numbers in the 1-12 range for each of the crystals
   var rubyNum = Math.floor(Math.random() * 12) + 1;
   console.log(rubyNum);
   var blueNum =  Math.floor(Math.random() * 12) + 1;
   console.log(blueNum);
   var emeraldNum =  Math.floor(Math.random() * 12) + 1;
   console.log(emeraldNum);
   var purpleNum =  Math.floor(Math.random() * 12) + 1;
   console.log(purpleNum);

//making initial variables for total score, wins, and losses
   var totalScore = 0;
   var wins = 0;
   var losses = 0;

   
   $("#winCount").text(wins);
   $("#lossCount").text(losses);



   
//adding click triggers for gems 
//ruby gem
$("#ruby-gem").on("click", function(){
    totalScore = totalScore + rubyNum;
    $("#totalScore").text(totalScore);
    console.log(totalScore);
    if(totalScore == random){
        wins++;
        $("#winCount").text(wins);
        console.log(wins);
        $("#streak-section").prepend("You won!!");
        totalScore = 0;
        $("#totalScore").text(totalScore);
        } 
    else if(totalScore > random){
        losses++;
        $("#lossCount").text(losses);
        console.log(losses);
        $("#streak-section").prepend("You lost!!");
        totalScore = 0;
        $("#totalScore").text(totalScore);
        }
})
$("#blue-gem").on("click", function(){
    totalScore = totalScore + blueNum;
    $("#totalScore").text(totalScore);
    if(totalScore == random){
        wins++;
        $("#winCount").text(wins);
        console.log(wins);
        $("#streak-section").prepend("You won!!");
        totalScore = 0;
        $("#totalScore").text(totalScore);
        }
    else if(totalScore > random){
        losses++;
        $("#lossCount").text(losses);
        console.log(losses);
        $("#streak-section").prepend("You lost!!");
        totalScore = 0;
        $("#totalScore").text(totalScore);
        }
})

$("#purple-gem").on("click", function(){
    totalScore = totalScore + purpleNum;
    $("#totalScore").text(totalScore);
    if(totalScore == random){
        wins++;
        $("#winCount").text(wins);
        console.log(wins);
        $("#streak-section").prepend("You won!!");
        totalScore = 0;
        $("#totalScore").text(totalScore);
        }
    else if(totalScore > random){
        losses++;
        $("#lossCount").text(losses);
        console.log(losses);
        $("#streak-section").prepend("You lost!!");
        totalScore = 0;
        $("#totalScore").text(totalScore);
        }
})

$("#emerald-gem").on("click", function(){
    totalScore = totalScore + emeraldNum;
    $("#totalScore").text(totalScore);
    if(totalScore == random){
        wins++;
        $("#winCount").text(wins);
        console.log(wins);
        $("#streak-section").prepend("You won!!");
        totalScore = 0;
        $("#totalScore").text(totalScore);
        }
    else if(totalScore > random){
        losses++;
        $("#lossCount").text(losses);
        console.log(losses);
        $("#streak-section").prepend("You lost!!");
        totalScore = 0;
        $("#totalScore").text(totalScore);
        }
})

})