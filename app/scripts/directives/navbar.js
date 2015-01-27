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
					name: 'Stadtmobil',
					url: 'sm'
				}, {
					name: 'Datetime',
					url: 'dtp'
				}];

				$scope.isActive = function(viewLocation) {
					return viewLocation === $location.path();
				};
			}
		};
	});