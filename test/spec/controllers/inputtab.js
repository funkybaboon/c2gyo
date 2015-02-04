'use strict';

describe('Controller: InputtabCtrl', function () {

  // load the controller's module
  beforeEach(module('c2gyoApp'));

  var InputtabCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InputtabCtrl = $controller('InputtabCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
