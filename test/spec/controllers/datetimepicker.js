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

    scope.tariff = 'basic';

    scope.rate = 'A';
    expect(scope.priceExact(10, startDate, endDate)
      .toFixed(2)).toEqual((18.20).toFixed(2));

    scope.rate = 'B';
    expect(scope.priceExact(10, startDate, endDate)
      .toFixed(2)).toEqual((29.70).toFixed(2));

    scope.rate = 'C';
    expect(scope.priceExact(10, startDate, endDate)
      .toFixed(2)).toEqual((36.10).toFixed(2));

    scope.rate = 'D';
    expect(scope.priceExact(10, startDate, endDate)
      .toFixed(2)).toEqual((40.40).toFixed(2));

    scope.rate = 'F';
    expect(scope.priceExact(10, startDate, endDate)
      .toFixed(2)).toEqual((50.80).toFixed(2));

    scope.tariff = 'classic';

    scope.rate = 'A';
    expect(scope.priceExact(10, startDate, endDate)
      .toFixed(2)).toEqual((16.00).toFixed(2));
    
    scope.rate = 'B';
    expect(scope.priceExact(10, startDate, endDate)
      .toFixed(2)).toEqual((24.20).toFixed(2));
    
    scope.rate = 'C';
    expect(scope.priceExact(10, startDate, endDate)
      .toFixed(2)).toEqual((30.60).toFixed(2));
    
    scope.rate = 'D';
    expect(scope.priceExact(10, startDate, endDate)
      .toFixed(2)).toEqual((34.90).toFixed(2));
    
    scope.rate = 'F';
    expect(scope.priceExact(10, startDate, endDate)
      .toFixed(2)).toEqual((45.30).toFixed(2));
  });

  it('should calculate the correct price using simple time', function() {
    scope.tariff = 'basic';

    scope.rate = 'A';
    expect(scope.priceSimple(10, 10, 0, 0)
      .toFixed(2)).toEqual((18.20).toFixed(2));

    scope.rate = 'B';
    expect(scope.priceSimple(10, 10, 0, 0)
      .toFixed(2)).toEqual((29.70).toFixed(2));

    scope.rate = 'C';
    expect(scope.priceSimple(10, 10, 0, 0)
      .toFixed(2)).toEqual((36.10).toFixed(2));

    scope.rate = 'D';
    expect(scope.priceSimple(10, 10, 0, 0)
      .toFixed(2)).toEqual((40.40).toFixed(2));

    scope.rate = 'F';
    expect(scope.priceSimple(10, 10, 0, 0)
      .toFixed(2)).toEqual((50.80).toFixed(2));

    scope.tariff = 'classic';

    scope.rate = 'A';
    expect(scope.priceSimple(10, 10, 0, 0)
      .toFixed(2)).toEqual((16.00).toFixed(2));

    scope.rate = 'B';
    expect(scope.priceSimple(10, 10, 0, 0)
      .toFixed(2)).toEqual((24.20).toFixed(2));

    scope.rate = 'C';
    expect(scope.priceSimple(10, 10, 0, 0)
      .toFixed(2)).toEqual((30.60).toFixed(2));

    scope.rate = 'D';
    expect(scope.priceSimple(10, 10, 0, 0)
      .toFixed(2)).toEqual((34.90).toFixed(2));

    scope.rate = 'F';
    expect(scope.priceSimple(10, 10, 0, 0)
      .toFixed(2)).toEqual((45.30).toFixed(2));
  });

});
