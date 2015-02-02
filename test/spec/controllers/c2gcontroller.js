'use strict';

describe('Controller: C2gCtrl', function() {

  // load the controller's module
  beforeEach(module('c2gyoApp'));

  var C2gCtrl;
  var scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    C2gCtrl = $controller('C2gCtrl', {
      $scope: scope
    });
  }));

  it('should calculate the correct price', function() {
    expect(scope.price(10, 20, 0, false)
      .toFixed(2)).toEqual((5.80).toFixed(2));
    expect(scope.price(10, 20, 0, true)
      .toFixed(2)).toEqual((10.70).toFixed(2));
    expect(scope.price(10, 20, 10, false)
      .toFixed(2)).toEqual((7.70).toFixed(2));
    expect(scope.price(10, 20, 10, true)
      .toFixed(2)).toEqual((12.60).toFixed(2));

    expect(scope.price(10, 229, 0, false)
      .toFixed(2)).toEqual((58.91).toFixed(2));
    expect(scope.price(10, 230, 0, false)
      .toFixed(2)).toEqual((59.00).toFixed(2));
    expect(scope.price(10, 1439, 0, false)
      .toFixed(2)).toEqual((59.00).toFixed(2));

    expect(scope.price(10, 2000, 0, false)
      .toFixed(2)).toEqual((118.00).toFixed(2));
    expect(scope.price(10, 2000, 0, true)
      .toFixed(2)).toEqual((122.90).toFixed(2));
    expect(scope.price(10, 2000, 10, false)
      .toFixed(2)).toEqual((119.90).toFixed(2));
    expect(scope.price(10, 2000, 10, true)
      .toFixed(2)).toEqual((124.80).toFixed(2));

    expect(scope.price(100, 20, 0, false)
      .toFixed(2)).toEqual((20.30).toFixed(2));
    expect(scope.price(100, 20, 0, true)
      .toFixed(2)).toEqual((25.20).toFixed(2));
    expect(scope.price(100, 20, 10, false)
      .toFixed(2)).toEqual((22.20).toFixed(2));
    expect(scope.price(100, 20, 10, true)
      .toFixed(2)).toEqual((27.10).toFixed(2));

    expect(scope.price(1000, 2000, 0, false)
      .toFixed(2)).toEqual((350.00).toFixed(2));
    expect(scope.price(1000, 2000, 0, true)
      .toFixed(2)).toEqual((354.90).toFixed(2));
    expect(scope.price(1000, 2000, 10, false)
      .toFixed(2)).toEqual((351.90).toFixed(2));
    expect(scope.price(1000, 2000, 10, true)
      .toFixed(2)).toEqual((356.80).toFixed(2));

  });

});
