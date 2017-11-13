// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  const appBase = 'src/'
  config.set({
    basePath: './',
    frameworks: ['jasmine'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
    ],
    client:{
      builtPaths: [appBase], // add more spec base paths as needed
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      reports: [ 'html', 'lcovonly' ],
      fixWebpackSourcePaths: true
    },
    files:[
        // System.js for module loading
    //   'node_modules/systemjs/dist/system.src.js',
    //   // Polyfills
    //   'node_modules/core-js/client/shim.js',
    //   // zone.js
    //   'node_modules/zone.js/dist/zone.js',
    //   'node_modules/zone.js/dist/long-stack-trace-zone.js',
    //   'node_modules/zone.js/dist/proxy.js',
    //   'node_modules/zone.js/dist/sync-test.js',
    //   'node_modules/zone.js/dist/jasmine-patch.js',
    //   'node_modules/zone.js/dist/async-test.js',
    //   'node_modules/zone.js/dist/fake-async-test.js',
    //   // RxJs
    //   { pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false },
    //   { pattern: 'node_modules/rxjs/**/*.js.map', included: false, watched: false },
      //
    //   // Paths loaded via module imports:
    //   // Angular itself
    //   { pattern: 'node_modules/@angular/**/*.js', included: false, watched: false },
    //   { pattern: 'node_modules/@angular/**/*.js.map', included: false, watched: false },
      //
    //   { pattern: appBase + '**/**/**/*.html', included: false, watched: true },
    //   { pattern: appBase + '*.ts', included: false, watched: true },
     { pattern: './dist/*.html', included: false, watched: false },
      { pattern:'./dist/assets/js/*.js', included: false, watched: false },
    ],
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};
