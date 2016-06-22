'use strict';

describe('Controller: BookndriveCtrl', function() {

  // load the controller's module
  beforeEach(module('c2gyoApp'));

  var BookndriveCtrl;
  var scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    BookndriveCtrl = $controller('BookndriveCtrl', {
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

            scope.rental.bookndrive.tariff = tariff;
            scope.rental.bookndrive.carclass = carclass;
            expect(scope.price().toFixed(2)).toEqual(expectedPrice);
          });
        })(tariff, carclass, expectedPrice);
      }
    }
  };

  describe (' tests with exact start and end date', function() {

    describe (
      'should calculate the correct price with 10km distance and a 8 hour ' +
      ' lease',
      function() {
      var testdata = {
        start: '2010-04-20 04:00',
        end: '2010-04-20 12:00',
        tab: 'tabExact',
        distance: 10,
        expectedPrices: {
          basic: {
            cityflitzer: '12.50',
            xs: '28.50',
            s: '36.70',
            m: '44.90',
            l: '53.40',
            reisexs: '28.50',
            reises: '32.70',
            reisem: '48.90',
            reisel: '63.20'
          },
          komfort: {
            cityflitzer: '11.50',
            xs: '26.70',
            s: '31.70',
            m: '35.90',
            l: '52.20',
            reisexs: '18.50',
            reises: '22.70',
            reisem: '28.90',
            reisel: '43.20'
          },
          abo: {
            cityflitzer: '11.50',
            xs: '15.50',
            s: '18.90',
            m: '23.90',
            l: '35.40',
            reisexs: '18.50',
            reises: '22.70',
            reisem: '28.90',
            reisel: '43.20'
          }
        }
      };
      test(testdata);
    });

    describe (
      'should calculate the correct price with 10km distance and a 16 hour ' +
      ' lease, triggering the price for a day',
      function() {
      var testdata = {
        start: '2010-04-20 04:00',
        end: '2010-04-20 20:00',
        tab: 'tabExact',
        distance: 10,
        expectedPrices: {
          basic: {
            cityflitzer: '20.50',
            xs: '34.50',
            s: '44.70',
            m: '54.90',
            l: '65.40',
            reisexs: '28.50',
            reises: '32.70',
            reisem: '48.90',
            reisel: '63.20'
          },
          komfort: {
            cityflitzer: '19.50',
            xs: '32.50',
            s: '38.70',
            m: '43.90',
            l: '64.20',
            reisexs: '18.50',
            reises: '22.70',
            reisem: '28.90',
            reisel: '43.20'
          },
          abo: {
            cityflitzer: '19.50',
            xs: '18.50',
            s: '22.70',
            m: '28.90',
            l: '43.20',
            reisexs: '18.50',
            reises: '22.70',
            reisem: '28.90',
            reisel: '43.20'
          }
        }
      };
      test(testdata);
    });

    describe (
      'should calculate the correct price with 10km distance and a 2 days ' +
      '16 hour lease, triggering the price for 4 days',
      function() {
      var testdata = {
        start: '2010-04-20 04:00',
        end: '2010-04-22 20:00',
        tab: 'tabExact',
        distance: 10,
        expectedPrices: {
          basic: {
            cityflitzer: '68.50',
            xs: '94.50',
            s: '124.70',
            m: '154.90',
            l: '185.40',
            reisexs: '78.50',
            reises: '90.70',
            reisem: '138.90',
            reisel: '181.20'
          },
          komfort: {
            cityflitzer: '67.50',
            xs: '90.50',
            s: '108.70',
            m: '123.90',
            l: '184.20',
            reisexs: '48.50',
            reises: '60.70',
            reisem: '78.90',
            reisel: '121.20'
          },
          abo: {
            cityflitzer: '67.50',
            xs: '48.50',
            s: '60.70',
            m: '78.90',
            l: '121.20',
            reisexs: '48.50',
            reises: '60.70',
            reisem: '78.90',
            reisel: '121.20'
          }
        }
      };
      test(testdata);
    });
  });

  describe (' tests with simple date', function() {

    describe (
      'should calculate the correct price with 10km distance and a 8 hour ' +
      'lease',
      function() {
      var testdata = {
        timeHours: '8',
        timeDays: '0',
        tab: 'tabSimple',
        distance: 10,
        expectedPrices: {
          basic: {
            cityflitzer: '12.50',
            xs: '28.50',
            s: '36.70',
            m: '44.90',
            l: '53.40',
            reisexs: '28.50',
            reises: '32.70',
            reisem: '48.90',
            reisel: '63.20'
          },
          komfort: {
            cityflitzer: '11.50',
            xs: '26.70',
            s: '31.70',
            m: '35.90',
            l: '52.20',
            reisexs: '18.50',
            reises: '22.70',
            reisem: '28.90',
            reisel: '43.20'
          },
          abo: {
            cityflitzer: '11.50',
            xs: '15.50',
            s: '18.90',
            m: '23.90',
            l: '35.40',
            reisexs: '18.50',
            reises: '22.70',
            reisem: '28.90',
            reisel: '43.20'
          }
        }
      };
      test(testdata);
    });

    describe (
      'should calculate the correct price with 10km distance and a 16 hour ' +
      ' lease, triggering the price for a day',
      function() {
      var testdata = {
        timeHours: '16',
        timeDays: '0',
        tab: 'tabSimple',
        distance: 10,
        expectedPrices: {
          basic: {
            cityflitzer: '20.50',
            xs: '34.50',
            s: '44.70',
            m: '54.90',
            l: '65.40',
            reisexs: '28.50',
            reises: '32.70',
            reisem: '48.90',
            reisel: '63.20'
          },
          komfort: {
            cityflitzer: '19.50',
            xs: '32.50',
            s: '38.70',
            m: '43.90',
            l: '64.20',
            reisexs: '18.50',
            reises: '22.70',
            reisem: '28.90',
            reisel: '43.20'
          },
          abo: {
            cityflitzer: '19.50',
            xs: '18.50',
            s: '22.70',
            m: '28.90',
            l: '43.20',
            reisexs: '18.50',
            reises: '22.70',
            reisem: '28.90',
            reisel: '43.20'
          }
        }
      };
      test(testdata);
    });

    describe (
      'should calculate the correct price with 10km distance and a 2 days ' +
      '16 hour lease, triggering the price for 4 days',
      function() {
      var testdata = {
        timeHours: '16',
        timeDays: '2',
        tab: 'tabSimple',
        distance: 10,
        expectedPrices: {
          basic: {
            cityflitzer: '68.50',
            xs: '94.50',
            s: '124.70',
            m: '154.90',
            l: '185.40',
            reisexs: '78.50',
            reises: '90.70',
            reisem: '138.90',
            reisel: '181.20'
          },
          komfort: {
            cityflitzer: '67.50',
            xs: '90.50',
            s: '108.70',
            m: '123.90',
            l: '184.20',
            reisexs: '48.50',
            reises: '60.70',
            reisem: '78.90',
            reisel: '121.20'
          },
          abo: {
            cityflitzer: '67.50',
            xs: '48.50',
            s: '60.70',
            m: '78.90',
            l: '121.20',
            reisexs: '48.50',
            reises: '60.70',
            reisem: '78.90',
            reisel: '121.20'
          }
        }
      };
      test(testdata);
    });
  });

});
