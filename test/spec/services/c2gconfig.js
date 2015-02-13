'use strict';

describe('Service: c2gConfig', function () {

  // load the service's module
  beforeEach(module('c2gyoApp'));

  // instantiate service
  var c2gConfig;
  beforeEach(inject(function (_c2gConfig_) {
    c2gConfig = _c2gConfig_;
  }));

  it('should do something', function () {
    expect(!!c2gConfig).toBe(true);
  });

});
