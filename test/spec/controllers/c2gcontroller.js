'use strict';

describe('Controller: C2gCtrl', function () {

  // load the controller's module
  beforeEach(module('c2gyoApp'));

  var C2gCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    C2gCtrl = $controller('C2gCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
