'use strict';

describe('Service: stadtmobilrates2', function() {

  // load the service's module
  beforeEach(module('c2gyoApp'));

  // instantiate service
  var stadtmobilrates2;
  beforeEach(inject(function(_stadtmobilratebasic_) {
    stadtmobilrates2 = _stadtmobilratebasic_;
  }));

  it('should do something', function() {
    expect(!!stadtmobilrates2).toBe(true);
  });

});
