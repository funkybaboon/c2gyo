'use strict';

/**
 * @ngdoc function
 * @name c2gyoApp.controller:DatetimepickerCtrl
 * @description
 * # DatetimepickerCtrl
 * Controller of the c2gyoApp
 */
angular.module('c2gyoApp')
	.controller('DatetimepickerCtrl', [
		'$scope',
		'stadtmobilRates',
		function($scope, stadtmobilRates) {
			moment.locale('de');
			$scope.startDate = new moment();
			$scope.endDate = new moment().add(10, 'h');
			$scope.distance = 10;

			$scope.rate = 'A';
			$scope.tariff = 'classic';

			$scope.resolutionTime = ['hours', 'days', 'weeks'];

			var getDurationExact = function(start, end) {
				var timespan = moment.duration(end - start);
				var timespanExact = {
					hours: timespan.hours(),
					days: Math.floor(timespan.asDays() % 7),
					weeks: Math.floor(timespan.asDays() / 7)
				};
				return timespanExact;
			};

			var getFeeTime = function(timespan, rate) {
				return (
					timespan.hours * rate.hour +
					timespan.days * rate.day +
					timespan.weeks * rate.week
				);
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

			var priceTime = function(startDate, endDate, rate, tariff) {
				var currentRate = getCurrentRate(rate, tariff);
				var duration = getDurationExact(startDate, endDate);
				return getFeeTime(duration, currentRate);
			};

			var price = function(
				distance,
				startDate,
				endDate,
				rate,
				tariff) {
				return (
					priceDistance(distance, rate, tariff) +
					priceTime(startDate, endDate, rate, tariff)
				);
			};

			$scope.price = price;
			$scope.priceDistance = priceDistance;
			$scope.priceTime = priceTime;
			$scope.getDurationExact = getDurationExact;

			//-------------------------------------------------------------------------
			// Billing Box Hack
			//-------------------------------------------------------------------------
			var getDurationAll = function() {
				return moment.duration($scope.endDate - $scope.startDate);
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