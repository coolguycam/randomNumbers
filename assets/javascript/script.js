$(document).ready(function() {

// var answer = 3;
// var btnArr = [0, 1, 2];
var score = 0;
var wins = 0;
var losses = 0;

var firstbtn = parseInt(Math.floor(Math.random() * 3));
var secondbtn = parseInt(Math.floor(Math.random() * 3));
var thirdbtn = parseInt(Math.floor(Math.random() * 3));
var fourthbtn = parseInt(Math.floor(Math.random() * 3));

var firstbool = true;
var secondbool = true;
var thirdbool = true;
var fourthbool = true;

$("#wins").text(wins);
$("#losses").text(losses);
$("#score").text(score);

function initGame () {

    score = 0;
    var firstbool = true;
    var secondbool = true;
    var thirdbool = true;
    var fourthbool = true;
    var firstbtn = parseInt(Math.floor(Math.random() * 3));
    var secondbtn = parseInt(Math.floor(Math.random() * 3));
    var thirdbtn = parseInt(Math.floor(Math.random() * 3));
    var fourthbtn = parseInt(Math.floor(Math.random() * 3));
    $("#score").html(score);
    // $("#firstbtn").attr("value", btnArr[Math.floor(Math.random() * 3)]);
    // $("#secondbtn").attr("value", btnArr[Math.floor(Math.random() * 3)]);
    // $("#thirdbtn").attr("value", btnArr[Math.floor(Math.random() * 3)]);
    // $("#fourthbtn").attr("value", btnArr[Math.floor(Math.random() * 3)]);
    // console.log($("#fourthbtn").attr("val", btnArr[Math.floor(Math.random() * 3)]));
    // console.log($("#thirdbtn").attr("val", btnArr[Math.floor(Math.random() * 3)]));
    // console.log($("#secondbtn").attr("val", btnArr[Math.floor(Math.random() * 3)]));
    // console.log($("#firstbtn").attr("val", btnArr[Math.floor(Math.random() * 3)]));
};

function isWin () {

    if (score == 3) {
    wins++;
    $("#wins").text(wins);
    console.log(wins);
    initGame();
    }

    if (score > 3 || !firstbool && !secondbool && !thirdbool && !fourthbool) {
    losses++;
    $("#losses").text(losses);
    console.log(losses);
    initGame();
    }

    
}

$("#firstbtn").on("click", function() {
    if (firstbool) {
    score += firstbtn;
    console.log(score);
    $("#score").text(score);
    firstbool = false;
    isWin();
    }

});

$("#secondbtn").on("click", function() {
    if (secondbool){
    score += secondbtn;
    console.log(score);
    $("#score").text(score);
    secondbool = false;
    isWin();
    }
});

$("#thirdbtn").on("click", function() {
    if (thirdbool){
    score += thirdbtn;
    console.log(score);
    $("#score").text(score);
    thirdbool = false;
    isWin();
    }
});

$("#fourthbtn").on("click", function() {
    if (fourthbool) {
    score += fourthbtn;
    console.log(score);
    $("#score").text(score);
    fourthbool = false;
    isWin();
    }
});


});