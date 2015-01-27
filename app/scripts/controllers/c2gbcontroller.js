'use strict';

/**
 * @ngdoc function
 * @name c2gyoApp.controller:C2gbcontrollerCtrl
 * @description
 * # C2gbcontrollerCtrl
 * Controller of the c2gyoApp
 */
angular.module('c2gyoApp')
	.controller('C2gbcontrollerCtrl', function($scope) {
		$scope.vendor = 'car2go Black';
		$scope.distance = 10;
		$scope.time = 20;
		$scope.airport = false;

		$scope.feeDay = 89;
		$scope.feeHour = 14.9;

		$scope.feeAdditionalKm = 0.29;

		$scope.showMsgRoundDownToDays = false;

		$scope.msgRoundDownToDays = ' (abgerundet auf Tagesgebühr)';

		$scope.resolution = ['minutes', 'airport'];
		$scope.resolutionTime = ['hours', 'days'];

		$scope.getHours = function(minutes) {
			var duration = moment.duration(minutes, 'm');
			return Math.ceil(duration.asHours() % 24);
		};

		$scope.getDays = function(minutes) {
			var duration = moment.duration(minutes, 'm');
			return Math.floor(duration.asDays());
		};

		$scope.getFreeKm = function(minutes) {
			var feeHours = $scope.getFeeHours(minutes);
			var freeKm = 50;

			if ($scope.getDays(minutes) > 0) {
				freeKm = $scope.getDays(minutes) * 200;
			}

			if (feeHours >= $scope.feeDay) {
				if (freeKm === 50) {
					freeKm = 200;
				} else {
					freeKm += 200;
				}
			}

			return freeKm;
		};

		$scope.getAdditionalKm = function(km, minutes) {
			var AdditionalKm = 0;
			var freeKm = $scope.getFreeKm(minutes);
			if (km - freeKm > 0) {
				AdditionalKm = km - freeKm;
			}
			return AdditionalKm;
		};

		$scope.getfeeAdditionalKm = function(km, minutes) {
			return $scope.getAdditionalKm(km, minutes) * $scope.feeAdditionalKm;
		};

		$scope.getFeeDays = function(minutes) {
			return $scope.getDays(minutes) * $scope.feeDay;
		};

		$scope.getFeeHours = function(minutes) {
			var fee = $scope.getHours(minutes) * $scope.feeHour;
			if (fee >= $scope.feeDay) {
				fee = $scope.feeDay;
			}

			return fee;
		};

		$scope.getFeeAirport = function(airport) {
			var fee = 0;
			if (airport) {
				fee = 4.90;
			}
			return fee;
		};

		$scope.price = function(km, minutes, airport) {
			var feeHours = $scope.getFeeHours(minutes);
			var feeDays = $scope.getFeeDays(minutes);

			if (feeHours >= $scope.feeDay) {
				$scope.showMsgRoundDownToDays = true;
			} else {
				$scope.showMsgRoundDownToDays = false;
			}

			return (
				$scope.getfeeAdditionalKm(km, minutes) +
				feeDays +
				feeHours +
				$scope.getFeeAirport(airport)
			);
		};

		var getDurationBilled = function(minutes) {
			var feeHours = $scope.getHours(minutes) * $scope.feeHour;
			var feeDays = $scope.getDays(minutes) * $scope.feeDay;

			var hoursBilled = $scope.getHours(minutes);
			var daysBilled = $scope.getDays(minutes);

			if (feeHours >= $scope.feeDay) {
				hoursBilled = 0;
				feeHours = 0;
				daysBilled += 1;
				feeDays = daysBilled * $scope.feeDay;
			}

			var duration = moment.duration({
				hours: hoursBilled,
				days: daysBilled,
			});

			return duration;

		};

		$scope.getHoursBilled = function(minutes) {
			return getDurationBilled(minutes).hours();
		};

		$scope.getDaysBilled = function(minutes) {
			return getDurationBilled(minutes).days();
		};

	});