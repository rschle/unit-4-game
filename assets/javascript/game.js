$(document).ready(function(){
//random number generated when the page is loaded
    var random = Math.floor(Math.random() * 101) + 19;
    $("#random-number").text(random);
//want to generate random numbers in the 1-12 range for each of the crystals
   var rubyNum = Math.floor(Math.random() * 11) + 1;
   var blueNum =  Math.floor(Math.random() * 11) + 1;
   var emeraldNum =  Math.floor(Math.random() * 11) + 1;
   var purpleNum =  Math.floor(Math.random() * 11) + 1;

//making initial variables for total score, wins, and losses
   var totalScore = 0;
   $("#totalScore").text(0);

   var winCount = 0;
   var lossCount = 0;

 

//adding click triggers for gems 
//ruby gem
$("#ruby-gem").on("click", function(){
    totalScore = totalScore + rubyNum;
    $("#totalScore").text(totalScore);
})
$("#blue-gem").on("click", function(){
    totalScore = totalScore + blueNum;
    $("#totalScore").text(totalScore);
})

$("#purple-gem").on("click", function(){
    totalScore = totalScore + purpleNum;
    $("#totalScore").text(totalScore);
})

$("#emerald-gem").on("click", function(){
    totalScore = totalScore + emeraldNum;
    $("#totalScore").text(totalScore);
})

})