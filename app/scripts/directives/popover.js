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
        '&nbsp;' +
        '<span popover-placement="right" ' +
              'popover="{{text}}" ' +
              'popover-trigger="mouseenter" ' +
              'class="fa fa-info-circle">' +
        '</span>'
    };
  });
