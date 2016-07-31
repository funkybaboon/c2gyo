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

            if (testdata.timeStanding) {
              scope.rental.timeStanding = testdata.timeStanding;
            }

            scope.rental.car2go.tariff = tariff;
            scope.rental.car2go.carclass = carclass;
            expect(scope.price()).toEqual(expectedPrice);
          });
        })(tariff, carclass, expectedPrice);
      }
    }
  };

  describe(' tests with exact start and end date', function() {

    describe(
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

    describe(
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
              mercedesbenz1: 4 * 16.99 + 30 * 0.31,
              mercedesbenz2: 4 * 19.99 + 30 * 0.34
            }
          }
        };
        test(testdata);
      });

    describe(
      'should calculate the price with 22km distance and a 59 ' +
      'minutes lease - rounding the price to a full hour',
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

    describe(
      'should calculate the price with 22km distance and a 6h ' +
      'lease - rounding the price to a full day',
      function() {
        var testdata = {
          start: '2010-04-20 04:00',
          end: '2010-04-20 10:00',
          tab: 'tabExact',
          distance: 22,
          expectedPrices: {
            standard: {
              smart: 79,
              mercedesbenz1: 99,
              mercedesbenz2: 109
            }
          }
        };
        test(testdata);
      });

    describe(
      'should calculate the price for carclass smart with with 22km distance ' +
      'and a 5h 59 minutes lease - rounding the price to an hour, then to a ' +
      'full day',
      function() {
        var testdata = {
          start: '2010-04-20 04:00',
          end: '2010-04-20 9:59',
          tab: 'tabExact',
          distance: 22,
          expectedPrices: {
            standard: {
              smart: 79,
              mercedesbenz1: 99,
              mercedesbenz2: 109
            }
          }
        };
        test(testdata);
      });

  });

  describe(' tests with exact start and end date and parking', function() {

    describe('tests with parking', function() {

      describe(
        'should calculate the correct price with 222km distance and a 4 hour ' +
        'lease and 20 minutes parking',
        function() {
          var testdata = {
            start: '2010-04-20 04:00',
            end: '2010-04-20 8:00',
            tab: 'tabExact',
            distance: 222,
            timeStanding: 20,
            expectedPrices: {
              standard: {
                smart: 4 * 14.99 + 22 * 0.29 + 20 * 0.19,
                mercedesbenz1: 4 * 16.99 + 22 * 0.29 + 20 * 0.19,
                mercedesbenz2: 4 * 19.99 + 22 * 0.29 + 20 * 0.19
              }
            }
          };
          test(testdata);
        });

      describe(
        'should calculate the correct price with 222km distance and a 4 hour ' +
        'lease and 79 minutes parking. Should not round to a 5th hour.',
        function() {
          var testdata = {
            start: '2010-04-20 04:00',
            end: '2010-04-20 8:00',
            tab: 'tabExact',
            distance: 22,
            timeStanding: 79,
            expectedPrices: {
              standard: {
                smart: 4 * 14.99 + 79 * 0.19,
                mercedesbenz1: 4 * 16.99 + 79 * 0.19,
                mercedesbenz2: 4 * 19.99 + 79 * 0.19
              }
            }
          };
          test(testdata);
        });

    });

    describe('tests with parking rounding to a full hour', function() {

      describe(
        'should calculate the price with 22km distance and a 51 minutes ' +
        'lease plus 2 minutes standing - rounding the price to a full ' +
        'hour in car class smart.',
        function() {
          var testdata = {
            start: '2010-04-20 04:00',
            end: '2010-04-20 4:51',
            tab: 'tabExact',
            distance: 22,
            timeStanding: 2,
            expectedPrices: {
              standard: {
                smart: 14.99
              }
            }
          };
          test(testdata);
        });

      describe(
        'should calculate the price with 22km distance and a 54 minutes ' +
        'lease plus 2 minutes standing - rounding the price to a full ' +
        'hour in car class mercedesbenz1.',
        function() {
          var testdata = {
            start: '2010-04-20 04:00',
            end: '2010-04-20 4:54',
            tab: 'tabExact',
            distance: 22,
            timeStanding: 2,
            expectedPrices: {
              standard: {
                mercedesbenz1: 16.99
              }
            }
          };
          test(testdata);
        });

      describe(
        'should calculate the price with 22km distance and a 58 minutes ' +
        'lease plus 2 minutes standing - rounding the price to a full ' +
        'hour in car class mercedesbenz2.',
        function() {
          var testdata = {
            start: '2010-04-20 04:00',
            end: '2010-04-20 4:58',
            tab: 'tabExact',
            distance: 22,
            timeStanding: 2,
            expectedPrices: {
              standard: {
                mercedesbenz2: 19.99
              }
            }
          };
          test(testdata);
        });

    });

    describe('tests with parking rounding to a full day', function() {

      describe(
        'should calculate the correct price with 222km distance and a 4 hour ' +
        'lease and 164 minutes parking. Should round to a day.',
        function() {
          var testdata = {
            start: '2010-04-20 04:00',
            end: '2010-04-20 8:00',
            tab: 'tabExact',
            distance: 22,
            timeStanding: 164,
            expectedPrices: {
              standard: {
                smart: 79,
                mercedesbenz1: 99,
                mercedesbenz2: 109
              }
            }
          };
          test(testdata);
        });

      describe(
        'should calculate the correct price with 22km distance and a 4 hour ' +
        'lease and 1201 minutes parking. Should round to a day and add one ' +
        'minute of parking for the next day.',
        function() {
          var testdata = {
            start: '2010-04-20 04:00',
            end: '2010-04-20 8:00',
            tab: 'tabExact',
            distance: 22,
            timeStanding: 1201,
            expectedPrices: {
              standard: {
                smart: 79 + 0.19,
                mercedesbenz1: 99 + 0.19,
                mercedesbenz2: 109 + 0.19
              }
            }
          };
          test(testdata);
        });

      describe(
        'should calculate the correct price with 0km distance and a 0 hour ' +
        'lease and 2881 minutes parking. Should round to two days and add ' +
        'one minute of parking for the third day.',
        function() {
          var testdata = {
            start: '2010-04-20 04:00',
            end: '2010-04-20 4:00',
            tab: 'tabExact',
            distance: 0,
            timeStanding: 2881,
            expectedPrices: {
              standard: {
                smart: 2 * 79 + 0.19,
                mercedesbenz1: 2 * 99 + 0.19,
                mercedesbenz2: 2 * 109 + 0.19
              }
            }
          };
          test(testdata);
        });

    });

    describe('tests with parking rounding to a full hour then a full day',
      function() {

        describe(
          'should calculate the price with 22km distance and a 5 hour and 51 ' +
          'minutes lease plus 2 minutes standing - rounding the price to a ' +
          'full hour in car class smart.',
          function() {
            var testdata = {
              start: '2010-04-20 04:00',
              end: '2010-04-20 9:51',
              tab: 'tabExact',
              distance: 22,
              timeStanding: 2,
              expectedPrices: {
                standard: {
                  smart: 79
                }
              }
            };
            test(testdata);
          });

        describe(
          'should calculate the price with 22km distance and a 5 hour 54 ' +
          'minutes lease plus 2 minutes standing - rounding the price to a ' +
          'full hour in car class mercedesbenz1.',
          function() {
            var testdata = {
              start: '2010-04-20 04:00',
              end: '2010-04-20 9:54',
              tab: 'tabExact',
              distance: 22,
              timeStanding: 2,
              expectedPrices: {
                standard: {
                  mercedesbenz1: 99
                }
              }
            };
            test(testdata);
          });

        describe(
          'should calculate the price with 22km distance and a 5 hour 58 ' +
          'minutes lease plus 2 minutes standing - rounding the price to a ' +
          'full hour in car class mercedesbenz2.',
          function() {
            var testdata = {
              start: '2010-04-20 04:00',
              end: '2010-04-20 9:58',
              tab: 'tabExact',
              distance: 22,
              timeStanding: 2,
              expectedPrices: {
                standard: {
                  mercedesbenz2: 109
                }
              }
            };
            test(testdata);
          });

      });

  });

});
