'use strict';

const shell = require('shelljs');
const browser = require('browser-sync');
//const change = require('onchange');

if (process.env.NODE_ENV === 'production'){
  // start production server
}
else {
  // start development server to watch and update html and css files
  shell.exec("browser-sync start --server --files 'public/css/*.css, *.html'");

  // using onchange to watch Sass file for changes, then rebuild files -- move
  // shell.exec("onchange 'scss/*.scss' -- npm run build3-css");
}
