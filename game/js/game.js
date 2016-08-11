'use strict';

//polyfill for array find
if (!Array.prototype.find) {
  Array.prototype.find = function (predicate) {
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

    Game.Canvas.remaining = 0;
    Game.Canvas.collected = 0;
    Game.Canvas.stuck = 0;
    Game.Canvas.score = 0;
    Game.Canvas.moves = 0;
  }

}
