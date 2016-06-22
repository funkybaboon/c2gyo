'use strict';

/**
 * @ngdoc directive
 * @name c2gyoApp.directive:formWithPopover
 * @description
 * # popover
 * @example
 <span tariff-popover></span>
 */
angular.module('c2gyoApp')
  .directive('tarifForm', [
      '$translate',
      '$rootScope',
      'state',
      function($translate, $rootScope, state) {
        return {
          restrict: 'E',
          replace: 'true',
          templateUrl: 'views/tarifform.html',
          scope: {
            options: '=listofoptions',
            vendor: '@'
          },
          controller: function($scope) {
            $scope.rental = state.rental[$scope.vendor];
          }
        };
      }
    ]
  );
