'use strict';

describe('Service: stadtmobilRates', function () {

  // load the service's module
  beforeEach(module('c2gyoApp'));

  // instantiate service
  var stadtmobilRates;
  beforeEach(inject(function (_stadtmobilRates_) {
    stadtmobilRates = _stadtmobilRates_;
  }));

  it('should do something', function () {
    expect(!!stadtmobilRates).toBe(true);
  });

});
