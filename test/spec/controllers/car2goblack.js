'use strict';

describe('Controller: Car2goblackCtrl', function() {

  // load the controller's module
  beforeEach(module('c2gyoApp'));

  var Car2goblackCtrl;
  var scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    Car2goblackCtrl = $controller('Car2goblackCtrl', {
      $scope: scope
    });
  }));

  it('should calculate the correct price using simple time', function() {
    scope.rental.tab = 'tabSimple';

    scope.rental.distance = 10;
    scope.rental.timeHours = 1;
    scope.rental.timeDays = 0;
    scope.rental.car2goblack.airport = false;
    expect(scope.price().toFixed(2)).toEqual((14.90).toFixed(2));

    scope.rental.distance = 10;
    scope.rental.timeHours = 1;
    scope.rental.timeDays = 0;
    scope.rental.car2goblack.airport = true;
    expect(scope.price().toFixed(2)).toEqual((19.80).toFixed(2));

    scope.rental.distance = 10;
    scope.rental.timeHours = 33;
    scope.rental.timeDays = 0;
    scope.rental.car2goblack.airport = false;
    expect(scope.price().toFixed(2)).toEqual((178.00).toFixed(2));

    scope.rental.distance = 10;
    scope.rental.timeHours = 33;
    scope.rental.timeDays = 0;
    scope.rental.car2goblack.airport = true;
    expect(scope.price().toFixed(2)).toEqual((182.90).toFixed(2));

    scope.rental.distance = 100;
    scope.rental.timeHours = 1;
    scope.rental.timeDays = 0;
    scope.rental.car2goblack.airport = false;
    expect(scope.price().toFixed(2)).toEqual((29.40).toFixed(2));

    scope.rental.distance = 100;
    scope.rental.timeHours = 1;
    scope.rental.timeDays = 0;
    scope.rental.car2goblack.airport = true;
    expect(scope.price().toFixed(2)).toEqual((34.30).toFixed(2));

    scope.rental.distance = 1000;
    scope.rental.timeHours = 33;
    scope.rental.timeDays = 0;
    scope.rental.car2goblack.airport = false;
    expect(scope.price().toFixed(2)).toEqual((453.50).toFixed(2));

    scope.rental.distance = 1000;
    scope.rental.timeHours = 33;
    scope.rental.timeDays = 0;
    scope.rental.car2goblack.airport = true;
    expect(scope.price().toFixed(2)).toEqual((458.40).toFixed(2));
  });

  it('should calculate the correct price using exact time', function() {
    var now = new moment();
    scope.rental.tab = 'tabExact';

    scope.rental.startDate = now.clone().startOf('hour').add(1, 'h');
    scope.rental.endDate = now.clone().startOf('hour').add(2, 'h');
    scope.rental.distance = 10;
    scope.rental.car2goblack.airport = false;
    expect(scope.price().toFixed(2)).toEqual((14.90).toFixed(2));

    scope.rental.startDate = now.clone().startOf('hour').add(1, 'h');
    scope.rental.endDate = now.clone().startOf('hour').add(2, 'h');
    scope.rental.distance = 10;
    scope.rental.car2goblack.airport = true;
    expect(scope.price().toFixed(2)).toEqual((19.80).toFixed(2));

    scope.rental.startDate = now.clone().startOf('hour').add(1, 'h');
    scope.rental.endDate = now.clone().startOf('hour').add(34, 'h');
    scope.rental.distance = 10;
    scope.rental.car2goblack.airport = false;
    expect(scope.price().toFixed(2)).toEqual((178.00).toFixed(2));

    scope.rental.startDate = now.clone().startOf('hour').add(1, 'h');
    scope.rental.endDate = now.clone().startOf('hour').add(34, 'h');
    scope.rental.distance = 10;
    scope.rental.car2goblack.airport = true;
    expect(scope.price().toFixed(2)).toEqual((182.90).toFixed(2));

    scope.rental.startDate = now.clone().startOf('hour').add(1, 'h');
    scope.rental.endDate = now.clone().startOf('hour').add(2, 'h');
    scope.rental.distance = 100;
    scope.rental.car2goblack.airport = false;
    expect(scope.price().toFixed(2)).toEqual((29.40).toFixed(2));

    scope.rental.startDate = now.clone().startOf('hour').add(1, 'h');
    scope.rental.endDate = now.clone().startOf('hour').add(2, 'h');
    scope.rental.distance = 100;
    scope.rental.car2goblack.airport = true;
    expect(scope.price().toFixed(2)).toEqual((34.30).toFixed(2));

    scope.rental.startDate = now.clone().startOf('hour').add(1, 'h');
    scope.rental.endDate = now.clone().startOf('hour').add(34, 'h');
    scope.rental.distance = 1000;
    scope.rental.car2goblack.airport = false;
    expect(scope.price().toFixed(2)).toEqual((453.50).toFixed(2));

    scope.rental.startDate = now.clone().startOf('hour').add(1, 'h');
    scope.rental.endDate = now.clone().startOf('hour').add(34, 'h');
    scope.rental.distance = 1000;
    scope.rental.car2goblack.airport = true;
    expect(scope.price().toFixed(2)).toEqual((458.40).toFixed(2));
  });

});
