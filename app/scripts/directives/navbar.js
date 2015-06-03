'use strict';

/**
 * @ngdoc directive
 * @name c2gyoApp.directive:navBar
 * @description
 * # navBar
 * ToDo:
 *   - Book N Drive
 *   - CiteeCar
 *   - Cambio
 *   - DriveNow
 *   - Flinkster <-----------
 *   - Greenwheels
 *   - Hertz
 *   - Multicity
 *   - Scouter
 *   - SpotCar
 *   - teilAuto
 *   - Quicar
 */
angular.module('c2gyoApp')
  .directive('navBar', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/navbar.html',
      controller: function($scope, $element, $location) {
        $scope.tabs = [{
          name: 'Car2go',
          url: 'c2g'
        }, {
          name: 'Car2goBlack',
          url: 'c2gb'
        }, {
          name: 'Stadtmobil',
          url: 'smdtp'
        }, {
          name: 'Flinkster',
          url: 'flinkster'
        }];

        $scope.isActive = function(viewLocation) {
          return viewLocation === $location.path();
        };
      }
    };
  });
