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

    var ctx = Game.Canvas.forest.getContext('2d');
    Game.Canvas.drawMap( Game.level, ctx, game_width, game_height, Game.Canvas.step );

    Game.Timer.init( Game.Canvas.timer );
  }


  ,drawMap : function ( level, ctx, width, height, step ) {
    var map = Game.Map[level];
    // console.log( map );
    for (var row = 0; row < map.length; row++) {
      for (var col = 0; col < map[row].length; col++) {
        var cell = map[row][col];
        if (cell == 'g') {
          Game.Canvas.drawGrass( ctx, col, row, step );
        }
        else if (cell == 'bl') {
          // Draw Blue tree
        }
        else if (cell == 'gr') {
          // Draw Green tree
        }
        else if (cell == 'na') {
          // Draw Naked tree
        }
        else if (cell == 'or') {
          // Draw Orange tree
        }
        else if (cell == 'p') {
          // Draw Target Point
        }
      }
    }
  }

  ,drawGrass : function ( ctx, x, y, size ) {
    // grass code
    ctx.fillStyle = '#bab5a8';
    ctx.save();
    ctx.translate(x*size,y*size);
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(size,0);
    ctx.lineTo(size,size);
    ctx.lineTo(0,size);
    ctx.closePath();

    ctx.clip();
    ctx.translate(0,0);
    ctx.translate(0,0);
    ctx.scale(1,1);
    ctx.translate(0,0);
    ctx.strokeStyle = 'rgba(0,0,0,0)';
    ctx.lineCap = 'butt';
    ctx.lineJoin = 'miter';
    ctx.miterLimit = 4;
    ctx.save();
    ctx.restore();
    ctx.save();
    ctx.save();

    ctx.beginPath();
    ctx.moveTo(20.796,34.965);
    ctx.bezierCurveTo(8.944,35.212,-3.677,25.396,0.998,21.422);
    ctx.bezierCurveTo(3.814,19.029,7.402,28.874000000000002,10.581,27.966);
    ctx.bezierCurveTo(12.216,27.499,1.231,6.23,7.075,5.063);
    ctx.bezierCurveTo(11.524000000000001,4.173,10.502,22.168,12.917,23.291999999999998);
    ctx.bezierCurveTo(18.712,25.56,12.155,11.140999999999998,14.786999999999999,9.034999999999998);
    ctx.bezierCurveTo(18.293,6.229999999999999,18.230999999999998,15.411999999999999,18.244999999999997,17.564999999999998);
    ctx.bezierCurveTo(18.206999999999997,19.493,16.551999999999996,25.866999999999997,19.319,26.430999999999997);
    ctx.bezierCurveTo(23.101,27.241999999999997,22.108999999999998,22.912999999999997,21.866,20.810999999999996);
    ctx.bezierCurveTo(21.501,19.215999999999998,18.567,12.696999999999996,22.421,12.771999999999997);
    ctx.bezierCurveTo(25.311999999999998,12.827999999999996,24.293,25.737999999999996,26.101,24.635999999999996);
    ctx.bezierCurveTo(28.625,23.097999999999995,26.939999999999998,13.653999999999996,28.401,8.522999999999996);
    ctx.bezierCurveTo(29.179,5.788999999999996,32.117,6.951999999999996,32.306,8.825999999999997);
    ctx.bezierCurveTo(32.354,12.172999999999996,28.689999999999998,17.342,30.503999999999998,19.79);
    ctx.bezierCurveTo(32.934999999999995,23.069,33.373999999999995,12.082999999999998,37.851,15.227);
    ctx.bezierCurveTo(40.423,17.036,30.305999999999997,24.152,30.985,27.113);
    ctx.bezierCurveTo(31.718,30.31,34.563,23.894,37.245,23.04);
    ctx.bezierCurveTo(39.516,22.316,41.516,26.021,38.391999999999996,29.134999999999998);
    ctx.bezierCurveTo(34.639,32.633,26.804,34.84,20.796,34.965);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.restore();
    ctx.restore();
  }


  ,draw : function ( coords, obj ) {}

  ,updateObjectState : function () {}

}
