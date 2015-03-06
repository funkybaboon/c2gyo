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

  /*
    it('should calculate the correct price', function() {
      expect(scope.price(10, 20, false)).toEqual(14.90);
      expect(scope.price(10, 20, true)).toEqual(19.80);

      expect(scope.price(10, 2000, false)).toEqual(178.00);
      expect(scope.price(10, 2000, true)).toEqual(182.90);

      expect(scope.price(100, 20, false)).toEqual(29.40);
      expect(scope.price(100, 20, true)).toEqual(34.30);

      expect(scope.price(1000, 2000, false)).toEqual(352.00);
      expect(scope.price(1000, 2000, true)).toEqual(356.90);
    });
  */

});
