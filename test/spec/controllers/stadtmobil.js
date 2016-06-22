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

            scope.rental.stadtmobil.tariff = tariff;
            scope.rental.stadtmobil.carclass = carclass;
            expect(scope.price().toFixed(2)).toEqual(expectedPrice);
          });
        })(tariff, carclass, expectedPrice);
      }
    }
  };

  describe(' tests with exact start and end date', function() {

    describe(
      'should calculate the correct price with 10km distance and a 10 hour' +
      'lease',
      function() {
        var testdata = {
          start: '2016-05-24 07:00',
          end: '2016-05-24 17:00',
          tab: 'tabExact',
          distance: 10,
          expectedPrices: {
            basic: {
              a: '18.20',
              b: '29.70',
              c: '36.10',
              d: '40.40',
              f: '50.80'
            },
            classic: {
              a: '16.00',
              b: '24.20',
              c: '30.60',
              d: '34.90',
              f: '45.30'
            },
            business: {
              a: '14.70',
              b: '15.30',
              c: '21.20',
              d: '32.50',
              f: '40.70'
            }
          }
        };
        test(testdata);
      }
    );

    describe(
      'should calculate the correct price with 10km distance and a 36 hour ' +
      'lease',
      function() {
        var testdata = {
          start: '2016-05-24 00:00',
          end: '2016-05-25 12:00',
          tab: 'tabExact',
          distance: 10,
          expectedPrices: {
            basic: {
              a: '36.20',
              b: '46.20',
              c: '56.60',
              d: '68.90',
              f: '90.30'
            },
            classic: {
              a: '30.00',
              b: '38.20',
              c: '48.60',
              d: '60.90',
              f: '82.30'
            },
            business: {
              a: '28.20',
              b: '30.20',
              c: '39.30',
              d: '56.50',
              f: '75.70'
            }
          }
        };
        test(testdata);
      }
    );
  });

  describe('should calculate the correct price using simple time', function() {

    describe(
      'should calculate the correct price with 10km distance and a 10 hour ' +
      'lease',
      function() {
        var testdata = {
          timeHours: '10',
          timeDays: '0',
          timeWeeks: '0',
          tab: 'tabSimple',
          distance: 10,
          expectedPrices: {
            basic: {
              a: '18.20',
              b: '29.70',
              c: '36.10',
              d: '40.40',
              f: '50.80'
            },
            classic: {
              a: '16.00',
              b: '24.20',
              c: '30.60',
              d: '34.90',
              f: '45.30'
            },
            business: {
              a: '14.70',
              b: '20.70',
              c: '24.80',
              d: '32.50',
              f: '40.70'
            }
          }
        };
        test(testdata);
      });

    describe(
      'should calculate the correct price for 50 km',
      function() {
        var testdata = {
          timeHours: '0',
          timeDays: '0',
          timeWeeks: '0',
          tab: 'tabSimple',
          distance: 50,
          expectedPrices: {
            basic: {
              a: '11.00',
              b: '13.50',
              c: '15.50',
              d: '17.00',
              f: '19.00'
            },
            classic: {
              a: '10.00',
              b: '11.00',
              c: '13.00',
              d: '14.50',
              f: '16.50'
            },
            studi: {
              a: '10.00',
              b: '11.00',
              c: '13.00',
              d: '14.50',
              f: '16.50'
            },
            business: {
              a: '8.50',
              b: '8.50',
              c: '9.00',
              d: '12.50',
              f: '13.50'
            }
          }
        };
        test(testdata);
      });

    describe(
      'should calculate the correct price for 150 km',
      function() {
        var testdata = {
          timeHours: '0',
          timeDays: '0',
          timeWeeks: '0',
          tab: 'tabSimple',
          distance: 150,
          expectedPrices: {
            basic: {
              a: '31.00',
              b: '37.50',
              c: '42.50',
              d: '46.50',
              f: '51.50'
            },
            classic: {
              a: '29.00',
              b: '31.50',
              c: '36.50',
              d: '41.50',
              f: '46.50'
            },
            studi: {
              a: '29.00',
              b: '31.50',
              c: '36.50',
              d: '41.50',
              f: '46.50'
            },
            business: {
              a: '25.50',
              b: '25.50',
              c: '27.00',
              d: '37.50',
              f: '40.50'
            }
          }
        };
        test(testdata);
      });

    describe(
      'should calculate the correct price for 750 km',
      function() {
        var testdata = {
          timeHours: '0',
          timeDays: '0',
          timeWeeks: '0',
          tab: 'tabSimple',
          distance: 750,
          expectedPrices: {
            basic: {
              a: '139.00',
              b: '161.00',
              c: '177.50',
              d: '196.50',
              f: '213.50'
            },
            classic: {
              a: '137.00',
              b: '144.00',
              c: '160.50',
              d: '191.50',
              f: '208.50'
            },
            studi: {
              a: '137.00',
              b: '144.00',
              c: '160.50',
              d: '191.50',
              f: '208.50'
            },
            business: {
              a: '127.50',
              b: '127.50',
              c: '135.00',
              d: '187.50',
              f: '202.50'
            }
          }
        };
        test(testdata);
      });

  });

});
