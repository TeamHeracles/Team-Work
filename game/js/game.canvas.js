Game.Canvas = {
  forest : '',
  cheese : '',
  timer  : '',
  mouse  : '',
  step   : 40,


  init : function () {
    // Page content should be loaded before canvas elements can be selected in DOM
    Game.Canvas.forest = document.getElementById('forest');
    Game.Canvas.cheese = document.getElementById('cheese');
    Game.Canvas.timer = document.getElementById('timer');
    Game.Canvas.mouse = document.getElementById('mouse');

    var game_width = Game.Canvas.forest.width,
        game_height = Game.Canvas.forest.height;

    var ctx_forest = Game.Canvas.forest.getContext('2d');
    Game.Canvas.setForest( Game.level, ctx_forest, game_width, game_height, Game.Canvas.step );

    var ctx_cheese = Game.Canvas.forest.getContext('2d');
    Game.Canvas.setCheese( Game.level, ctx_cheese, game_width, game_height, Game.Canvas.step );

    Game.Timer.init( Game.Canvas.timer );
  }


  ,setForest : function ( level, ctx, width, height, step ) {
    var map = Game.Map[level];

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
          Game.Draw.Target( ctx, col, row, step );
        }
      }
    }

  }


  ,setCheese : function ( level, ctx, width, height, step ) {
    var map = Game.Map[level];

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
