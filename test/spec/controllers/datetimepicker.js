'use strict';

describe('Controller: DatetimepickerCtrl', function() {

  // load the controller's module
  beforeEach(module('c2gyoApp'));

  var DatetimepickerCtrl;
  var scope;
  var smConfig;
  var stadtmobilRates;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope, _stadtmobilRates_, _smConfig_) {
    scope = $rootScope.$new();
    DatetimepickerCtrl = $controller('DatetimepickerCtrl', {
      $scope: scope
    });
    smConfig = _smConfig_;
    stadtmobilRates = _stadtmobilRates_;
  }));

  it('should calculate the correct price using the datetimepicker', function() {
    var startDate = new moment();
    var endDate = new moment().add(10, 'h');

    expect(scope.priceExact(10, startDate, endDate, 'A', 'basic')
      .toFixed(2)).toEqual((18.20).toFixed(2));
    expect(scope.priceExact(10, startDate, endDate, 'B', 'basic')
      .toFixed(2)).toEqual((29.70).toFixed(2));
    expect(scope.priceExact(10, startDate, endDate, 'C', 'basic')
      .toFixed(2)).toEqual((36.10).toFixed(2));
    expect(scope.priceExact(10, startDate, endDate, 'D', 'basic')
      .toFixed(2)).toEqual((40.40).toFixed(2));
    expect(scope.priceExact(10, startDate, endDate, 'F', 'basic')
      .toFixed(2)).toEqual((50.80).toFixed(2));

    expect(scope.priceExact(10, startDate, endDate, 'A', 'classic')
      .toFixed(2)).toEqual((16.00).toFixed(2));
    expect(scope.priceExact(10, startDate, endDate, 'B', 'classic')
      .toFixed(2)).toEqual((24.20).toFixed(2));
    expect(scope.priceExact(10, startDate, endDate, 'C', 'classic')
      .toFixed(2)).toEqual((30.60).toFixed(2));
    expect(scope.priceExact(10, startDate, endDate, 'D', 'classic')
      .toFixed(2)).toEqual((34.90).toFixed(2));
    expect(scope.priceExact(10, startDate, endDate, 'F', 'classic')
      .toFixed(2)).toEqual((45.30).toFixed(2));
  });

  it('should calculate the correct price using simple time', function() {
    expect(scope.priceSimple(10, 10, 0, 0, 'A', 'basic')
      .toFixed(2)).toEqual((18.20).toFixed(2));
    expect(scope.priceSimple(10, 10, 0, 0, 'B', 'basic')
      .toFixed(2)).toEqual((29.70).toFixed(2));
    expect(scope.priceSimple(10, 10, 0, 0, 'C', 'basic')
      .toFixed(2)).toEqual((36.10).toFixed(2));
    expect(scope.priceSimple(10, 10, 0, 0, 'D', 'basic')
      .toFixed(2)).toEqual((40.40).toFixed(2));
    expect(scope.priceSimple(10, 10, 0, 0, 'F', 'basic')
      .toFixed(2)).toEqual((50.80).toFixed(2));

    expect(scope.priceSimple(10, 10, 0, 0, 'A', 'classic')
      .toFixed(2)).toEqual((16.00).toFixed(2));
    expect(scope.priceSimple(10, 10, 0, 0, 'B', 'classic')
      .toFixed(2)).toEqual((24.20).toFixed(2));
    expect(scope.priceSimple(10, 10, 0, 0, 'C', 'classic')
      .toFixed(2)).toEqual((30.60).toFixed(2));
    expect(scope.priceSimple(10, 10, 0, 0, 'D', 'classic')
      .toFixed(2)).toEqual((34.90).toFixed(2));
    expect(scope.priceSimple(10, 10, 0, 0, 'F', 'classic')
      .toFixed(2)).toEqual((45.30).toFixed(2));
  });

});
