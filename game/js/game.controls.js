//polyfill for array find
if (!Array.prototype.find) {
    Array.prototype.find = function (predicate) {
        'use strict';
        if (this == null) {
            throw new TypeError('Array.prototype.find called on null or undefined');
        }
        if (typeof predicate !== 'function') {
            throw new TypeError('predicate must be a function');
        }
        var list = Object(this);
        var length = list.length >>> 0;
        var thisArg = arguments[1];
        var value;

        for (var i = 0; i < length; i++) {
            value = list[i];
            if (predicate.call(thisArg, value, i, list)) {
                return value;
            }
        }
        return undefined;
    };
}
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
    $(window).on('keyup', Game.Controls.keyUp);
    // $(window).on('keyup', function(e) {
    //   if ( e.keyCode === 27 ) { App.Gallery.lightbox.removeClass('active'); return; } // Esc
    // });
  }
  , keyUp: function (e) {
          var ctx_mouse = Game.Canvas.mouse.getContext('2d'),
              ctx_cheese = Game.Canvas.cheese.getContext('2d'),
              width = Game.Canvas.forest.width,
               height = Game.Canvas.forest.height;
              x = Game.mouse.coords[0],
              y = Game.mouse.coords[1],
            dx = Game.Canvas.step, 
            dy = Game.Canvas.step;
              
            map = Game.Map[Game.level];
            keyCodeToDirs = {
                "37": 2,
                "38": 3,
                "39": 0,
                "40": 1
            };
            dirsToMouseRotation = {
                 0: "right",
                 1: "down",
                 2: "left",
                 3: "up"   
            }
            notAllowedPositions = ["g", "x", "bl", "na", "or", 1];
            const dirDeltas = [{
                "x": +Game.Canvas.step,
                "y": 0
            }, {
                "x": 0,
                "y": Game.Canvas.step
            }, {
                "x": -Game.Canvas.step,
                "y": 0
            }, {
                "x": 0,
                "y": -Game.Canvas.step
            }];
        
            if (!keyCodeToDirs.hasOwnProperty(e.keyCode)) {
                console.log("Wrong dir");
                return;
            }
            dir = keyCodeToDirs[e.keyCode];
            var mouseNextX = x + dirDeltas[dir].x;
            var mouseNextY = y + dirDeltas[dir].y;
            var mapNextPosition = map[mouseNextY / Game.Canvas.step][mouseNextX / Game.Canvas.step];
            if (mouseNextY >= 0 && mouseNextY < height && mouseNextX >= 0 && mouseNextX < width &&
                (notAllowedPositions.indexOf(mapNextPosition) == -1 ||
                (mapNextPosition == 1 && 
                (map[(mouseNextY + dirDeltas[dir].y) / Game.Canvas.step][(mouseNextX + dirDeltas[dir].x) / Game.Canvas.step]) == 0 || 
                 map[(mouseNextY + dirDeltas[dir].y) / Game.Canvas.step][(mouseNextX + dirDeltas[dir].x) / Game.Canvas.step] == 'p'))){
               //updates the position of the mouse
                ctx_mouse.clearRect(Game.mouse.coords[0], Game.mouse.coords[1], dx, dy);
                Game.mouse.coords[0] = mouseNextX;
                Game.mouse.coords[1] = mouseNextY;
                Game.Draw.Mouse(ctx_mouse, [Game.mouse.coords[0], Game.mouse.coords[1]], dirsToMouseRotation[dir]);
               //updates position of the cheese
                if (map[mouseNextY / Game.Canvas.step][mouseNextX / Game.Canvas.step] == 1) {                                        
                    //gives points when cheese is on target
                    console.log("I'm here!!!!");
                    function findTargetOfNextNext(target){
                        return target.row == (mouseNextY + dirDeltas[dir].y) / Game.Canvas.step &&
                               target.col == (mouseNextX + dirDeltas[dir].x) / Game.Canvas.step
                    }
                 
                    function findTagetOfNext(target){
                        return target.row == mouseNextY / Game.Canvas.step &&
                               target.col == mouseNextX / Game.Canvas.step;
                    }
                    var indexOfTargetNextNext = Game.Canvas.targets.find(findTargetOfNextNext);
                    var indexOfTargetNext = Game.Canvas.targets.find(findTagetOfNext)
                    //adds score if cheese is on a target for the first time
                    if(indexOfTargetNextNext != undefined && indexOfTargetNext == undefined){
                        $currentScore = $("#score");
                        $remaining = $('#remaining');
                        $collected = $('#collected')
                        $currentScore.text(+$currentScore.text() + 10);
                        $remaining.text(+$remaining.text() - 1);
                        $collected.text(+$collected.text() + 1);                      
                    }
                    if (indexOfTargetNextNext == undefined && indexOfTargetNext != undefined) {
                        //removes scores if cheese leaves target
                        $currentScore = $("#score");
                        $remaining = $('#remaining');
                        $collected = $('#collected');
                        $currentScore.text(+$currentScore.text() - 10);
                        $remaining.text(+$remaining.text() + 1);
                        $collected.text(+$collected.text() - 1);
                    }
                    //update cheese new location on map     
                    map[mouseNextY / Game.Canvas.step][mouseNextX / Game.Canvas.step] = 0;
                    map[(mouseNextY + dirDeltas[dir].y) / Game.Canvas.step][(mouseNextX + dirDeltas[dir].x) / Game.Canvas.step] = 1;
                    ctx_cheese.clearRect(Game.mouse.coords[0], Game.mouse.coords[1], dx, dy);                                   
                    Game.Canvas.setCheese(Game.level, ctx_cheese, Game.Canvas.step);
                    //checks if it is on point and gives point to score                     
                }
               //counts the move
                Game.mouse.moves += 1;
                $('#moves').text(Game.mouse.moves);
        }
     

  }


}
