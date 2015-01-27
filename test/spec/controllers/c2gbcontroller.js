'use strict';

describe('Controller: C2gbcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('c2gyoApp'));

  var C2gbcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    C2gbcontrollerCtrl = $controller('C2gbcontrollerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
