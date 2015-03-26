'use strict';

describe('Service: stadtmobilratebusiness', function () {

  // load the service's module
  beforeEach(module('c2gyoApp'));

  // instantiate service
  var stadtmobilratebusiness;
  beforeEach(inject(function (_stadtmobilratebusiness_) {
    stadtmobilratebusiness = _stadtmobilratebusiness_;
  }));

  it('should do something', function () {
    expect(!!stadtmobilratebusiness).toBe(true);
  });

});
