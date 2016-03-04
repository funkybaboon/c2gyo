'use strict';

/**
 * @ngdoc directive
 * @name c2gyoApp.directive:navBar
 * @description
 * # navBar
 * ToDo:
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
        }, {
          name: 'book-n-drive',
          url: 'bookndrive'
        }];

        $scope.isActive = function(viewLocation) {
          return viewLocation === $location.path();
        };

        $scope.active = function() {
          var tabs = {
            car2go: 'Car2go',
            car2goblack: 'Car2goBlack',
            stadtmobil: 'Stadtmobil',
            flinkster: 'Flinkster',
            greenwheels: 'Greenwheels',
            drivenow: 'DriveNow',
            bookndrive: 'book-n-drive'
          };

          var tab = $location.path().substring(1);
          return tabs[tab];
        };
      }
    };
  });
