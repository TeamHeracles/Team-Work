var Game = {
  game_wrap : $('#game-wrap'),
  forest : '', // Forest map, according to game level
  mouse : {
    id : ''
  },
  level : 'easy',


  init : function () {
    Game.game_wrap.load('intro.html');
    Game.Controls.bind();
  }


}
