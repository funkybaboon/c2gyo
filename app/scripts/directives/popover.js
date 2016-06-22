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
  .directive('tariffPopover', [
    '$translate',
    '$rootScope',
    function($translate, $rootScope) {
      return {
        restrict: 'A',
        transclude: true,
        scope: {
          translateText: '@tariffPopover'
        },
        template:
          '<span ng-transclude></span>' +
          '&nbsp;' +
          '<span popover-placement="right" ' +
          '      uib-popover-html="text" ' +
          '      popover-trigger="mouseenter" ' +
          '      class="fa fa-info-circle">' +
          '</span>',
        controller: function($scope) {
          var translate = function() {
            $translate($scope.translateText).then(function(translatedText) {
              $scope.text = translatedText;
            });
          };

          translate();
          $rootScope.$on('$translateChangeSuccess', translate);
        }
      };
    }
  ]
);
