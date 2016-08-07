Game.Screen = {

  // Switch between game screens
  load : function ( game_screen ) {
    Game.game_wrap.addClass('active');

    switch (game_screen) {
      case 'mice':
        Game.game_wrap.load('mice.html');
        break;
      case 'levels':
        Game.game_wrap.load('levels.html');
        break;
      case 'scores':
        Game.game_wrap.load('highscores.html');
        break;
      case 'game':
        Game.game_wrap.load('game.html');
        break;
      default:
        Game.game_wrap.load('intro.html');
        break;
    }
  }



  // TODO: Change game level on certain conditions
  ,change : function () {}


  // TODO: End game level on certain conditions
  ,end : function () {}


}
