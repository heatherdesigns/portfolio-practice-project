// keeping this as a separate file because it works.

'use strict';

const sass = require('node-sass');
const shell = require('shelljs');

shell.exec('node-sass scss/main.scss public/css/main.css');
