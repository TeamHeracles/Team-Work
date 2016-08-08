Game.Score = {

  // Add scores method
  add : function (showScore) {
    var forest = document.getElementById("the-canvas"),
        ctx = forest.getContext("2d"),
        score = 0;

    ctx.font = "22px Verdana";
    ctx.fillStyle = "#F7931E";
    ctx.textAlign = "left";
    ctx.fillText("SCORE: " + parseInt(score), 489, 30);

  }

  // Remove scores method
  ,remove : function (clearScore) {
    if (keycode === restartCode && restartTimer > 0) {
      restartTimer = 0;
      gameOn = true;
      gamePaused = false;
      score = 0;
      initApp();
      run();
    }
  }

  // Double the scores on certain conditions
  ,double : function (doubleScore) {
    if(certainConditions){
      score= score* 2;
    }
  }

  // Print result
  ,print : function () {}


}
