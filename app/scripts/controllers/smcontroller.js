'use strict';

/**
 * @ngdoc function
 * @name c2gyoApp.controller:SmCtrl
 * @description
 * # SmCtrl
 * Controller of the c2gyoApp
 */
angular.module('c2gyoApp')
	.controller('SmCtrl', [
		'$scope',
		'stadtmobilRates',
		function($scope, stadtmobilRates) {
			$scope.distance = 10;
			$scope.timeHours = 10;
			$scope.timeDays = 0;
			$scope.timeWeeks = 0;
			$scope.rate = 'A';
			$scope.tariff = 'classic';

			$scope.resolution = ['hours', 'days', 'weeks'];
			$scope.resolutionTime = ['hours', 'days', 'weeks'];

			var getDuration = function(hours, days, weeks) {
				var durationHours = moment.duration(hours, 'h');
				var durationDays = moment.duration(days, 'd');
				var durationWeeks = moment.duration(weeks, 'w');

				var durationAll = durationHours.add(durationDays).add(durationWeeks);
				return durationAll;
			};

			var getFeeTime = function(duration, rate) {
				var feeHours = duration.hours() * rate.hour;
				var feeDays = Math.floor(duration.asDays() % 7) * rate.day;
				var feeWeeks = Math.floor(duration.asDays() / 7) * rate.week;

				var fee = feeHours + feeDays + feeWeeks;
				return fee;
			};

			var getFeeDistance = function(km, rate) {
				var fee = 0;
				if (km >= 701) {
					fee = 100 * rate.km000 + 600 * rate.km101 + (km - 700) * rate.km701;
				} else if (km < 701 && km >= 101) {
					fee = 100 * rate.km000 + (km - 100) * rate.km101;
				} else {
					fee = km * rate.km000;
				}
				return fee;
			};

			var getCurrentRate = function(rate, tariff) {
				// studi and classic have the same rates
				if (tariff === 'studi') {
					tariff = 'classic';
				}
				return stadtmobilRates[tariff][rate];
			};

			var priceDistance = function(km, rate, tariff) {
				var currentRate = getCurrentRate(rate, tariff);
				return getFeeDistance(km, currentRate);
			};

			var priceTime = function(timeHours, timeDays, timeWeeks, rate, tariff) {
				var currentRate = getCurrentRate(rate, tariff);
				var duration = getDuration(timeHours, timeDays, timeWeeks);
				return getFeeTime(duration, currentRate);
			};

			var price = function(
				distance,
				timeHours,
				timeDays,
				timeWeeks,
				rate,
				tariff) {
				return (
					priceDistance(distance, rate, tariff) +
					priceTime(timeHours, timeDays, timeWeeks, rate, tariff)
				);
			};

			$scope.price = price;
			$scope.priceDistance = priceDistance;
			$scope.priceTime = priceTime;

			//-------------------------------------------------------------------------
			// Billing Box Hack
			//-------------------------------------------------------------------------
			var getDurationAll = function() {
				return getDuration(
					$scope.timeHours,
					$scope.timeDays,
					$scope.timeWeeks
				);
			};

			var getCurrentRateAll = function() {
				var rate = $scope.rate;
				var tariff = $scope.tariff;
				// studi and classic have the same rates
				if (tariff === 'studi') {
					tariff = 'classic';
				}
				return stadtmobilRates[tariff][rate];
			};

			$scope.getHours = function() {
				return getDurationAll().hours();
			};

			$scope.getDays = function() {
				return Math.floor(getDurationAll().asDays() % 7);
			};

			$scope.getWeeks = function() {
				return Math.floor(getDurationAll().asDays() / 7);
			};

			var getDurationBilled = function() {
				var rate = getCurrentRateAll();

				var feeHours = $scope.getHours() * rate.hour;
				var feeDays = $scope.getDays() * rate.day;
				var feeWeeks = $scope.getWeeks() * rate.week;

				var hoursBilled = $scope.getHours();
				var daysBilled = $scope.getDays();
				var weeksBilled = $scope.getWeeks();

				if (feeHours >= rate.day) {
					hoursBilled = 0;
					feeHours = 0;
					daysBilled += 1;
					feeDays = daysBilled * rate.day;
				}

				if (feeHours + feeDays >= rate.week) {
					hoursBilled = 0;
					feeHours = 0;
					daysBilled = 0;
					feeDays = 0;
					weeksBilled += 1;
					feeWeeks = weeksBilled * rate.week;
				}

				var duration = moment.duration({
					hours: hoursBilled,
					days: daysBilled,
					weeks: weeksBilled
				});

				return duration;
			};

			$scope.getHoursBilled = function() {
				return getDurationBilled().hours();
			};

			$scope.getDaysBilled = function() {
				return Math.floor(getDurationBilled().asDays() % 7);
			};

			$scope.getWeeksBilled = function() {
				return Math.floor(getDurationBilled().asDays() / 7);
			};
		}
	]);