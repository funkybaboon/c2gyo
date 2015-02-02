'use strict';

describe('Controller: SmCtrl', function() {

  var mymockstadtmobilRatesObject = {
    'classic': {
      'A': {
        'night': 0,
        'hour': 1.4,
        'day': 21,
        'week': 125,
        'km000': 0.2,
        'km101': 0.18,
        'km701': 0.18
      },
      'B': {
        'night': 0,
        'hour': 2.2,
        'day': 25,
        'week': 140,
        'km000': 0.22,
        'km101': 0.19,
        'km701': 0.16
      },
      'C': {
        'night': 0,
        'hour': 2.8,
        'day': 32,
        'week': 160,
        'km000': 0.26,
        'km101': 0.21,
        'km701': 0.17
      },
      'D': {
        'night': 1,
        'hour': 3.2,
        'day': 35,
        'week': 190,
        'km000': 0.29,
        'km101': 0.25,
        'km701': 0.25
      },
      'F': {
        'night': 2,
        'hour': 4.2,
        'day': 44,
        'week': 245,
        'km000': 0.33,
        'km101': 0.27,
        'km701': 0.27
      }
    },
    'basic': {
      'A': {
        'night': 0,
        'hour': 1.6,
        'day': 26,
        'week': 140,
        'km000': 0.22,
        'km101': 0.18,
        'km701': 0.18
      },
      'B': {
        'night': 0,
        'hour': 2.7,
        'day': 30,
        'week': 155,
        'km000': 0.27,
        'km101': 0.21,
        'km701': 0.16
      },
      'C': {
        'night': 0,
        'hour': 3.3,
        'day': 37,
        'week': 175,
        'km000': 0.31,
        'km101': 0.23,
        'km701': 0.17
      },
      'D': {
        'night': 1,
        'hour': 3.7,
        'day': 40,
        'week': 210,
        'km000': 0.34,
        'km101': 0.25,
        'km701': 0.25
      },
      'F': {
        'night': 2,
        'hour': 4.7,
        'day': 49,
        'week': 260,
        'km000': 0.38,
        'km101': 0.27,
        'km701': 0.27
      }
    },
    'business': {
      'A': {},
      'B': {},
      'C': {},
      'D': {},
      'F': {}
    }
  };

  // load the controller's module
  beforeEach(module('c2gyoApp'));

  var SmCtrl;
  var scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    SmCtrl = $controller('SmCtrl', {
      $scope: scope,
      stadtmobilRates: mymockstadtmobilRatesObject
    });
  }));

  it('should calculate the correct price', function() {
    expect(scope.price(10, 10, 0, 0, 'A', 'basic')
      .toFixed(2)).toEqual((18.20).toFixed(2));
    expect(scope.price(10, 10, 0, 0, 'B', 'basic')
      .toFixed(2)).toEqual((29.70).toFixed(2));
    expect(scope.price(10, 10, 0, 0, 'C', 'basic')
      .toFixed(2)).toEqual((36.10).toFixed(2));
    expect(scope.price(10, 10, 0, 0, 'D', 'basic')
      .toFixed(2)).toEqual((40.40).toFixed(2));
    expect(scope.price(10, 10, 0, 0, 'F', 'basic')
      .toFixed(2)).toEqual((50.80).toFixed(2));

    expect(scope.price(10, 10, 0, 0, 'A', 'classic')
      .toFixed(2)).toEqual((16.00).toFixed(2));
    expect(scope.price(10, 10, 0, 0, 'B', 'classic')
      .toFixed(2)).toEqual((24.20).toFixed(2));
    expect(scope.price(10, 10, 0, 0, 'C', 'classic')
      .toFixed(2)).toEqual((30.60).toFixed(2));
    expect(scope.price(10, 10, 0, 0, 'D', 'classic')
      .toFixed(2)).toEqual((34.90).toFixed(2));
    expect(scope.price(10, 10, 0, 0, 'F', 'classic')
      .toFixed(2)).toEqual((45.30).toFixed(2));
  });

});
