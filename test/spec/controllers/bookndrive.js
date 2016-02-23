'use strict';

describe('Controller: BookndriveCtrl', function () {

  // load the controller's module
  beforeEach(module('c2gyoApp'));

  var BookndriveCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BookndriveCtrl = $controller('BookndriveCtrl', {
      $scope: scope
    });
  }));


  var test = function( testdata ) {
    for (var tariff in testdata.expectedPrices) {
      for (var carClass in testdata.expectedPrices[tariff]) {
        var expectedPrice = testdata.expectedPrices[tariff][carClass];
        (function(tariff, carClass, expectedPrice){
          it('tariff: ' + tariff + ', carClass: ' + carClass, function () {
            if( testdata.tab === 'tabExact') {
              scope.rental.startDate = new moment(testdata.start, 'YYYY-MM-DD HH:mm');
              scope.rental.endDate = new moment(testdata.end, 'YYYY-MM-DD HH:mm');
            } else {
              scope.rental.timeHours = parseInt(testdata.timeHours);
              scope.rental.timeDays = parseInt(testdata.timeDays);
            }

            scope.rental.tab = testdata.tab;
            scope.rental.distance = testdata.distance;

            scope.rental.bookndrive.tariff = tariff;
            scope.rental.bookndrive.carClass = carClass;
            expect(scope.price().toFixed(2)).toEqual(expectedPrice);
          });
        })(tariff, carClass, expectedPrice);
      }
    }
  };

  describe (' tests with exact start and end date', function() {

    describe (
      'should calculate the correct price with 10km distance and a 8 hour lease',
      function () {
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


  });

});
