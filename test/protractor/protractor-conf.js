exports.config = {
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',

  specs: [
    'KeepStateScenario.js',

    'car2go.js',
    'car2goblack.js',
    'flinkster.js',
    'greenwheels.js',
    'stadtmobil.js',
    'drivenow.js',
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
