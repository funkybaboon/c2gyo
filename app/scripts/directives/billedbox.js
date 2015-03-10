'use strict';

/**
 * @ngdoc directive
 * @name c2gyoApp.directive:billedBox
 * @description
 * # billedBox
 */
angular.module('c2gyoApp')
  .directive('billedBox', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/billedbox.html',
      controller: function($scope) {
        $scope.isResolution = function(value) {
          return $scope.resolutionTime.indexOf(value) !== -1;
        };
      }
    };
    /*
        return {
          template: '<div></div>',
          restrict: 'E',
          link: function postLink(scope, element, attrs) {
            element.text('this is the billedBox directive');
          }
        };*/
  });
