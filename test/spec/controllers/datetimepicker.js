'use strict';

describe('Controller: DatetimepickerCtrl', function () {

  // load the controller's module
  beforeEach(module('c2gyoApp'));

  var DatetimepickerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DatetimepickerCtrl = $controller('DatetimepickerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
