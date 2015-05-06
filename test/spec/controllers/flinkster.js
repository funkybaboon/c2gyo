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
            scope.rental.startDate = new moment(testdata.start, 'YYYY-MM-DD HH:mm');
            scope.rental.endDate = new moment(testdata.end, 'YYYY-MM-DD HH:mm');

            scope.rental.tab = testdata.tab;
            scope.rental.distance = testdata.distance;

            scope.rental.airport = false || testdata.airport;

            scope.rate.tariff = tariff;
            scope.rate.carClass = carClass;
            expect(scope.price().toFixed(2)).toEqual(expectedPrice);
          });
        })(tariff, carClass, expectedPrice);
      }
    }
  };

  describe (
    'should calculate the correct price with 10km distance and a 8 hour lease' +
    ' between 2 time zones',
    function () {
    var testdata = {
      start: '2010-04-20 04:00',
      end: '2010-04-20 12:00',
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

  describe ('should calculate the correct price with 10km distance and a 12 ' +
  'hour lease triggering the price for a day',
    function () {
    var testdata = {
      start: '2010-04-20 08:00',
      end: '2010-04-20 20:00',
      tab: 'exact',
      distance: 10,
      expectedPrices: {
        bundesweit: {
          klein: '51.80',
          kompakt: '61.80',
          mittel: '72.00',
          transporter: '82.00'
        },
        lokal: {
          sonder: '22.10',
          mini: '22.10',
          klein: '27.10',
          kompakt: '32.10',
          mittel: '42.40',
          transporter: '42.40'
        }
      }
    };
    test(testdata);
  });

  describe ('should calculate the correct price with 10km distance and a 19 ' +
  'hour lease triggering the price for a day',
    function () {
    var testdata = {
      start: '2010-04-20 03:00',
      end: '2010-04-20 22:00',
      tab: 'exact',
      distance: 10,
      expectedPrices: {
        bundesweit: {
          sonder: '42.00',
          mini: '40.80'
        }
      }
    };
    test(testdata);
  });

  describe ('should calculate the correct price with 10km distance and a 36 ' +
    'hour lease triggering the price for a day and a second day',
    function () {
      var testdata = {
        start: '2010-04-20 08:00',
        end: '2010-04-21 20:00',
        tab: 'exact',
        distance: 10,
        expectedPrices: {
          bundesweit: {
            klein: '80.80',
            kompakt: '100.80',
            mittel: '121.00',
            transporter: '141.00'
          }
        }
      };
      test(testdata);
    });

  describe ('should calculate the correct price with 10km distance and a 43 ' +
    'hour lease triggering the price for a day and a second day',
    function () {
      var testdata = {
        start: '2010-04-20 03:00',
        end: '2010-04-21 22:00',
        tab: 'exact',
        distance: 10,
        expectedPrices: {
          bundesweit: {
            sonder: '71.00',
            mini: '69.80'
          }
        }
      };
      test(testdata);
    });

  describe (
    'should calculate the correct price with 10km distance and a 8 hour lease' +
    ' triggering the price for a week',
    function () {
      var testdata = {
        start: '2010-04-20 04:00',
        end: '2010-04-26 10:00',
        tab: 'exact',
        distance: 10,
        expectedPrices: {
          lokal: {
            sonder: '122.60',
            mini: '122.60',
            klein: '132.60',
            kompakt: '162.60',
            mittel: '252.90',
            transporter: '252.90'
          }
        }
      };
      test(testdata);
    });

  describe (
    'should calculate the correct price with 10km distance and a 8 hour lease' +
    ' between 2 time zones and an airport lease',
    function () {
      var testdata = {
        start: '2010-04-20 04:00',
        end: '2010-04-20 12:00',
        tab: 'exact',
        distance: 10,
        airport: true,
        expectedPrices: {
          bundesweit: {
            sonder: '22.00',
            mini: '20.80',
            klein: '34.30',
            kompakt: '41.30',
            mittel: '46.50',
            transporter: '51.50'
          }
        }
      };
      test(testdata);
    });


});
