'use strict';

const shell = require('shelljs');

// compile CSS (compressed for production and expanded for development)
if (process.env.NODE_ENV === 'production'){
  shell.exec('node-sass --output-style compressed scss/main.scss public/css/main.css');
}
else {
  // compile and output Sass to expanded CSS and create sourcemaps
  shell.exec('node-sass --output-style expanded scss/main.scss public/css/main.css && sass scss/main.scss:public/css/main.css');
}

// use postcss to parse CSS and add vendor prefixes to CSS rules
shell.exec('postcss -u autoprefixer -r public/css/main.css');
