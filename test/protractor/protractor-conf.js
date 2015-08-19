exports.config = {
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',

  specs: [/*
    'c2g10km20minScenario.js',
    'c2g10km229minScenario.js',
    'c2g10km2000minScenario.js',
    'c2g100km20minScenario.js',
    'c2g1000km2000minScenario.js',

    'c2gb10km1hourScenario.js',
    'c2gb10km33hoursScenario.js',
    'c2gb100km1hourScenario.js',
    'c2gb1000km33hoursScenario.js',

    'sm10km10hoursClassicScenario.js',
    'sm10km10hoursBasicScenario.js',
    'sm10km10hoursBusinessScenario.js',
*/
    'KeepStateScenario.js',
    'flinkster.js'
  ],

  multiCapabilities: [{
    browserName: 'chrome',
    shardTestFiles: true,
    maxInstances: 7
  }, {
    browserName: 'firefox',
    shardTestFiles: true,
    maxInstances: 7
  }]

};
