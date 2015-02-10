'use strict';

describe('Controller: SmCtrl', function() {

  // load the controller's module
  beforeEach(module('c2gyoApp'));

  var SmCtrl;
  var scope;
  var smConfig;
  var stadtmobilRates;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope, _stadtmobilRates_, _smConfig_) {
    scope = $rootScope.$new();
    SmCtrl = $controller('SmCtrl', {
      $scope: scope
    });
    smConfig = _smConfig_;
    stadtmobilRates = _stadtmobilRates_;
  }));

  it('should calculate the correct price', function() {
    expect(scope.price(10, 10, 0, 0, 'A', 'basic')
      .toFixed(2)).toEqual((18.20).toFixed(2));
    expect(scope.price(10, 10, 0, 0, 'B', 'basic')
      .toFixed(2)).toEqual((29.70).toFixed(2));
    expect(scope.price(10, 10, 0, 0, 'C', 'basic')
      .toFixed(2)).toEqual((36.10).toFixed(2));
    expect(scope.price(10, 10, 0, 0, 'D', 'basic')
      .toFixed(2)).toEqual((40.40).toFixed(2));
    expect(scope.price(10, 10, 0, 0, 'F', 'basic')
      .toFixed(2)).toEqual((50.80).toFixed(2));

    expect(scope.price(10, 10, 0, 0, 'A', 'classic')
      .toFixed(2)).toEqual((16.00).toFixed(2));
    expect(scope.price(10, 10, 0, 0, 'B', 'classic')
      .toFixed(2)).toEqual((24.20).toFixed(2));
    expect(scope.price(10, 10, 0, 0, 'C', 'classic')
      .toFixed(2)).toEqual((30.60).toFixed(2));
    expect(scope.price(10, 10, 0, 0, 'D', 'classic')
      .toFixed(2)).toEqual((34.90).toFixed(2));
    expect(scope.price(10, 10, 0, 0, 'F', 'classic')
      .toFixed(2)).toEqual((45.30).toFixed(2));
  });

});
