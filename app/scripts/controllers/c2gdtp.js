'use strict';

/**
 * @ngdoc function
 * @name c2gyoApp.controller:C2gdtpCtrl
 * @description
 * # C2gdtpCtrl
 * Controller of the c2gyoApp
 */
angular.module('c2gyoApp')
  .controller('C2gdtpCtrl', [
    '$scope',
    'c2gConfig',
    function($scope, c2gConfig) {
      moment.locale('de');
      $scope.startDate = new moment();
      $scope.endDate = new moment().add(10, 'h');
      $scope.distance = 10;

      $scope.vendor = c2gConfig.vendor;
      $scope.distance = 10;
      $scope.time = 20;
      $scope.timeStanding = 0;
      $scope.airport = false;

      $scope.feeDay = 59;
      $scope.feeHour = 14.9;
      $scope.feeMinute = 0.29;

      $scope.feeAdditionalKm = 0.29;

      $scope.timeMinutes = 0;
      $scope.timeHours = 10;
      $scope.timeDays = 0;

      $scope.resolution = [
        'minutes',
        'minutesStanding',
        'hours',
        'days',
        'airport'
        ];
      $scope.resolutionTime = ['minutes', 'hours', 'days'];

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
      $scope.getDurationSimple = function(minutes, hours, days) {
        var durationMinutes = moment.duration(minutes, 'm');
        var durationHours = moment.duration(hours, 'h');
        var durationDays = moment.duration(days, 'd');

        var durationAll = durationMinutes.add(durationHours).add(durationDays);
        return durationAll;
      };

      $scope.getDurationExact = function(start, end) {
        return moment.duration(end - start);
      };

      var getDurationAll = function() {
        var duration;
        if ($scope.isSet('simple')) {
          duration = $scope.getDurationSimple(
            $scope.timeMinutes,
            $scope.timeHours,
            $scope.timeDays
          );
        } else {
          duration = $scope.getDurationExact($scope.startDate, $scope.endDate);
        }
        return duration;
      };

      //-----------------------------------------------------------------------
      // get actual time
      //-----------------------------------------------------------------------
      $scope.getMinutes = function() {
        return getDurationAll().minutes();
      };

      $scope.getHours = function() {
        return getDurationAll().hours();
      };

      $scope.getDays = function() {
        return Math.floor(getDurationAll().asDays());
      };

      //-----------------------------------------------------------------------
      // get billed time
      //-----------------------------------------------------------------------
      $scope.getMinutesBilled = function() {
        return getDurationBilled().minutes();
      };

      $scope.getHoursBilled = function() {
        return getDurationBilled().hours();
      };

      $scope.getDaysBilled = function() {
        return Math.floor(getDurationBilled().asDays());
      };

      var getDurationBilled = function() {
        var feeMinutes = $scope.getMinutes() * $scope.feeMinute;
        var feeHours = $scope.getHours() * $scope.feeHour;
        var feeDays = $scope.getDays() * $scope.feeDay;

        var minutesBilled = $scope.getMinutes();
        var hoursBilled = $scope.getHours();
        var daysBilled = $scope.getDays();

        if (feeMinutes >= $scope.feeHour) {
          minutesBilled = 0;
          feeMinutes = 0;
          hoursBilled += 1;
          feeHours = hoursBilled * $scope.feeHour;
        }

        if (feeMinutes + feeHours >= $scope.feeDay) {
          minutesBilled = 0;
          feeMinutes = 0;
          hoursBilled = 0;
          feeHours = 0;
          daysBilled += 1;
          feeDays = daysBilled * $scope.feeDay;
        }

        var duration = moment.duration({
          minutes: minutesBilled,
          hours: hoursBilled,
          days: daysBilled,
        });

        return duration;
      };

      /*
      //-----------------------------------------------------------------------
      // get current rate
      //-----------------------------------------------------------------------

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
        var duration = $scope.getDurationSimple(timeHours, timeDays, timeWeeks);
        return $scope.getFeeTime(duration, currentRate);
      };

      $scope.priceTimeExact = function(startDate, endDate) {
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
      };*/



    }
  ]);
