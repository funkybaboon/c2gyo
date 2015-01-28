'use strict';

/**
 * @ngdoc directive
 * @name c2gyoApp.directive:dtpForm
 * @description
 * # dtpForm
 */
angular.module('c2gyoApp')
  .directive('dtpForm', function() {
    return {
      restrict: 'E',
      templateUrl: 'scripts/directives/dtpform.html'
    };
  });
