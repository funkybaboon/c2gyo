'use strict';

describe('Controller: C2gbdtpCtrl', function () {

  // load the controller's module
  beforeEach(module('c2gyoApp'));

  var C2gbdtpCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    C2gbdtpCtrl = $controller('C2gbdtpCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
