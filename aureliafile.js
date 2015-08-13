var aurelia = require('aurelia-cli');

aurelia.command('bundle', {
  js: {
    "dist/app-bundle": {
      modules: [
        '*',
        'aurelia-bootstrapper',
        'aurelia-router'
      ],
      options: {
        inject: true,
        minify: true
      }
    }
  },
  template: {
    "dist/app-bundle": {
      pattern: 'dist/*.html',
      options: {
        inject: true
      }
    }
  }
});
