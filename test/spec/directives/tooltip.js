'use strict';

describe('Directive: tooltip', function () {

  // load the directive's module
  beforeEach(module('c2gyoApp'));

  var element;
  var scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  fit('should generate a tooltop', inject(function ($compile) {
    element = angular.element('<div tooltip="test"></div>');
    element = $compile(element)(scope);
    //expect(element.text()).toBe('this is the tooltip directive');
  }));
});
