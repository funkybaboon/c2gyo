'use strict';

describe('Controller: C2gcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('c2gyoApp'));

  var C2gcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    C2gcontrollerCtrl = $controller('C2gcontrollerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
