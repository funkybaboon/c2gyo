'use strict';

describe('Controller: C2gbdtpCtrl', function() {

  // load the controller's module
  beforeEach(module('c2gyoApp'));

  var C2gbdtpCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    C2gbdtpCtrl = $controller('C2gbdtpCtrl', {
      $scope: scope
    });
  }));

  it('should calculate the correct price', function() {
    scope.tab = 'simple';

    scope.rental.distance = 10;
    scope.rental.timeHours = 1;
    scope.rental.timeDays = 0;
    scope.rental.airport = false;
    expect(scope.price().toFixed(2)).toEqual((14.90).toFixed(2));

    scope.rental.distance = 10;
    scope.rental.timeHours = 1;
    scope.rental.timeDays = 0;
    scope.rental.airport = true;
    expect(scope.price().toFixed(2)).toEqual((19.80).toFixed(2));

    scope.rental.distance = 10;
    scope.rental.timeHours = 33;
    scope.rental.timeDays = 0;
    scope.rental.airport = false;
    expect(scope.price().toFixed(2)).toEqual((178.00).toFixed(2));

    scope.rental.distance = 10;
    scope.rental.timeHours = 33;
    scope.rental.timeDays = 0;
    scope.rental.airport = true;
    expect(scope.price().toFixed(2)).toEqual((182.90).toFixed(2));

    scope.rental.distance = 100;
    scope.rental.timeHours = 1;
    scope.rental.timeDays = 0;
    scope.rental.airport = false;
    expect(scope.price().toFixed(2)).toEqual((29.40).toFixed(2));

    scope.rental.distance = 100;
    scope.rental.timeHours = 1;
    scope.rental.timeDays = 0;
    scope.rental.airport = true;
    expect(scope.price().toFixed(2)).toEqual((34.30).toFixed(2));

    scope.rental.distance = 1000;
    scope.rental.timeHours = 33;
    scope.rental.timeDays = 0;
    scope.rental.airport = false;
    expect(scope.price().toFixed(2)).toEqual((453.50).toFixed(2));

    scope.rental.distance = 1000;
    scope.rental.timeHours = 33;
    scope.rental.timeDays = 0;
    scope.rental.airport = true;
    expect(scope.price().toFixed(2)).toEqual((458.40).toFixed(2));

  });

});
