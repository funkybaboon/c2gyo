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
      scope: {
        text: '@tariffPopover'
      },
      template:
      '<span ng-transclude></span>' +
      '<span popover-placement="right" popover="{{text}}" popover-trigger="mouseenter" class="fa-stack">' +
        '<i class="fa fa-square-o fa-stack-2x"></i>' +
        '<i class="fa fa fa-info fa-stack-1x"></i>' +
      '</span>'
    };
  });
