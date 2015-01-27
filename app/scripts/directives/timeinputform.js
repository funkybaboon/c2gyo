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
			}
		};/*

		return {
			template: '<div></div>',
			restrict: 'E',
			link: function postLink(scope, element, attrs) {
				element.text('this is the timeInputForm directive');
			}
		};*/
	});