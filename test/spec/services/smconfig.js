'use strict';

describe('Service: smConfig', function () {

  // load the service's module
  beforeEach(module('c2gyoApp'));

  // instantiate service
  var smConfig;
  beforeEach(inject(function (_smConfig_) {
    smConfig = _smConfig_;
  }));

  it('should do something', function () {
    expect(!!smConfig).toBe(true);
  });

});
