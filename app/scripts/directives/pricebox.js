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
      templateUrl: 'views/priceBox.html',
      scope: true,
      controller: function($scope) {
        $scope.pricePerKm = function() {
          var price = 0;
          if ($scope.rental.distance) {
            price = $scope.price() / $scope.rental.distance;
          }
          return price;
        };
      }
    };
  });
