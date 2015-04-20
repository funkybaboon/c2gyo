'use strict';

describe('Controller: FlinksterCtrl', function () {

  // load the controller's module
  beforeEach(module('c2gyoApp'));

  var FlinksterCtrl,
    scope, flinksterConfig;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _flinksterConfig_) {
    scope = $rootScope.$new();
    FlinksterCtrl = $controller('FlinksterCtrl', {
      $scope: scope
    });
    flinksterConfig = _flinksterConfig_;
  }));




  it('should calculate the correct price using the datetimepicker', function() {
    scope.rental.startDate = new moment().startOf('hour').hour(7).isoWeekday(1);
    scope.rental.endDate = scope.rental.startDate.clone().add(10, 'h');

    scope.rental.tab = 'exact';
    scope.rental.distance = 10;

    scope.rate.tariff = 'bundesweit';

    var testdata = {
      bundesweit: {
        sonder: '26.00',
        mini: '24.00',
        klein: '48.30',
        kompakt: '57.70',
        mittel: '66.90',
        transporter: '75.90'
      }
    };

    for( var carClass in testdata.bundesweit) {
      scope.rate.carClass = carClass;
      var expectedPrice = testdata.bundesweit[carClass];
      expect(scope.price().toFixed(2)).toEqual(expectedPrice);
    }

    scope.rate.carClass = 'sonder';
    expect(scope.price().toFixed(2)).toEqual((26.00).toFixed(2));

    scope.rate.carClass = 'mini';
    expect(scope.price().toFixed(2)).toEqual((24.00).toFixed(2));

    scope.rate.carClass = 'klein';
    expect(scope.price().toFixed(2)).toEqual((48.30).toFixed(2));

    scope.rate.carClass = 'kompakt';
    expect(scope.price().toFixed(2)).toEqual((57.70).toFixed(2));

    scope.rate.carClass = 'mittel';
    expect(scope.price().toFixed(2)).toEqual((66.90).toFixed(2));

    scope.rate.carClass = 'transporter';
    expect(scope.price().toFixed(2)).toEqual((75.90).toFixed(2));

    scope.rate.tariff = 'lokal';

    scope.rate.carClass = 'sonder';
    expect(scope.price().toFixed(2)).toEqual((18.35).toFixed(2));

    scope.rate.carClass = 'mini';
    expect(scope.price().toFixed(2)).toEqual((18.35).toFixed(2));

    scope.rate.carClass = 'klein';
    expect(scope.price().toFixed(2)).toEqual((23.85).toFixed(2));

    scope.rate.carClass = 'kompakt';
    expect(scope.price().toFixed(2)).toEqual((28.35).toFixed(2));

    scope.rate.carClass = 'mittel';
    expect(scope.price().toFixed(2)).toEqual((42.40).toFixed(2));

    scope.rate.carClass = 'transporter';
    expect(scope.price().toFixed(2)).toEqual((42.40).toFixed(2));

  });


});
