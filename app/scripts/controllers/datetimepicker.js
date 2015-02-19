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
    'smConfig',
    function($scope, stadtmobilRates, smConfig) {
      moment.locale('de');
      $scope.startDate = new moment();
      $scope.endDate = new moment().add(10, 'h');
      $scope.distance = 10;

      $scope.timeHours = 10;
      $scope.timeDays = 0;
      $scope.timeWeeks = 0;

      $scope.rate = smConfig.rate;
      $scope.tariff = smConfig.tariff;

      $scope.resolution = ['hours', 'days', 'weeks'];
      $scope.resolutionTime = ['hours', 'days', 'weeks'];

      //-----------------------------------------------------------------------
      // simple or exact time calculation?
      //-----------------------------------------------------------------------
      $scope.tab = 'simple';
      $scope.isSet = function(checkTab) {
        return this.tab === checkTab;
      };
      $scope.setTab = function(setTab) {
        this.tab = setTab;
      };

      //-----------------------------------------------------------------------
      // convert dates and minutes, hours, weeks into durations
      //-----------------------------------------------------------------------
      $scope.getDurationSimple = function(hours, days, weeks) {
        var durationHours = moment.duration(hours, 'h');
        var durationDays = moment.duration(days, 'd');
        var durationWeeks = moment.duration(weeks, 'w');

        var durationAll = durationHours.add(durationDays).add(durationWeeks);
        return durationAll;
      };

      $scope.getDurationExact = function(start, end) {
        return moment.duration(end - start);
      };

      var getDurationAll = function() {
        var duration;
        if ($scope.isSet('simple')) {
          duration = $scope.getDurationSimple(
            $scope.timeHours,
            $scope.timeDays,
            $scope.timeWeeks
          );
        } else {
          duration = $scope.getDurationExact($scope.startDate, $scope.endDate);
        }
        return duration;
      };

      //-----------------------------------------------------------------------
      // get actual time
      //-----------------------------------------------------------------------
      $scope.getHours = function() {
        return getDurationAll().hours();
      };

      $scope.getDays = function() {
        return Math.floor(getDurationAll().asDays() % 7);
      };

      $scope.getWeeks = function() {
        return Math.floor(getDurationAll().asDays() / 7);
      };

      //-----------------------------------------------------------------------
      // get billed time
      //-----------------------------------------------------------------------
      $scope.getHoursBilled = function() {
        return getDurationBilled().hours();
      };

      $scope.getDaysBilled = function() {
        return Math.floor(getDurationBilled().asDays() % 7);
      };

      $scope.getWeeksBilled = function() {
        return Math.floor(getDurationBilled().asDays() / 7);
      };

      var getDurationBilled = function() {
        var rate = getCurrentRate();

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

      //-----------------------------------------------------------------------
      // get current rate
      //-----------------------------------------------------------------------
      var getCurrentRate = function() {
        var rate = $scope.rate;
        var tariff = $scope.tariff;
        // studi and classic have the same rates
        if (tariff === 'studi') {
          tariff = 'classic';
        }
        return stadtmobilRates[tariff][rate];
      };

      //-----------------------------------------------------------------------
      // get price for used time
      //-----------------------------------------------------------------------
      $scope.getFeeTime = function(duration, rate) {
        var feeHours = duration.hours() * rate.hour;
        var feeDays = Math.floor(duration.asDays() % 7) * rate.day;
        var feeWeeks = Math.floor(duration.asDays() / 7) * rate.week;

        var fee = feeHours + feeDays + feeWeeks;
        return fee;
      };

      $scope.priceTimeSimple = function(timeHours, timeDays, timeWeeks) {
        var currentRate = getCurrentRate();
        var duration = $scope.getDurationSimple(timeHours, timeDays, timeWeeks);
        return $scope.getFeeTime(duration, currentRate);
      };

      $scope.priceTimeExact = function(startDate, endDate) {
        var currentRate = getCurrentRate();
        var duration = $scope.getDurationExact(startDate, endDate);
        return $scope.getFeeTime(duration, currentRate);
      };

      //-----------------------------------------------------------------------
      // get price for distance
      //-----------------------------------------------------------------------
      $scope.getFeeDistance = function(km, rate) {
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

      $scope.priceDistance = function(km) {
        var currentRate = getCurrentRate();
        return $scope.getFeeDistance(km, currentRate);
      };

      //-----------------------------------------------------------------------
      // get other fees
      //-----------------------------------------------------------------------

      //-----------------------------------------------------------------------
      // calculate final prices
      //-----------------------------------------------------------------------
      $scope.priceExact = function(
        distance,
        startDate,
        endDate) {
        return (
          $scope.priceDistance(distance) +
          $scope.priceTimeExact(startDate, endDate)
        );
      };

      $scope.priceSimple = function(
        distance,
        timeHours,
        timeDays,
        timeWeeks) {
        return (
          $scope.priceDistance(distance) +
          $scope.priceTimeSimple(timeHours, timeDays, timeWeeks)
        );
      };

    }
  ]);
