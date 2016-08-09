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
  .directive('airportForm', [
      '$translate',
      '$rootScope',
      'state',
      function($translate, $rootScope, state) {
        return {
          restrict: 'E',
          replace: 'true',
          templateUrl: 'views/airportform.html',
          scope: {
            vendor: '@'
          },
          controller: function($scope) {
            var vendor = $scope.vendor;
            $scope.rental = state.rental[vendor];

            $scope.airports = [];
            for (var key in $scope.rental.airport) {
              if ($scope.rental.airport.hasOwnProperty(key)) {
                $scope.airports.push({
                  name: key,
                  class: 'rental-' + vendor + '-airport-' + key,
                  translateName: 'rental.' + vendor + '.airport.' + key,
                  popover: 'popover.' + vendor + '.airport.' + key,
                  model: $scope.rental.airport[key]
                });
              }
            }

            $scope.changeAirport = function(airport) {
              state.rental[vendor].airport[airport.name] = airport.model;
            };

          }
        };
      }
    ]
  );
