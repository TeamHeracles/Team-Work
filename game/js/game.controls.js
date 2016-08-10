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
    $(window).on('keydown', Game.Controls.keyDown);
    // $(window).on('keyup', function(e) {
    //   if ( e.keyCode === 27 ) { App.Gallery.lightbox.removeClass('active'); return; } // Esc
    // });
  }


  ,keyDown : function ( e ) {
    Game.mouse.moves += 1;
    // console.log(Game.Map[Game.level]);
    $('#moves').text(Game.mouse.moves);

    var ctx_cheese = Game.Canvas.cheese.getContext('2d'),
        width = Game.Canvas.forest.width,
        height = Game.Canvas.forest.height;

    var x = Game.mouse.coords[0],
        y = Game.mouse.coords[1],
        dx = Game.Canvas.step, // 40
        dy = Game.Canvas.step; // 40;

    switch (e.keyCode) {
      case 38:  // Up arrow was pressed
        // console.log('up');
        if (y - dy > 0) {
          // if cheese up, check next cell
          // if cell empty, clear and redraw cheese, clear and redraw mouse
            // if neightbour cell occupied, cheese got stuck
          // if occupied, no move
          ctx_cheese.clearRect(Game.mouse.coords[0], Game.mouse.coords[1], dx, dy);
          Game.mouse.coords[1] -= dy;
          // y -= dy;
        }
        Game.Draw.Mouse( ctx_cheese, [Game.mouse.coords[0], Game.mouse.coords[1]] );
        break;
      case 40:  // Down arrow was pressed
        // console.log('down');
        if (y + dy < height) {
          ctx_cheese.clearRect(Game.mouse.coords[0], Game.mouse.coords[1], dx, dy);
          Game.mouse.coords[1] += dy;
          // y += dy;
        }
        Game.Draw.Mouse( ctx_cheese, [Game.mouse.coords[0], Game.mouse.coords[1]] );
        break;
      case 37:  // Left arrow was pressed
        // console.log('left');
        if (x - dx > 0) {
          ctx_cheese.clearRect(Game.mouse.coords[0], Game.mouse.coords[1], dx, dy);
          Game.mouse.coords[0] -= dx;
          // x -= dx;
        }
        Game.Draw.Mouse( ctx_cheese, [Game.mouse.coords[0], Game.mouse.coords[1]] );
        break;
      case 39:  // Right arrow was pressed
        // console.log('right');
        if (x + dx < width) {
          ctx_cheese.clearRect(Game.mouse.coords[0], Game.mouse.coords[1], dx, dy);
          Game.mouse.coords[0] += dx;
          // x += dx;
        }
        Game.Draw.Mouse( ctx_cheese, [Game.mouse.coords[0], Game.mouse.coords[1]] );
        break;
      }
  }


}
