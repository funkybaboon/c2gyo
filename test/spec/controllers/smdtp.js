'use strict';

describe('Controller: SmdtpCtrl', function() {

  // load the controller's module
  beforeEach(module('c2gyoApp'));

  var SmdtpCtrl;
  var scope;
  var smConfig;
  var stadtmobilRates;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope, _stadtmobilRates_, _smConfig_) {
    scope = $rootScope.$new();
    SmdtpCtrl = $controller('SmdtpCtrl', {
      $scope: scope
    });
    smConfig = _smConfig_;
    stadtmobilRates = _stadtmobilRates_;
  }));

  it('should calculate the correct price using the datetimepicker', function() {
    scope.startDate = new moment().hour(7);
    scope.endDate = scope.startDate.clone().add(10, 'h');

    scope.rate.tariff = 'basic';
    scope.tab = 'exact';
    scope.distance = 10;

    scope.rate.carClass = 'A';
    expect(scope.price().toFixed(2)).toEqual((18.20).toFixed(2));

    scope.rate.carClass = 'B';
    expect(scope.price().toFixed(2)).toEqual((29.70).toFixed(2));

    scope.rate.carClass = 'C';
    expect(scope.price().toFixed(2)).toEqual((36.10).toFixed(2));

    scope.rate.carClass = 'D';
    expect(scope.price().toFixed(2)).toEqual((40.40).toFixed(2));

    scope.rate.carClass = 'F';
    expect(scope.price().toFixed(2)).toEqual((50.80).toFixed(2));

    scope.rate.tariff = 'classic';

    scope.rate.carClass = 'A';
    expect(scope.price().toFixed(2)).toEqual((16.00).toFixed(2));

    scope.rate.carClass = 'B';
    expect(scope.price().toFixed(2)).toEqual((24.20).toFixed(2));

    scope.rate.carClass = 'C';
    expect(scope.price().toFixed(2)).toEqual((30.60).toFixed(2));

    scope.rate.carClass = 'D';
    expect(scope.price().toFixed(2)).toEqual((34.90).toFixed(2));

    scope.rate.carClass = 'F';
    expect(scope.price().toFixed(2)).toEqual((45.30).toFixed(2));
  });

  it('should calculate the correct price using simple time', function() {
    scope.distance = 10;

    scope.timeHours = 10;
    scope.timeDays = 0;
    scope.timeWeeks = 0;

    scope.rate.tariff = 'basic';
    scope.tab = 'exact';
    scope.distance = 10;

    scope.rate.carClass = 'A';
    expect(scope.price().toFixed(2)).toEqual((18.20).toFixed(2));

    scope.rate.carClass = 'B';
    expect(scope.price().toFixed(2)).toEqual((29.70).toFixed(2));

    scope.rate.carClass = 'C';
    expect(scope.price().toFixed(2)).toEqual((36.10).toFixed(2));

    scope.rate.carClass = 'D';
    expect(scope.price().toFixed(2)).toEqual((40.40).toFixed(2));

    scope.rate.carClass = 'F';
    expect(scope.price().toFixed(2)).toEqual((50.80).toFixed(2));

    scope.rate.tariff = 'classic';

    scope.rate.carClass = 'A';
    expect(scope.price().toFixed(2)).toEqual((16.00).toFixed(2));

    scope.rate.carClass = 'B';
    expect(scope.price().toFixed(2)).toEqual((24.20).toFixed(2));

    scope.rate.carClass = 'C';
    expect(scope.price().toFixed(2)).toEqual((30.60).toFixed(2));

    scope.rate.carClass = 'D';
    expect(scope.price().toFixed(2)).toEqual((34.90).toFixed(2));

    scope.rate.carClass = 'F';
    expect(scope.price().toFixed(2)).toEqual((45.30).toFixed(2));
  });

});