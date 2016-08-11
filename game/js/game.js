var Game = {
  game_wrap : $('#game-wrap'),
  forest : 'easy', // Forest map, according to game level
  mouse : {
    id : 'green-mouse',
    coords : [440, 320],
    moves: 0
  },
  level : 'easy',
  targets : [],  

  init : function () {
    Game.game_wrap.load('intro.html');
    // Game.game_wrap.load('game.html', function(){
    //   Game.Canvas.init();
    // });
    Game.Controls.bind();
  }


}
