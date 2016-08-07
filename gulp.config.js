// Create new Node.js module for all settings we need to use in our gulpfile.js
module.exports = function(){
  // Define paths
  var js_dir = 'game/js/',
      sass_dir = 'game/sass/',
      css_dir = 'game/css/';

  // Use function to define an object containing all our configuration settings
  var config = {
    base : './*.js',

    vendors: {
      input: [
        js_dir + 'vendor/**/*.js',
        js_dir + 'plugins/**/*.js'
      ],
      output : js_dir,
      path   : js_dir,
      name   : 'vendor.js'
    },

    scripts: {
      input: [
        js_dir + 'vendor/**/*.js',
        js_dir + 'plugins/**/*.js',
        js_dir + 'game.js',
        js_dir + 'game.*.js'
      ],
      output : js_dir,
      path   : js_dir,
      name   : 'main.js'
    },

    sass: {
      input  : sass_dir + 'main.scss',
      output : css_dir,
      path   : sass_dir,
      name   : 'main.css'
    }
  };

  return config;
};
