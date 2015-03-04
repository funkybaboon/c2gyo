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
    function($scope, config) {
      $scope.startDate = new moment().startOf('hour').add(1, 'h');
      $scope.endDate = $scope.startDate.clone().add(10, 'h');
      $scope.distance = 10;

      $scope.vendor = config.vendor;
      $scope.distance = 10;
      $scope.timeMinutes = 0;
      $scope.timeHours = 10;
      $scope.timeDays = 0;
      $scope.timeStanding = 0;
      $scope.airport = false;

      $scope.feeDay = 59;
      $scope.feeHour = 14.9;
      $scope.feeMinute = 0.29;

      $scope.feeAdditionalKm = 0.29;

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
      $scope.getDurationSimple = function() {
        var durationMinutes = moment.duration($scope.timeMinutes, 'm');
        var durationHours = moment.duration($scope.timeHours, 'h');
        var durationDays = moment.duration($scope.timeDays, 'd');

        var durationAll = durationMinutes.add(durationHours).add(durationDays);
        return durationAll;
      };

      $scope.getDurationExact = function() {
        return moment.duration($scope.endDate - $scope.startDate);
      };

      var getDurationAll = function() {
        var duration;
        if ($scope.isSet('simple')) {
          duration = $scope.getDurationSimple();
        } else {
          duration = $scope.getDurationExact();
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

      //-----------------------------------------------------------------------
      // get current rate
      //-----------------------------------------------------------------------

      //-----------------------------------------------------------------------
      // get price for used time
      //-----------------------------------------------------------------------
      $scope.getFeeTime = function() {
        var feeMinutes = $scope.getMinutesBilled() * $scope.feeMinute;
        var feeHours = $scope.getHoursBilled() * $scope.feeHour;
        var feeDays = $scope.getDaysBilled() * $scope.feeDay;
        var feeStanding = $scope.getFeeStanding();

        var fee = feeMinutes + feeHours + feeDays + feeStanding;
        return fee;
      };

      //-----------------------------------------------------------------------
      // get price for distance
      //-----------------------------------------------------------------------
      $scope.getFeeDistance = function() {
        var fee = ($scope.distance - 50) * $scope.feeAdditionalKm;
        if (fee < 0) {
          fee = 0;
        }
        return fee;
      };

      //-----------------------------------------------------------------------
      // get other fees
      //-----------------------------------------------------------------------
      $scope.getFeeStanding = function() {
        return $scope.timeStanding * 0.19;
      };

      $scope.getFeeAirport = function() {
        var fee = 0;
        if ($scope.airport) {
          fee = 4.90;
        }
        return fee;
      };

      //-----------------------------------------------------------------------
      // calculate final prices
      //-----------------------------------------------------------------------
      $scope.price = function() {
        return (
          $scope.getFeeTime() +
          $scope.getFeeDistance() +
          $scope.getFeeAirport()
        );
      };
    }
  ]);
