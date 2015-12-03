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
      scope: true,
      controller: function($scope, $element, $location) {
        $scope.tabs = [{
          name: 'Car2go',
          url: 'car2go'
        }, {
          name: 'Car2goBlack',
          url: 'car2goblack'
        }, {
          name: 'Stadtmobil',
          url: 'stadtmobil'
        }, {
          name: 'Flinkster',
          url: 'flinkster'
        }, {
          name: 'Greenwheels',
          url: 'greenwheels'
        }, {
          name: 'DriveNow',
          url: 'drivenow'
        }];

        $scope.isActive = function(viewLocation) {
          return viewLocation === $location.path();
        };
      }
    };
  });
