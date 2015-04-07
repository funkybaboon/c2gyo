'use strict';

describe('Service: flinksterratebundesweit', function() {

  // load the service's module
  beforeEach(module('c2gyoApp'));

  // instantiate service
  var flinksterratebundesweit;
  beforeEach(inject(function(_flinksterratebundesweit_) {
    flinksterratebundesweit = _flinksterratebundesweit_;
  }));

  it('should do something', function() {
    expect(!!flinksterratebundesweit).toBe(true);
  });

});
