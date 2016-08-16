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
  .directive('optionForm', [
      '$translate',
      '$rootScope',
      'state',
      function($translate, $rootScope, state) {
        return {
          restrict: 'E',
          replace: 'true',
          templateUrl: 'views/optionform.html',
          scope: {
            vendor: '@',
            type: '@',
            title: '@'
          },
          controller: function($scope) {
            var vendor = $scope.vendor;
            var type = $scope.type;

            $scope.rental = state.rental[vendor];

            $scope.options = [];
            for (var key in $scope.rental[type]) {
              if ($scope.rental[type].hasOwnProperty(key)) {
                $scope.options.push({
                  name: key,
                  class: 'rental-' + vendor + '-' + type + '-' + key,
                  translateName: 'rental.' + vendor + '.' + type + '.' + key,
                  popover: 'popover.' + vendor + '.' + type + '.' + key,
                  model: $scope.rental[type][key]
                });
              }
            }

            $scope.changeOption = function(option) {
              state.rental[vendor][type][option.name] = option.model;
            };

          }
        };
      }
    ]
  );
