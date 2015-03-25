'use strict';

describe('Service: stadtmobilrateClassic', function() {

  // load the service's module
  beforeEach(module('c2gyoApp'));

  // instantiate service
  var stadtmobilrateClassic;
  beforeEach(inject(function(_stadtmobilrateclassic_) {
    stadtmobilrateClassic = _stadtmobilrateclassic_;
  }));

  it('should do something', function() {
    expect(!!stadtmobilrateClassic).toBe(true);
  });

});
