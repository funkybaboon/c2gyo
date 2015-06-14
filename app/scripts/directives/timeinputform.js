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
      controller: function($scope) {
        $scope.isResolution = function(value) {
          return $scope.resolution.indexOf(value) !== -1;
        };

        $scope.isAirport = function() {
          // not so nice fix to disable airport button for
          // flinkster lokal tariff
          if( $scope.rate.tariff === 'lokal') {
            return false;
          }
          return $scope.resolution.indexOf('airport') !== -1;
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
