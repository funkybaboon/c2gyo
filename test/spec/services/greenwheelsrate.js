'use strict';

describe('Service: greenwheelsrate', function () {

  // load the service's module
  beforeEach(module('c2gyoApp'));

  // instantiate service
  var greenwheelsrate;
  beforeEach(inject(function (_greenwheelsrate_) {
    greenwheelsrate = _greenwheelsrate_;
  }));

  it('should do something', function () {
    expect(!!greenwheelsrate).toBe(true);
  });

});
