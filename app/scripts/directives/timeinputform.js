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
      templateUrl: 'scripts/directives/timeInputForm.html',
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

        $scope.clear = function() {
          var now = new moment().startOf('hour').add(1, 'h');

          $scope.rental = {
            tab: $scope.rental.tab,
            startDate: now.clone(),
            endDate: now.clone(),
            distance: 0,
            timeMinutes: 0,
            timeHours: 0,
            timeDays: 0,
            timeWeeks: 0,
            timeStanding: 0,
            airport: false
          };
        };

      }
    };
  });
