'use strict';

const shell = require('shelljs');

const express = require('express');
//const ejs = require('ejs');
const app = express();
const path = require('path');

if (process.env.NODE_ENV === 'production'){
  // start production server...................
  console.log("You have accessed the production server.");

  // process.env.PORT lets the port be set by Heroku
  const port = process.env.PORT || 5000;

  // make express look in the public directory for assets
  console.log('PWD', path.join(__dirname, '..', 'public'));
  console.log('PWD', path.join(__dirname, '..'));

  // get HTML   __dirname, bin, public
  app.use(express.static(path.join(__dirname, '../public')));
  app.use(express.static(path.join(__dirname, '..')));

  app.listen(port, function() {
    console.log("Our app is running on http://localhost:" + port);
  });

}
else {
  // start development server to watch and update html and css files
  console.log("You have accessed the development server.");
  shell.exec("browser-sync start --server --index 'public/index.html' --files 'public/css/*.css, public/html/*.html'");
}
