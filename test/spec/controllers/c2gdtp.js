'use strict';

describe('Controller: C2gdtpCtrl', function () {

  // load the controller's module
  beforeEach(module('c2gyoApp'));

  var C2gdtpCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    C2gdtpCtrl = $controller('C2gdtpCtrl', {
      $scope: scope
    });
  }));
/*
  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });*/
});
