'use strict';

describe('Controller: SmCtrl', function() {

  // load the controller's module
  beforeEach(module('c2gyoApp'));

  var SmCtrl;
  var scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    SmCtrl = $controller('StadtmobilCtrl', {
      $scope: scope
    });
  }));

  it('should calculate the correct price using the datetimepicker', function() {
    scope.rental.startDate = new moment().startOf('hour').hour(7).isoWeekday(1);
    scope.rental.endDate = scope.rental.startDate.clone().add(10, 'h');

    scope.rental.stadtmobil.tariff = 'basic';
    scope.rental.tab = 'exact';
    scope.rental.distance = 10;

    scope.rental.carClass.stadtmobil = 'A';
    expect(scope.price().toFixed(2)).toEqual((18.20).toFixed(2));

    scope.rental.carClass.stadtmobil = 'B';
    expect(scope.price().toFixed(2)).toEqual((29.70).toFixed(2));

    scope.rental.carClass.stadtmobil = 'C';
    expect(scope.price().toFixed(2)).toEqual((36.10).toFixed(2));

    scope.rental.carClass.stadtmobil = 'D';
    expect(scope.price().toFixed(2)).toEqual((40.40).toFixed(2));

    scope.rental.carClass.stadtmobil = 'F';
    expect(scope.price().toFixed(2)).toEqual((50.80).toFixed(2));

    scope.rental.stadtmobil.tariff = 'classic';

    scope.rental.carClass.stadtmobil = 'A';
    expect(scope.price().toFixed(2)).toEqual((16.00).toFixed(2));

    scope.rental.carClass.stadtmobil = 'B';
    expect(scope.price().toFixed(2)).toEqual((24.20).toFixed(2));

    scope.rental.carClass.stadtmobil = 'C';
    expect(scope.price().toFixed(2)).toEqual((30.60).toFixed(2));

    scope.rental.carClass.stadtmobil = 'D';
    expect(scope.price().toFixed(2)).toEqual((34.90).toFixed(2));

    scope.rental.carClass.stadtmobil = 'F';
    expect(scope.price().toFixed(2)).toEqual((45.30).toFixed(2));

    scope.rental.stadtmobil.tariff = 'business';

    scope.rental.carClass.stadtmobil = 'A';
    expect(scope.price().toFixed(2)).toEqual((14.70).toFixed(2));

    scope.rental.carClass.stadtmobil = 'B';
    expect(scope.price().toFixed(2)).toEqual((15.30).toFixed(2));

    scope.rental.carClass.stadtmobil = 'C';
    expect(scope.price().toFixed(2)).toEqual((21.20).toFixed(2));

    scope.rental.carClass.stadtmobil = 'D';
    expect(scope.price().toFixed(2)).toEqual((32.50).toFixed(2));

    scope.rental.carClass.stadtmobil = 'F';
    expect(scope.price().toFixed(2)).toEqual((40.70).toFixed(2));
  });

  it('should calculate the correct price using simple time', function() {
    scope.rental.timeHours = 10;
    scope.rental.timeDays = 0;
    scope.rental.timeWeeks = 0;

    scope.rental.stadtmobil.tariff = 'basic';
    scope.rental.tab = 'simple';
    scope.rental.distance = 10;

    scope.rental.carClass.stadtmobil = 'A';
    expect(scope.price().toFixed(2)).toEqual((18.20).toFixed(2));

    scope.rental.carClass.stadtmobil = 'B';
    expect(scope.price().toFixed(2)).toEqual((29.70).toFixed(2));

    scope.rental.carClass.stadtmobil = 'C';
    expect(scope.price().toFixed(2)).toEqual((36.10).toFixed(2));

    scope.rental.carClass.stadtmobil = 'D';
    expect(scope.price().toFixed(2)).toEqual((40.40).toFixed(2));

    scope.rental.carClass.stadtmobil = 'F';
    expect(scope.price().toFixed(2)).toEqual((50.80).toFixed(2));

    scope.rental.stadtmobil.tariff = 'classic';

    scope.rental.carClass.stadtmobil = 'A';
    expect(scope.price().toFixed(2)).toEqual((16.00).toFixed(2));

    scope.rental.carClass.stadtmobil = 'B';
    expect(scope.price().toFixed(2)).toEqual((24.20).toFixed(2));

    scope.rental.carClass.stadtmobil = 'C';
    expect(scope.price().toFixed(2)).toEqual((30.60).toFixed(2));

    scope.rental.carClass.stadtmobil = 'D';
    expect(scope.price().toFixed(2)).toEqual((34.90).toFixed(2));

    scope.rental.carClass.stadtmobil = 'F';
    expect(scope.price().toFixed(2)).toEqual((45.30).toFixed(2));

    scope.rental.stadtmobil.tariff = 'business';

    scope.rental.carClass.stadtmobil = 'A';
    expect(scope.price().toFixed(2)).toEqual((14.70).toFixed(2));

    scope.rental.carClass.stadtmobil = 'B';
    expect(scope.price().toFixed(2)).toEqual((20.70).toFixed(2));

    scope.rental.carClass.stadtmobil = 'C';
    expect(scope.price().toFixed(2)).toEqual((24.80).toFixed(2));

    scope.rental.carClass.stadtmobil = 'D';
    expect(scope.price().toFixed(2)).toEqual((32.50).toFixed(2));

    scope.rental.carClass.stadtmobil = 'F';
    expect(scope.price().toFixed(2)).toEqual((40.70).toFixed(2));

  });

  it('should calculate the correct price for 50 km', function() {
    scope.rental.tab = 'simple';
    scope.rental.distance = 50;

    scope.rental.stadtmobil.tariff = 'classic';

    scope.rental.carClass.stadtmobil = 'A';
    expect(scope.getFeeDistance().toFixed(2)).toEqual((10.00).toFixed(2));

    scope.rental.carClass.stadtmobil = 'B';
    expect(scope.getFeeDistance().toFixed(2)).toEqual((11.00).toFixed(2));

    scope.rental.carClass.stadtmobil = 'C';
    expect(scope.getFeeDistance().toFixed(2)).toEqual((13.00).toFixed(2));

    scope.rental.carClass.stadtmobil = 'D';
    expect(scope.getFeeDistance().toFixed(2)).toEqual((14.50).toFixed(2));

    scope.rental.carClass.stadtmobil = 'F';
    expect(scope.getFeeDistance().toFixed(2)).toEqual((16.50).toFixed(2));

    scope.rental.stadtmobil.tariff = 'basic';

    scope.rental.carClass.stadtmobil = 'A';
    expect(scope.getFeeDistance().toFixed(2)).toEqual((11.00).toFixed(2));

    scope.rental.carClass.stadtmobil = 'B';
    expect(scope.getFeeDistance().toFixed(2)).toEqual((13.50).toFixed(2));

    scope.rental.carClass.stadtmobil = 'C';
    expect(scope.getFeeDistance().toFixed(2)).toEqual((15.50).toFixed(2));

    scope.rental.carClass.stadtmobil = 'D';
    expect(scope.getFeeDistance().toFixed(2)).toEqual((17.00).toFixed(2));

    scope.rental.carClass.stadtmobil = 'F';
    expect(scope.getFeeDistance().toFixed(2)).toEqual((19.00).toFixed(2));

    scope.rental.stadtmobil.tariff = 'studi';

    scope.rental.carClass.stadtmobil = 'A';
    expect(scope.getFeeDistance().toFixed(2)).toEqual((10.00).toFixed(2));

    scope.rental.carClass.stadtmobil = 'B';
    expect(scope.getFeeDistance().toFixed(2)).toEqual((11.00).toFixed(2));

    scope.rental.carClass.stadtmobil = 'C';
    expect(scope.getFeeDistance().toFixed(2)).toEqual((13.00).toFixed(2));

    scope.rental.carClass.stadtmobil = 'D';
    expect(scope.getFeeDistance().toFixed(2)).toEqual((14.50).toFixed(2));

    scope.rental.carClass.stadtmobil = 'F';
    expect(scope.getFeeDistance().toFixed(2)).toEqual((16.50).toFixed(2));

    scope.rental.stadtmobil.tariff = 'business';

    scope.rental.carClass.stadtmobil = 'A';
    expect(scope.getFeeDistance().toFixed(2)).toEqual((8.50).toFixed(2));

    scope.rental.carClass.stadtmobil = 'B';
    expect(scope.getFeeDistance().toFixed(2)).toEqual((8.50).toFixed(2));

    scope.rental.carClass.stadtmobil = 'C';
    expect(scope.getFeeDistance().toFixed(2)).toEqual((9.00).toFixed(2));

    scope.rental.carClass.stadtmobil = 'D';
    expect(scope.getFeeDistance().toFixed(2)).toEqual((12.50).toFixed(2));

    scope.rental.carClass.stadtmobil = 'F';
    expect(scope.getFeeDistance().toFixed(2)).toEqual((13.50).toFixed(2));

  });

  it('should calculate the correct price for 150 km', function() {
    scope.rental.tab = 'simple';
    scope.rental.distance = 150;

    scope.rental.stadtmobil.tariff = 'classic';

    scope.rental.carClass.stadtmobil = 'A';
    expect(scope.getFeeDistance().toFixed(2)).toEqual((29.00).toFixed(2));

    scope.rental.carClass.stadtmobil = 'B';
    expect(scope.getFeeDistance().toFixed(2)).toEqual((31.50).toFixed(2));

    scope.rental.carClass.stadtmobil = 'C';
    expect(scope.getFeeDistance().toFixed(2)).toEqual((36.50).toFixed(2));

    scope.rental.carClass.stadtmobil = 'D';
    expect(scope.getFeeDistance().toFixed(2)).toEqual((41.50).toFixed(2));

    scope.rental.carClass.stadtmobil = 'F';
    expect(scope.getFeeDistance().toFixed(2)).toEqual((46.50).toFixed(2));

    scope.rental.stadtmobil.tariff = 'basic';

    scope.rental.carClass.stadtmobil = 'A';
    expect(scope.getFeeDistance().toFixed(2)).toEqual((31.00).toFixed(2));

    scope.rental.carClass.stadtmobil = 'B';
    expect(scope.getFeeDistance().toFixed(2)).toEqual((37.50).toFixed(2));

    scope.rental.carClass.stadtmobil = 'C';
    expect(scope.getFeeDistance().toFixed(2)).toEqual((42.50).toFixed(2));

    scope.rental.carClass.stadtmobil = 'D';
    expect(scope.getFeeDistance().toFixed(2)).toEqual((46.50).toFixed(2));

    scope.rental.carClass.stadtmobil = 'F';
    expect(scope.getFeeDistance().toFixed(2)).toEqual((51.50).toFixed(2));

    scope.rental.stadtmobil.tariff = 'studi';

    scope.rental.carClass.stadtmobil = 'A';
    expect(scope.getFeeDistance().toFixed(2)).toEqual((29.00).toFixed(2));

    scope.rental.carClass.stadtmobil = 'B';
    expect(scope.getFeeDistance().toFixed(2)).toEqual((31.50).toFixed(2));

    scope.rental.carClass.stadtmobil = 'C';
    expect(scope.getFeeDistance().toFixed(2)).toEqual((36.50).toFixed(2));

    scope.rental.carClass.stadtmobil = 'D';
    expect(scope.getFeeDistance().toFixed(2)).toEqual((41.50).toFixed(2));

    scope.rental.carClass.stadtmobil = 'F';
    expect(scope.getFeeDistance().toFixed(2)).toEqual((46.50).toFixed(2));

    scope.rental.stadtmobil.tariff = 'business';

    scope.rental.carClass.stadtmobil = 'A';
    expect(scope.getFeeDistance().toFixed(2)).toEqual((25.50).toFixed(2));

    scope.rental.carClass.stadtmobil = 'B';
    expect(scope.getFeeDistance().toFixed(2)).toEqual((25.50).toFixed(2));

    scope.rental.carClass.stadtmobil = 'C';
    expect(scope.getFeeDistance().toFixed(2)).toEqual((27.00).toFixed(2));

    scope.rental.carClass.stadtmobil = 'D';
    expect(scope.getFeeDistance().toFixed(2)).toEqual((37.50).toFixed(2));

    scope.rental.carClass.stadtmobil = 'F';
    expect(scope.getFeeDistance().toFixed(2)).toEqual((40.50).toFixed(2));

  });

  it('should calculate the correct price for 750 km', function() {
    scope.rental.tab = 'simple';
    scope.rental.distance = 750;

    scope.rental.stadtmobil.tariff = 'classic';

    scope.rental.carClass.stadtmobil = 'A';
    expect(scope.getFeeDistance().toFixed(2)).toEqual((137.00).toFixed(2));

    scope.rental.carClass.stadtmobil = 'B';
    expect(scope.getFeeDistance().toFixed(2)).toEqual((144.00).toFixed(2));

    scope.rental.carClass.stadtmobil = 'C';
    expect(scope.getFeeDistance().toFixed(2)).toEqual((160.50).toFixed(2));

    scope.rental.carClass.stadtmobil = 'D';
    expect(scope.getFeeDistance().toFixed(2)).toEqual((191.50).toFixed(2));

    scope.rental.carClass.stadtmobil = 'F';
    expect(scope.getFeeDistance().toFixed(2)).toEqual((208.50).toFixed(2));

    scope.rental.stadtmobil.tariff = 'basic';

    scope.rental.carClass.stadtmobil = 'A';
    expect(scope.getFeeDistance().toFixed(2)).toEqual((139.00).toFixed(2));

    scope.rental.carClass.stadtmobil = 'B';
    expect(scope.getFeeDistance().toFixed(2)).toEqual((161.00).toFixed(2));

    scope.rental.carClass.stadtmobil = 'C';
    expect(scope.getFeeDistance().toFixed(2)).toEqual((177.50).toFixed(2));

    scope.rental.carClass.stadtmobil = 'D';
    expect(scope.getFeeDistance().toFixed(2)).toEqual((196.50).toFixed(2));

    scope.rental.carClass.stadtmobil = 'F';
    expect(scope.getFeeDistance().toFixed(2)).toEqual((213.50).toFixed(2));

    scope.rental.stadtmobil.tariff = 'studi';

    scope.rental.carClass.stadtmobil = 'A';
    expect(scope.getFeeDistance().toFixed(2)).toEqual((137.00).toFixed(2));

    scope.rental.carClass.stadtmobil = 'B';
    expect(scope.getFeeDistance().toFixed(2)).toEqual((144.00).toFixed(2));

    scope.rental.carClass.stadtmobil = 'C';
    expect(scope.getFeeDistance().toFixed(2)).toEqual((160.50).toFixed(2));

    scope.rental.carClass.stadtmobil = 'D';
    expect(scope.getFeeDistance().toFixed(2)).toEqual((191.50).toFixed(2));

    scope.rental.carClass.stadtmobil = 'F';
    expect(scope.getFeeDistance().toFixed(2)).toEqual((208.50).toFixed(2));

    scope.rental.stadtmobil.tariff = 'business';

    scope.rental.carClass.stadtmobil = 'A';
    expect(scope.getFeeDistance().toFixed(2)).toEqual((127.50).toFixed(2));

    scope.rental.carClass.stadtmobil = 'B';
    expect(scope.getFeeDistance().toFixed(2)).toEqual((127.50).toFixed(2));

    scope.rental.carClass.stadtmobil = 'C';
    expect(scope.getFeeDistance().toFixed(2)).toEqual((135.00).toFixed(2));

    scope.rental.carClass.stadtmobil = 'D';
    expect(scope.getFeeDistance().toFixed(2)).toEqual((187.50).toFixed(2));

    scope.rental.carClass.stadtmobil = 'F';
    expect(scope.getFeeDistance().toFixed(2)).toEqual((202.50).toFixed(2));

  });

  it('should calculate the correct price for 1.5 days', function() {
    scope.rental.startDate = new moment().startOf('hour').hour(0).isoWeekday(1);
    scope.rental.endDate = scope.rental.startDate.clone().add(36, 'h');

    scope.rental.stadtmobil.tariff = 'basic';
    scope.rental.tab = 'exact';
    scope.rental.distance = 10;

    scope.rental.carClass.stadtmobil = 'A';
    expect(scope.price().toFixed(2)).toEqual((36.20).toFixed(2));

    scope.rental.carClass.stadtmobil = 'B';
    expect(scope.price().toFixed(2)).toEqual((46.20).toFixed(2));

    scope.rental.carClass.stadtmobil = 'C';
    expect(scope.price().toFixed(2)).toEqual((56.60).toFixed(2));

    scope.rental.carClass.stadtmobil = 'D';
    expect(scope.price().toFixed(2)).toEqual((68.90).toFixed(2));

    scope.rental.carClass.stadtmobil = 'F';
    expect(scope.price().toFixed(2)).toEqual((90.30).toFixed(2));

    scope.rental.stadtmobil.tariff = 'classic';

    scope.rental.carClass.stadtmobil = 'A';
    expect(scope.price().toFixed(2)).toEqual((30.00).toFixed(2));

    scope.rental.carClass.stadtmobil = 'B';
    expect(scope.price().toFixed(2)).toEqual((38.20).toFixed(2));

    scope.rental.carClass.stadtmobil = 'C';
    expect(scope.price().toFixed(2)).toEqual((48.60).toFixed(2));

    scope.rental.carClass.stadtmobil = 'D';
    expect(scope.price().toFixed(2)).toEqual((60.90).toFixed(2));

    scope.rental.carClass.stadtmobil = 'F';
    expect(scope.price().toFixed(2)).toEqual((82.30).toFixed(2));

    scope.rental.stadtmobil.tariff = 'business';

    scope.rental.carClass.stadtmobil = 'A';
    expect(scope.price().toFixed(2)).toEqual((28.20).toFixed(2));

    scope.rental.carClass.stadtmobil = 'B';
    expect(scope.price().toFixed(2)).toEqual((30.20).toFixed(2));

    scope.rental.carClass.stadtmobil = 'C';
    expect(scope.price().toFixed(2)).toEqual((39.30).toFixed(2));

    scope.rental.carClass.stadtmobil = 'D';
    expect(scope.price().toFixed(2)).toEqual((56.50).toFixed(2));

    scope.rental.carClass.stadtmobil = 'F';
    expect(scope.price().toFixed(2)).toEqual((75.70).toFixed(2));
  });

});
