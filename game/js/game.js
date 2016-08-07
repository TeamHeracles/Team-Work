var Game = {
  game_wrap : $('#game-wrap'),
  mouse : '',
  level : '',

  init : function () {
    Game.game_wrap.load('intro.html');
    Game.bind();
  }

  ,bind : function () {
    Game.game_wrap.on('click', '.btn', function(){
      var btn = $(this),
          game_screen = $(btn).attr('data-nav');

      Game.level = game_screen;
      Game.game_wrap.removeClass('active');
      Game.game_wrap.html('');
      setTimeout(function(){
        Game.loadScreen( game_screen );
      }, 500);
    });
  }


  ,loadScreen : function (game_screen) {
    console.log( game_screen );
    Game.game_wrap.addClass('active');

    switch (game_screen) {
      case 'levels':
        // console.log('levels');
        Game.game_wrap.load('levels.html');
        break;
      case 'scores':
        // console.log('scores');
        Game.game_wrap.load('highscores.html');
        break;
      case 'game_start':
        // console.log('game_start');
        Game.game_wrap.load('game_start.html');
        break;
      case 'game_easy':
        // console.log('game_easy');
        Game.game_wrap.load('game.html');
        break;
      case 'game_expert':
        // console.log('game_expert');
        Game.game_wrap.load('game.html');
        break;
      case 'game_hard':
        // console.log('game_hard');
        Game.game_wrap.load('game.html');
        break;
      default:
        // console.log('default');
        break;
    }
  }


}
