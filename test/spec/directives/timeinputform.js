'use strict';

describe('Directive: timeInputForm', function() {

  // load the directive's module
  beforeEach(module('c2gyoApp'));

  //var element;
  var scope;

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));
  /*
    it('should make hidden element visible', inject(function($compile) {
      element = angular.element('<time-input-form></time-input-form>');
      element = $compile(element)(scope);
      expect(element.text()).toBe('this is the timeInputForm directive');
    }));
  */
});
