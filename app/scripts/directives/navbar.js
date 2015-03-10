'use strict';

/**
 * @ngdoc directive
 * @name c2gyoApp.directive:navBar
 * @description
 * # navBar
 */
angular.module('c2gyoApp')
  .directive('navBar', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/navbar.html',
      controller: function($scope, $element, $location) {
        $scope.tabs = [{
          name: 'Car2go',
          url: 'c2gdtp'
        }, {
          name: 'Car2goBlack',
          url: 'c2gbdtp'
        }, {
          name: 'Stadtmobil',
          url: 'smdtp'
        }];

        $scope.isActive = function(viewLocation) {
          return viewLocation === $location.path();
        };
      }
    };
  });
