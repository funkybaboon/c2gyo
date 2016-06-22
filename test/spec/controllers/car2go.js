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

  it('should calculate the correct price using simple time', function() {
    scope.rental.tab = 'tabSimple';

    scope.rental.distance = 10;
    scope.rental.timeMinutes = 20;
    scope.rental.timeStanding = 0;
    scope.rental.timeHours = 0;
    scope.rental.timeDays = 0;
    scope.rental.car2go.airport = false;
    expect(scope.price().toFixed(2)).toEqual((5.80).toFixed(2));

    scope.rental.distance = 10;
    scope.rental.timeMinutes = 20;
    scope.rental.timeStanding = 0;
    scope.rental.timeHours = 0;
    scope.rental.timeDays = 0;
    scope.rental.car2go.airport = true;
    expect(scope.price().toFixed(2)).toEqual((10.70).toFixed(2));

    scope.rental.distance = 10;
    scope.rental.timeMinutes = 20;
    scope.rental.timeStanding = 10;
    scope.rental.timeHours = 0;
    scope.rental.timeDays = 0;
    scope.rental.car2go.airport = false;
    expect(scope.price().toFixed(2)).toEqual((7.70).toFixed(2));

    scope.rental.distance = 10;
    scope.rental.timeMinutes = 20;
    scope.rental.timeStanding = 10;
    scope.rental.timeHours = 0;
    scope.rental.timeDays = 0;
    scope.rental.car2go.airport = true;
    expect(scope.price().toFixed(2)).toEqual((12.60).toFixed(2));

    //---
    scope.rental.distance = 10;
    scope.rental.timeMinutes = 229;
    scope.rental.timeStanding = 0;
    scope.rental.timeHours = 0;
    scope.rental.timeDays = 0;
    scope.rental.car2go.airport = false;
    expect(scope.price().toFixed(2)).toEqual((58.91).toFixed(2));

    scope.rental.distance = 10;
    scope.rental.timeMinutes = 230;
    scope.rental.timeStanding = 0;
    scope.rental.timeHours = 0;
    scope.rental.timeDays = 0;
    scope.rental.car2go.airport = false;
    expect(scope.price().toFixed(2)).toEqual((59.00).toFixed(2));

    scope.rental.distance = 10;
    scope.rental.timeMinutes = 1439;
    scope.rental.timeStanding = 0;
    scope.rental.timeHours = 0;
    scope.rental.timeDays = 0;
    scope.rental.car2go.airport = false;
    expect(scope.price().toFixed(2)).toEqual((59.00).toFixed(2));

    //---
    scope.rental.distance = 10;
    scope.rental.timeMinutes = 2000;
    scope.rental.timeStanding = 0;
    scope.rental.timeHours = 0;
    scope.rental.timeDays = 0;
    scope.rental.car2go.airport = false;
    expect(scope.price().toFixed(2)).toEqual((118.00).toFixed(2));

    scope.rental.distance = 10;
    scope.rental.timeMinutes = 2000;
    scope.rental.timeStanding = 0;
    scope.rental.timeHours = 0;
    scope.rental.timeDays = 0;
    scope.rental.car2go.airport = true;
    expect(scope.price().toFixed(2)).toEqual((122.90).toFixed(2));

    scope.rental.distance = 10;
    scope.rental.timeMinutes = 2000;
    scope.rental.timeStanding = 10;
    scope.rental.timeHours = 0;
    scope.rental.timeDays = 0;
    scope.rental.car2go.airport = false;
    expect(scope.price().toFixed(2)).toEqual((119.90).toFixed(2));

    scope.rental.distance = 10;
    scope.rental.timeMinutes = 2000;
    scope.rental.timeStanding = 10;
    scope.rental.timeHours = 0;
    scope.rental.timeDays = 0;
    scope.rental.car2go.airport = true;
    expect(scope.price().toFixed(2)).toEqual((124.80).toFixed(2));

    //---
    scope.rental.distance = 100;
    scope.rental.timeMinutes = 20;
    scope.rental.timeStanding = 0;
    scope.rental.timeHours = 0;
    scope.rental.timeDays = 0;
    scope.rental.car2go.airport = false;
    expect(scope.price().toFixed(2)).toEqual((20.30).toFixed(2));

    scope.rental.distance = 100;
    scope.rental.timeMinutes = 20;
    scope.rental.timeStanding = 0;
    scope.rental.timeHours = 0;
    scope.rental.timeDays = 0;
    scope.rental.car2go.airport = true;
    expect(scope.price().toFixed(2)).toEqual((25.20).toFixed(2));

    scope.rental.distance = 100;
    scope.rental.timeMinutes = 20;
    scope.rental.timeStanding = 10;
    scope.rental.timeHours = 0;
    scope.rental.timeDays = 0;
    scope.rental.car2go.airport = false;
    expect(scope.price().toFixed(2)).toEqual((22.20).toFixed(2));

    scope.rental.distance = 100;
    scope.rental.timeMinutes = 20;
    scope.rental.timeStanding = 10;
    scope.rental.timeHours = 0;
    scope.rental.timeDays = 0;
    scope.rental.car2go.airport = true;
    expect(scope.price().toFixed(2)).toEqual((27.10).toFixed(2));

    //---
    scope.rental.distance = 1000;
    scope.rental.timeMinutes = 2000;
    scope.rental.timeStanding = 0;
    scope.rental.timeHours = 0;
    scope.rental.timeDays = 0;
    scope.rental.car2go.airport = false;
    expect(scope.price().toFixed(2)).toEqual((393.50).toFixed(2));

    scope.rental.distance = 1000;
    scope.rental.timeMinutes = 2000;
    scope.rental.timeStanding = 0;
    scope.rental.timeHours = 0;
    scope.rental.timeDays = 0;
    scope.rental.car2go.airport = true;
    expect(scope.price().toFixed(2)).toEqual((398.40).toFixed(2));

    scope.rental.distance = 1000;
    scope.rental.timeMinutes = 2000;
    scope.rental.timeStanding = 10;
    scope.rental.timeHours = 0;
    scope.rental.timeDays = 0;
    scope.rental.car2go.airport = false;
    expect(scope.price().toFixed(2)).toEqual((395.40).toFixed(2));

    scope.rental.distance = 1000;
    scope.rental.timeMinutes = 2000;
    scope.rental.timeStanding = 10;
    scope.rental.timeHours = 0;
    scope.rental.timeDays = 0;
    scope.rental.car2go.airport = true;
    expect(scope.price().toFixed(2)).toEqual((400.30).toFixed(2));
  });

});
