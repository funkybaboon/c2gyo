exports.config = {
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',

  params: {
    /*will match any string that contains at least one non-space character*/
    regexNotEmpty: '^(?!\s*$).+',
    timeout: 1000
  },

  specs: [
    'car2go.js',
    'flinkster.js',
    'greenwheels.js',
    'stadtmobil.js',
    'drivenow.js',
    'bookndrive.js',

    'KeepStateScenario.js',
  ],

  multiCapabilities: [{
    browserName: 'chrome',
    shardTestFiles: true,
    maxInstances: 99
  }/*, {
    browserName: 'firefox',
    shardTestFiles: true,
    maxInstances: 99
  }*/]

};
