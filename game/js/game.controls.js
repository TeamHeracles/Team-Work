Game.Controls = {

  // Add all event listeners
  bind : function () {
    Game.game_wrap.on('click', '.btn', function(){
      var btn = $(this),
          game_screen = $(btn).attr('data-nav');

      Game.game_wrap.removeClass('active');
      Game.game_wrap.html('');
      setTimeout(function(){
        Game.Screen.load( game_screen );
      }, 500);
    });

    Game.game_wrap.on('click', '.btn-level', function(){
      var btn = $(this),
          level = $(btn).attr('data-level');
      Game.level = level;
    });

    Game.game_wrap.on('click', '.mouse-btn', function() {
      var mouse = $(this),
          mouse_id = $(mouse).find('.mouse').attr('id');

      $(mouse).addClass('active')
              .siblings().removeClass('active');
      Game.mouse.id = mouse_id;
    });

    // TODO: Add event listeners for arrow buttons
  }



}
