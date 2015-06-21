'use strict';

/**
 * @ngdoc directive
 * @name c2gyoApp.directive:popover
 * @description
 * # popover
 * @example
 <span tariff-popover></span>
 */
angular.module('c2gyoApp')
  .directive('tariffPopover', function () {
    return {
      restrict: 'A',
      transclude: true,
      template: '<span popover-placement="right" popover="On the Right!" popover-trigger="mouseenter" ng-transclude></span>'
    };
  });
