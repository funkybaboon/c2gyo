'use strict';

describe('Service: flinksterratelokal', function () {

  // load the service's module
  beforeEach(module('c2gyoApp'));

  // instantiate service
  var flinksterratelokal;
  beforeEach(inject(function (_flinksterratelokal_) {
    flinksterratelokal = _flinksterratelokal_;
  }));

  it('should do something', function () {
    expect(!!flinksterratelokal).toBe(true);
  });

});
