var Game = {
  game_wrap : $('#game-wrap'),
  mouse : {
    id : ''
  },
  level : '',


  init : function () {
    Game.game_wrap.load('intro.html');
    Game.Controls.bind();
  }


}
