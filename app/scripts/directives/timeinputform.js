'use strict';

/**
 * @ngdoc directive
 * @name c2gyoApp.directive:timeInputForm
 * @description
 * # timeInputForm
 */
angular.module('c2gyoApp')
  .directive('timeInputForm', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/timeinputform.html',
      scope: true,
      controller: function($scope) {
        $scope.isResolution = function(value) {
          return $scope.resolution.indexOf(value) !== -1;
        };

        $scope.isSet = function(checkTab) {
          return this.rental.tab === checkTab;
        };

        $scope.setTab = function(setTab) {
          this.rental.tab = setTab;
        };
      }
    };
  });
