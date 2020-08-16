//$(".green").click(function(){
//  var obj = document.createElement("audio");
//      obj.src = "sounds/green.mp3";
//      obj.play(); });
//      $(".btn").click(function(){
//        $(".btn").addClass("brown");
//        });
//$("btn").click(function(){
//  audio.play("sounds/green.mp3");
//});
//$(".btn").click(function(){
//  var randomNumber = Math.floor(4 * Math.random());
//                          });

var buttonColors = ["red", "blue","green","yellow"];
var userClickedPattern = [];
var gamePattern = [];
var start = false;
var level = 0;

  $("h1").click(function(){
    if (!start){
    start = true;
    nextSequence();
}
});

//console.log($("document"));
function nextSequence(){
  userClickedPattern = [];
  var randomNumber =  Math.floor(4 * Math.random());
  var randomChoosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChoosenColor);
  level++;
  $("h1").text("Level  "+ level);
  $("#"+randomChoosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChoosenColor);

}

$(".btn").click(function(){
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length-1);
                          });

function playSound(color){
    var audio = new Audio(color + ".mp3");
    audio.play();
  }

function animatePress(color){

    $("#"+color).addClass("pressed");
    setTimeout(function () {
      $("#" + color).removeClass("pressed");
    }, 100);

  }

function checkAnswer(currentLevel) {

      if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length){
          setTimeout(function () {
            nextSequence();
          }, 1000);
        }
      } else {
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Click Here to Start");
        setTimeout(function () {
          $("body").removeClass("game-over");
        }, 200);

        startOver();
      }
  }
function startOver() {
    level = 0;
    gamePattern = [];
    start = false;
  }
