'use strict';

/**
 * @ngdoc directive
 * @name c2gyoApp.directive:tooltip
 * @description
 * # tooltip
 */
angular.module('c2gyoApp')
  .directive('tooltip', function () {
    return {
      template: '<div></div>',
      restrict: 'A',
      scope: true,
      link: function postLink(scope, element, attrs) {
        element.text('this is the tooltip directive');
      }
    };
  });
