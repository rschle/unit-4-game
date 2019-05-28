$(document).ready(function () {
    //random number generated when the page is loaded
    var random = Math.floor(Math.random() * 101) + 19;
    $("#random-number").text(random)
    //making initial variables for total score, wins, and losses
    var totalScore = 0;
    var wins = 0;
    var losses = 0;


    $("#winCount").text(wins);
    $("#lossCount").text(losses);

    function setGems() {
        var rubyNum = Math.floor(Math.random() * 12) + 1;
        console.log(rubyNum);
        var blueNum = Math.floor(Math.random() * 12) + 1;
        console.log(blueNum);
        var emeraldNum = Math.floor(Math.random() * 12) + 1;
        console.log(emeraldNum);
        var purpleNum = Math.floor(Math.random() * 12) + 1;
        console.log(purpleNum);
        $("#ruby-gem").attr("data-value", rubyNum);
        $("#blue-gem").attr("data-value", blueNum);
        $("#purple-gem").attr("data-value", purpleNum);
        $("#emerald-gem").attr("data-value", emeraldNum);
    }

    setGems();


    $(".gem").on("click", function () {
        console.log("I've been clicked!");
        var gemVal = parseInt($(this).attr("data-value"));
        console.log(gemVal);
        $("#streakAlert").text("");
        totalScore = totalScore + gemVal;
        $("#totalScore").text(totalScore);
        if (totalScore == random) {
            wins++;
            $("#winCount").text(wins);
            console.log(wins);
            $("#streakAlert").text("You won!!");
            totalScore = 0;
            $("#totalScore").text(totalScore);
            random = Math.floor(Math.random() * 101) + 19;
            $("#random-number").text(random);
            setGems();
        }
        else if (totalScore > random) {
            losses++;
            $("#lossCount").text(losses);
            console.log(losses);
            $("#streakAlert").text("You lost!!");
            totalScore = 0;
            $("#totalScore").text(totalScore);
            random = Math.floor(Math.random() * 101) + 19;
            $("#random-number").text(random);
            setGems();
        }
    });

});