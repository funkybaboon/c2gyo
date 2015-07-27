'use strict';

describe('Controller: GreenwheelsCtrl', function () {

  // load the controller's module
  beforeEach(module('c2gyoApp'));

  var GreenwheelsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GreenwheelsCtrl = $controller('GreenwheelsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
