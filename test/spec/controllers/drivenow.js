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
    scope.rental.tab = 'tabSimple';

    scope.rental.drivenow.tariff = 'mini';
    scope.rental.distance = 10;
    scope.rental.timeMinutes = 0;
    scope.rental.timeStanding = 0;
    scope.rental.timeHours = 8;
    scope.rental.timeDays = 0;
    expect(scope.price().toFixed(2)).toEqual((148.80).toFixed(2));

    scope.rental.drivenow.tariff = 'bmw';
    scope.rental.distance = 10;
    scope.rental.timeMinutes = 0;
    scope.rental.timeStanding = 0;
    scope.rental.timeHours = 8;
    scope.rental.timeDays = 0;
    expect(scope.price().toFixed(2)).toEqual((163.20).toFixed(2));

    scope.rental.drivenow.tariff = 'minicabriosummer';
    scope.rental.distance = 10;
    scope.rental.timeMinutes = 0;
    scope.rental.timeStanding = 0;
    scope.rental.timeHours = 8;
    scope.rental.timeDays = 0;
    expect(scope.price().toFixed(2)).toEqual((148.80).toFixed(2));

    scope.rental.drivenow.tariff = 'minicabriowinter';
    scope.rental.distance = 10;
    scope.rental.timeMinutes = 0;
    scope.rental.timeStanding = 0;
    scope.rental.timeHours = 8;
    scope.rental.timeDays = 0;
    expect(scope.price().toFixed(2)).toEqual((163.20).toFixed(2));
  });

  it('should calculate the correct price using exact time', function() {
    var now = new moment();
    scope.rental.tab = 'tabExact';

    scope.rental.drivenow.tariff = 'mini';
    scope.rental.startDate = now.clone().startOf('hour').add(1, 'h');
    scope.rental.endDate = now.clone().startOf('hour').add(37, 'h');
    scope.rental.distance = 10;
    expect(scope.price().toFixed(2)).toEqual((669.60).toFixed(2));

    scope.rental.drivenow.tariff = 'bmw';
    scope.rental.startDate = now.clone().startOf('hour').add(1, 'h');
    scope.rental.endDate = now.clone().startOf('hour').add(37, 'h');
    scope.rental.distance = 10;
    expect(scope.price().toFixed(2)).toEqual((734.40).toFixed(2));

    scope.rental.drivenow.tariff = 'minicabriosummer';
    scope.rental.startDate = now.clone().startOf('hour').add(1, 'h');
    scope.rental.endDate = now.clone().startOf('hour').add(37, 'h');
    scope.rental.distance = 10;
    expect(scope.price().toFixed(2)).toEqual((669.60).toFixed(2));

    scope.rental.drivenow.tariff = 'minicabriowinter';
    scope.rental.startDate = now.clone().startOf('hour').add(1, 'h');
    scope.rental.endDate = now.clone().startOf('hour').add(37, 'h');
    scope.rental.distance = 10;
    expect(scope.price().toFixed(2)).toEqual((734.40).toFixed(2));
  });

  var extraFares = [
    ['airport', 'berlintegel', 190.00],
    ['airport', 'berlinschoenefeld', 192.00],
    ['airport', 'hamburg', 191.00],
    ['airport', 'munich', 198.00],
    ['airport', 'cologne', 190.00],
    ['airport', 'duesseldorf', 192.00],
    ['airport', 'wien', 196.00],

    ['drivecitytocity', 'duesseldorfcologne', 196.00],
    ['drivecitytocity', 'cologneduesseldorf', 192.00],
    ['drivecitytocity', 'hildengerresheim', 189.00],
    ['drivecitytocity', 'neubibergbavariafilmstadt', 189.00]
  ];

  extraFares.forEach(function(entry){
    var extraFareCategory = entry[0];
    var extraFare = entry[1];
    var extraFarePrice = entry[2];

    it('should calculate the correct price with extra fare ' + extraFareCategory +
      ' ' + extraFare, function() {
      scope.rental.drivenow[extraFareCategory][extraFare] = true;
      expect(scope.price().toFixed(2)).toEqual((extraFarePrice).toFixed(2));
      scope.rental.drivenow[extraFareCategory][extraFare] = false;
    });
  });

});

