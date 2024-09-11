const nodemon = require('nodemon');

nodemon({
  script: 'index.js',
  watch: ['Frontend'],
  ignore: ['node_modules'],
});
