'use strict';

describe('Controller: Car2goCtrl', function() {

  // load the controller's module
  beforeEach(module('c2gyoApp'));

  var Car2goCtrl;
  var scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    Car2goCtrl = $controller('Car2goCtrl', {
      $scope: scope
    });
  }));

  var test = function(testdata) {
    for (var tariff in testdata.expectedPrices) {
      for (var carclass in testdata.expectedPrices[tariff]) {
        var expectedPrice = testdata.expectedPrices[tariff][carclass];
        (function(tariff, carclass, expectedPrice) {
          it('tariff: ' + tariff + ', carclass: ' + carclass, function() {
            if (testdata.tab === 'tabExact') {
              scope.rental.startDate = new moment(
                testdata.start, 'YYYY-MM-DD HH:mm');
              scope.rental.endDate = new moment(
                testdata.end, 'YYYY-MM-DD HH:mm');
            } else {
              scope.rental.timeHours = parseInt(testdata.timeHours);
              scope.rental.timeDays = parseInt(testdata.timeDays);
            }

            scope.rental.tab = testdata.tab;
            scope.rental.distance = testdata.distance;

            scope.rental.car2go.tariff = tariff;
            scope.rental.car2go.carclass = carclass;
            expect(scope.price()).toEqual(expectedPrice);
          });
        })(tariff, carclass, expectedPrice);
      }
    }
  };

  describe (' tests with exact start and end date', function() {

    describe (
      'should calculate the correct price with 222km distance and a 8 hour ' +
      'lease',
      function() {
        var testdata = {
          start: '2010-04-20 04:00',
          end: '2010-04-20 12:00',
          tab: 'tabExact',
          distance: 222,
          expectedPrices: {
            standard: {
              smart: 79 + 22 * 0.29,
              mercedesbenz1: 99 + 22 * 0.29,
              mercedesbenz2: 109 + 22 * 0.29
            }
          }
        };
        test(testdata);
      });

    describe (
      'should calculate the correct price with 22km distance and a 4 hour ' +
      '30 minutes lease',
      function() {
        var testdata = {
          start: '2010-04-20 04:00',
          end: '2010-04-20 8:30',
          tab: 'tabExact',
          distance: 22,
          expectedPrices: {
            standard: {
              smart: 4 * 14.99 + 30 * 0.29,
              mercedesbenz1: 4 *  16.99 + 30 * 0.31,
              mercedesbenz2: 4 * 19.99 + 30 * 0.34
            }
          }
        };
        test(testdata);
      });

    describe (
      'should round the price to an hour with 22km distance and a 59 minutes' +
      ' lease',
      function() {
        var testdata = {
          start: '2010-04-20 04:00',
          end: '2010-04-20 4:59',
          tab: 'tabExact',
          distance: 22,
          expectedPrices: {
            standard: {
              smart: 14.99,
              mercedesbenz1: 16.99,
              mercedesbenz2: 19.99
            }
          }
        };
        test(testdata);
      });

  });

});
