'use strict';

describe('Service: flinksterConfig', function () {

  // load the service's module
  beforeEach(module('c2gyoApp'));

  // instantiate service
  var flinksterConfig;
  beforeEach(inject(function (_flinksterConfig_) {
    flinksterConfig = _flinksterConfig_;
  }));

  it('should do something', function () {
    expect(!!flinksterConfig).toBe(true);
  });

});
