'use strict';

describe('Controller: DriveNowCtrl', function() {

  // load the controller's module
  beforeEach(module('c2gyoApp'));

  var DriveNowCtrl;
  var scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    DriveNowCtrl = $controller('DriveNowCtrl', {
      $scope: scope
    });
  }));

  it('should calculate the correct price using simple time', function() {
    scope.rental.tab = 'simple';

    scope.rental.drivenow.tariff = 'mini'
    scope.rental.distance = 10;
    scope.rental.timeMinutes = 0;
    scope.rental.timeStanding = 0;
    scope.rental.timeHours = 8;
    scope.rental.timeDays = 0;
    expect(scope.price().toFixed(2)).toEqual((148.80).toFixed(2));

    scope.rental.drivenow.tariff = 'bmw'
    scope.rental.distance = 10;
    scope.rental.timeMinutes = 0;
    scope.rental.timeStanding = 0;
    scope.rental.timeHours = 8;
    scope.rental.timeDays = 0;
    expect(scope.price().toFixed(2)).toEqual((163.20).toFixed(2));

    scope.rental.drivenow.tariff = 'minicabriosummer'
    scope.rental.distance = 10;
    scope.rental.timeMinutes = 0;
    scope.rental.timeStanding = 0;
    scope.rental.timeHours = 8;
    scope.rental.timeDays = 0;
    expect(scope.price().toFixed(2)).toEqual((148.80).toFixed(2));

    scope.rental.drivenow.tariff = 'minicabriowinter'
    scope.rental.distance = 10;
    scope.rental.timeMinutes = 0;
    scope.rental.timeStanding = 0;
    scope.rental.timeHours = 8;
    scope.rental.timeDays = 0;
    expect(scope.price().toFixed(2)).toEqual((163.20).toFixed(2));

  });
});

