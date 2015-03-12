'use strict';

describe('Service: duration', function () {

  // load the service's module
  beforeEach(module('c2gyoApp'));

  // instantiate service
  var duration;
  beforeEach(inject(function (_duration_) {
    duration = _duration_;
  }));

  it('should do something', function () {
    expect(!!duration).toBe(true);
  });

});
