'use strict';

describe('Controller: FlinksterCtrl', function () {

  // load the controller's module
  beforeEach(module('c2gyoApp'));

  var FlinksterCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FlinksterCtrl = $controller('FlinksterCtrl', {
      $scope: scope
    });
  }));
/*
  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });*/
});
