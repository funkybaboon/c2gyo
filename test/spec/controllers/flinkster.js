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


  var test = function( testdata ) {
    for (var tariff in testdata.expectedPrices) {
      for (var carClass in testdata.expectedPrices[tariff]) {
        var expectedPrice = testdata.expectedPrices[tariff][carClass];
        (function(tariff, carClass, expectedPrice){
          it('tariff: ' + tariff + ', carClass: ' + carClass, function () {
            scope.rental.startDate = new moment(testdata.start, "YYYY-MM-DD HH:mm");
            scope.rental.endDate = new moment(testdata.end, "YYYY-MM-DD HH:mm");

            scope.rental.tab = testdata.tab;
            scope.rental.distance = testdata.distance;

            scope.rate.tariff = tariff;
            scope.rate.carClass = carClass;
            expect(scope.price().toFixed(2)).toEqual(expectedPrice);
          });
        })(tariff, carClass, expectedPrice);
      }
    }
  };

  describe ('should calculate the correct price with 10km distance and a 8 hour lease between 2 time zones', function () {

    var testdata = {
      start: "2010-04-20 04:00",
      end: "2010-04-20 12:00",
      tab: 'exact',
      distance: 10,
      expectedPrices: {
        bundesweit: {
          sonder: '18.00',
          mini: '17.00',
          klein: '27.80',
          kompakt: '33.40',
          mittel: '37.60',
          transporter: '41.60'
        },
        lokal: {
          sonder: '9.60',
          mini: '9.60',
          klein: '15.60',
          kompakt: '17.60',
          mittel: '27.90',
          transporter: '27.90'
        }
      }
    };

    test(testdata);

  });

  describe ('should calculate the correct price with 10km distance and a 10 hour lease', function () {

    var testdata = {
      start: "2010-04-20 07:00",
      end: "2010-04-20 17:00",
      tab: 'exact',
      distance: 10,
      expectedPrices: {
        bundesweit: {
          sonder: '26.00',
          mini: '24.00',
          klein: '48.30',
          kompakt: '57.70',
          mittel: '66.90',
          transporter: '75.90'
        },
        lokal: {
          sonder: '18.35',
          mini: '18.35',
          klein: '23.85',
          kompakt: '28.35',
          mittel: '42.40',
          transporter: '42.40'
        }
      }
    };

    test(testdata);

  });

  it('should calculate the correct price using the datetimepicker', function() {
    scope.rental.startDate = new moment().startOf('hour').hour(7).isoWeekday(1);
    scope.rental.endDate = scope.rental.startDate.clone().add(10, 'h');

    scope.rental.tab = 'exact';
    scope.rental.distance = 10;

    scope.rate.tariff = 'bundesweit';

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
