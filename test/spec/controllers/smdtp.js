'use strict';

describe('Controller: SmdtpCtrl', function() {

  // load the controller's module
  beforeEach(module('c2gyoApp'));

  var SmdtpCtrl;
  var scope;
  var smConfig;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope, _smConfig_) {
    scope = $rootScope.$new();
    SmdtpCtrl = $controller('SmdtpCtrl', {
      $scope: scope
    });
    smConfig = _smConfig_;
  }));

  it('should calculate the correct price using the datetimepicker', function() {
    scope.rental.startDate = new moment().startOf('hour').hour(7).isoWeekday(1);
    scope.rental.endDate = scope.rental.startDate.clone().add(10, 'h');

    scope.rate.tariff = 'basic';
    scope.rental.tab = 'exact';
    scope.rental.distance = 10;

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

    scope.rate.tariff = 'business';

    scope.rate.carClass = 'A';
    expect(scope.price().toFixed(2)).toEqual((14.70).toFixed(2));

    scope.rate.carClass = 'B';
    expect(scope.price().toFixed(2)).toEqual((15.30).toFixed(2));

    scope.rate.carClass = 'C';
    expect(scope.price().toFixed(2)).toEqual((21.20).toFixed(2));

    scope.rate.carClass = 'D';
    expect(scope.price().toFixed(2)).toEqual((32.50).toFixed(2));

    scope.rate.carClass = 'F';
    expect(scope.price().toFixed(2)).toEqual((40.70).toFixed(2));
  });

  it('should calculate the correct price using simple time', function() {
    scope.rental.timeHours = 10;
    scope.rental.timeDays = 0;
    scope.rental.timeWeeks = 0;

    scope.rate.tariff = 'basic';
    scope.rental.tab = 'simple';
    scope.rental.distance = 10;

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

    scope.rate.tariff = 'business';

    scope.rate.carClass = 'A';
    expect(scope.price().toFixed(2)).toEqual((14.70).toFixed(2));

    scope.rate.carClass = 'B';
    expect(scope.price().toFixed(2)).toEqual((20.70).toFixed(2));

    scope.rate.carClass = 'C';
    expect(scope.price().toFixed(2)).toEqual((24.80).toFixed(2));

    scope.rate.carClass = 'D';
    expect(scope.price().toFixed(2)).toEqual((32.50).toFixed(2));

    scope.rate.carClass = 'F';
    expect(scope.price().toFixed(2)).toEqual((40.70).toFixed(2));

  });

  it('should calculate the correct price for 50 km', function() {
    scope.rental.tab = 'simple';
    scope.rental.distance = 50;

    scope.rate.tariff = 'basic';

    scope.rate.carClass = 'A';
    expect(scope.getFeeDistance().toFixed(2)).toEqual((11.00).toFixed(2));

    scope.rate.carClass = 'B';
    expect(scope.getFeeDistance().toFixed(2)).toEqual((13.50).toFixed(2));

    scope.rate.carClass = 'C';
    expect(scope.getFeeDistance().toFixed(2)).toEqual((15.50).toFixed(2));

    scope.rate.carClass = 'D';
    expect(scope.getFeeDistance().toFixed(2)).toEqual((17.00).toFixed(2));

    scope.rate.carClass = 'F';
    expect(scope.getFeeDistance().toFixed(2)).toEqual((19.00).toFixed(2));

    scope.rate.tariff = 'classic';

    scope.rate.carClass = 'A';
    expect(scope.getFeeDistance().toFixed(2)).toEqual((10.00).toFixed(2));

    scope.rate.carClass = 'B';
    expect(scope.getFeeDistance().toFixed(2)).toEqual((11.00).toFixed(2));

    scope.rate.carClass = 'C';
    expect(scope.getFeeDistance().toFixed(2)).toEqual((13.00).toFixed(2));

    scope.rate.carClass = 'D';
    expect(scope.getFeeDistance().toFixed(2)).toEqual((14.50).toFixed(2));

    scope.rate.carClass = 'F';
    expect(scope.getFeeDistance().toFixed(2)).toEqual((16.50).toFixed(2));

    scope.rate.tariff = 'studi';

    scope.rate.carClass = 'A';
    expect(scope.getFeeDistance().toFixed(2)).toEqual((10.00).toFixed(2));

    scope.rate.carClass = 'B';
    expect(scope.getFeeDistance().toFixed(2)).toEqual((11.00).toFixed(2));

    scope.rate.carClass = 'C';
    expect(scope.getFeeDistance().toFixed(2)).toEqual((13.00).toFixed(2));

    scope.rate.carClass = 'D';
    expect(scope.getFeeDistance().toFixed(2)).toEqual((14.50).toFixed(2));

    scope.rate.carClass = 'F';
    expect(scope.getFeeDistance().toFixed(2)).toEqual((16.50).toFixed(2));

    scope.rate.tariff = 'business';

    scope.rate.carClass = 'A';
    expect(scope.getFeeDistance().toFixed(2)).toEqual((8.50).toFixed(2));

    scope.rate.carClass = 'B';
    expect(scope.getFeeDistance().toFixed(2)).toEqual((8.50).toFixed(2));

    scope.rate.carClass = 'C';
    expect(scope.getFeeDistance().toFixed(2)).toEqual((9.00).toFixed(2));

    scope.rate.carClass = 'D';
    expect(scope.getFeeDistance().toFixed(2)).toEqual((12.50).toFixed(2));

    scope.rate.carClass = 'F';
    expect(scope.getFeeDistance().toFixed(2)).toEqual((13.50).toFixed(2));

  });

});
