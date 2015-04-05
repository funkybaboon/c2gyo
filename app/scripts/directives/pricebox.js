'use strict';

/**
 * @ngdoc directive
 * @name c2gyoApp.directive:pricebox
 * @description
 * # pricebox
 */
angular.module('c2gyoApp')
  .directive('priceBox', function() {
    return {
      restrict: 'E',
      templateUrl: 'scripts/directives/priceBox.html',
      controller: function($scope) {
        $scope.pricePerKm = function() {
          return $scope.price() / $scope.rental.distance;
        };
      }
    };
  });
