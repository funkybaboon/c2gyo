'use strict';

/**
 * @ngdoc function
 * @name c2gyoApp.controller:C2gdtpCtrl
 * @description
 * # C2gdtpCtrl
 * Controller of the c2gyoApp
 */
angular.module('c2gyoApp')
  .controller('C2gbdtpCtrl', [
    '$scope',
    'c2gConfig',
    function($scope, c2gConfig) {
      moment.locale('de');
      $scope.startDate = new moment();
      $scope.endDate = new moment().add(10, 'h');
      $scope.distance = 10;

      $scope.vendor = c2gConfig.vendor;
      $scope.distance = 10;
      $scope.timeMinutes = 0;
      $scope.timeHours = 10;
      $scope.timeDays = 0;
      $scope.timeStanding = 0;
      $scope.airport = false;

      $scope.feeDay = 89;
      $scope.feeHour = 14.9;

      $scope.feeAdditionalKm = 0.29;

      $scope.resolution = [
        'hours',
        'days',
        'airport'
      ];
      $scope.resolutionTime = ['hours', 'days'];

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
      $scope.getDurationSimple = function(hours, days) {
        var durationHours = moment.duration(hours, 'h');
        var durationDays = moment.duration(days, 'd');

        var durationAll = durationHours.add(durationDays);
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
        var feeHours = $scope.getHours() * $scope.feeHour;
        var feeDays = $scope.getDays() * $scope.feeDay;

        var hoursBilled = $scope.getHours();
        var daysBilled = $scope.getDays();

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

      //-----------------------------------------------------------------------
      // get current rate
      //-----------------------------------------------------------------------

      //-----------------------------------------------------------------------
      // get price for used time
      //-----------------------------------------------------------------------
      $scope.getFeeTime = function() {
        var feeHours = $scope.getHoursBilled() * $scope.feeHour;
        var feeDays = $scope.getDaysBilled() * $scope.feeDay;
        var feeStanding = $scope.getFeeStanding();

        var fee = feeHours + feeDays + feeStanding;
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