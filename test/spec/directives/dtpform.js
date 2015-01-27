'use strict';

describe('Directive: dtpForm', function () {

  // load the directive's module
  beforeEach(module('c2gyoApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<dtp-form></dtp-form>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the dtpForm directive');
  }));
});
