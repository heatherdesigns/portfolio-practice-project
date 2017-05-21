'use strict';

const shell = require('shelljs');
const browser = require('browser-sync');
//const change = require('onchange');

const express = require('express');
const app = express();

if (process.env.NODE_ENV === 'production'){
  // start production server???
  //app.set('port', (process.env.PORT || 5000));

  //app.use(express.static(__dirname + '/public'));

  app.get('/', function(request, response) {
    response.render('index.html');
  });

  // app.listen(app.get('port'), function() {
  //   console.log('Node app is running on port', app.get('port'));
  // });
}
else {
  // start development server to watch and update html and css files
  shell.exec("browser-sync start --server --files 'public/css/*.css, *.html'");

  // using onchange to watch Sass file for changes, then rebuild files -- move
  // shell.exec("onchange 'scss/*.scss' -- npm run build3-css");
}
