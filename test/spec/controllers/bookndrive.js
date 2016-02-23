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


});
