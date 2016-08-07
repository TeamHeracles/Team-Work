var Game = {
  game_wrap : $('#game-wrap'),
  forest : '',
  mouse : {
    id : ''
  },
  level : 'easy',


  init : function () {
    Game.game_wrap.load('intro.html');
    Game.Controls.bind();
  }


}
