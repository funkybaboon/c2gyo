'use strict';

describe('Controller: SmCtrl', function() {

  // load the controller's module
  beforeEach(module('c2gyoApp'));

  var SmCtrl;
  var scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    SmCtrl = $controller('SmCtrl', {
      $scope: scope
    });
  }));
/*
  it('should calculate the correct price', function() {
    expect(scope.price(10, 10, 0, 0, 'A', 'basic').toFixed(2)).toEqual((18.20).toFixed(2));

  });
*/

});
