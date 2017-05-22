'use strict';

const shell = require('shelljs');
//const browser = require('browser-sync');
//const mon = require('nodemon');
//const change = require('onchange');

// this gives "exec: internal error" on the command line upon exiting
// runs ok with npm run start:server
shell.exec("nodemon -e scss -x 'npm run build-css'");
