'use strict';

const shell = require('shelljs');
const browser = require('browser-sync');

const express = require('express');
const app = express();

if (process.env.NODE_ENV === 'production'){
  // start production server...................
  console.log("You have accessed the production server.");
  // set the port of the application
  // process.env.PORT lets the port be set by Heroku
  const port = process.env.PORT || 5000;

  // make epress look in the public directory for assets
  app.use(express.static(__dirname + '/public'));

  // set the view engine to ejs
  //app.set('views', __dirname + '/views');
  app.set('views', __dirname + '/public');
  app.engine('html', ejs.renderFile);
  app.set('view engine', 'html');

  //set the home page route
  app.get('/', function(request, response) {
    // ejs render automatically looks in the view folder
    //response.render('index');
    response.render(__dirname + '/index.html');
  });

  app.listen(port, function() {
    console.log("Our app is running on http://localhost:" + port);
  });

}
else {
  // start development server to watch and update html and css files
  console.log("You have accessed the development server.");
  shell.exec("browser-sync start --server --files 'public/css/*.css, *.html'");

  // using onchange to watch Sass file for changes, then rebuild files -- move
  // shell.exec("onchange 'scss/*.scss' -- npm run build3-css");
}
