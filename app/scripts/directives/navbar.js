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
      templateUrl: 'scripts/directives/navbar.html',
      controller: function($scope, $element, $location) {
        $scope.tabs = [{
          name: 'Car2go',
          url: 'c2g'
        }, {
          name: 'Car2goBlack',
          url: 'c2gb'
        }, {
          name: 'Car2godtp',
          url: 'c2gdtp'
        }, {
          name: 'Car2goBlackdtp',
          url: 'c2gbdtp'
        }, {
          name: 'Smdtp',
          url: 'smdtp'
        }];

        $scope.isActive = function(viewLocation) {
          return viewLocation === $location.path();
        };
      }
    };
  });
