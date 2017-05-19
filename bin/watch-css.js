'use strict';

const shell = require('shelljs');
const browser = require('browser-sync');
const mon = require('nodemon');
//const change = require('onchange');

// this gives "exec: internal error" on the command line upon exiting
// runs ok with npm run start:server
shell.exec("nodemon -e scss -x 'npm run build3-css'");

// using onchange to watch Sass file for changes, then rebuild files -- move
// this is working but not with start:server!!!!
// shell.exec("onchange 'scss/*.scss' -- npm run build3-css");

// experiment using chokidar
