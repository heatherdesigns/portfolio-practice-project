'use strict';

const shell = require('shelljs');

// this gives "exec: internal error" on the command line upon exiting
// runs ok with npm run start:server
shell.exec("nodemon -e scss -x 'npm run build-css'");
