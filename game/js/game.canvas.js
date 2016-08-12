Game.Canvas = {
  forest : '',
  cheese : '',
  timer  : '',
  mouse  : '',
  step   : 40,
  targets : [],
  remaining : 0,
  collected : 0,
  // stuck : 0,
  moves : 0,
  score : 0,


  init : function () {
    // Page content should be loaded before canvas elements can be selected in DOM
    Game.Canvas.targets = [];
    Game.Canvas.forest = document.getElementById('forest');
    Game.Canvas.cheese = document.getElementById('cheese');
    Game.Canvas.timer = document.getElementById('timer');
    Game.Canvas.mouse = document.getElementById('mouse');
    var ctx_forest = Game.Canvas.forest.getContext('2d'),
        ctx_cheese = Game.Canvas.cheese.getContext('2d'),
        ctx_mouse = Game.Canvas.mouse.getContext('2d');
    Game.currentLevelPlayed = JSON.parse(JSON.stringify(Game.Map[Game.level]));
    Game.mouse.coords = [440, 320];
    Game.Draw.Mouse(ctx_mouse, Game.mouse.coords, "down");

    Game.Canvas.setForest( ctx_forest, Game.Canvas.step );
    Game.Canvas.setCheese( ctx_cheese, Game.Canvas.step );    
    Game.Timer.init( Game.Canvas.timer );
    Game.Canvas.collected = 0;
    Game.Canvas.stuck = 0;
    Game.Canvas.score = 0;
    Game.Canvas.moves = 0;
    Game.Canvas.remaining = Game.Canvas.targets.length;

    $('#remaining').text(Game.Canvas.remaining);
    $('#collected').text(Game.Canvas.collected);
    $('#stuck').text(Game.Canvas.stuck);
    $('#moves').text(Game.Canvas.moves);
    $('#score').text(Game.Canvas.score);
  }


  ,setForest : function ( ctx, step ) {
    var map = Game.currentLevelPlayed;
    for (var row = 0; row < map.length; row++) {
      for (var col = 0; col < map[row].length; col++) {
        var cell = map[row][col];
        if (cell == 'g') {
          Game.Draw.Grass( ctx, col, row, step );
        }
        else if (cell == 'bl') {
          // Draw Blue tree
          Game.Draw.BlueTree( ctx, col, row, step );
        }
        else if (cell == 'gr') {
          // Draw Green tree
          Game.Draw.GreenTree( ctx, col, row, step );
        }
        else if (cell == 'na') {
          // Draw Naked tree
          Game.Draw.NakedTree( ctx, col, row, step );
        }
        else if (cell == 'or') {
          // Draw Orange tree
          Game.Draw.OrangeTree( ctx, col, row, step );
        }
        else if (cell == 'p') {
          // Draw Target Point
          //saves target position for calculating score
          currentTargetPosition = { 'row': row, 'col': col };
          Game.Canvas.targets.push(currentTargetPosition);

          Game.Draw.Target(ctx, col, row, step);
        }
      }
    }

  }


  ,setCheese : function ( ctx,  step ) {
    var map = Game.currentLevelPlayed;
    for (var row = 0; row < map.length; row++) {
      for (var col = 0; col < map[row].length; col++) {
        var cell = map[row][col];
        if (cell == '1') {
          Game.Draw.Cheese( ctx, col, row, step );
        }
      }
    }

  }
}
