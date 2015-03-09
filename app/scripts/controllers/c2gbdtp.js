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
      var now = new moment();
      $scope.rental = {
        startDate: now.clone().startOf('hour').add(1, 'h'),
        endDate: now.clone().startOf('hour').add(10, 'h'),
        distance: 10,
        timeHours: 10,
        timeDays: 0,
        timeStanding: 0,
        airport: false
      };

      $scope.vendor = c2gConfig.vendor;

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

      //-----------------------------------------------------------------------
      // convert dates and minutes, hours, weeks into durations
      //-----------------------------------------------------------------------
      $scope.getDurationSimple = function() {
        var durationHours = moment.duration($scope.rental.timeHours, 'h');
        var durationDays = moment.duration($scope.rental.timeDays, 'd');

        var durationAll = durationHours.add(durationDays);
        return durationAll;
      };

      $scope.getDurationExact = function() {
        return moment.duration($scope.rental.endDate - $scope.rental.startDate);
      };

      var getDurationAll = function() {
        var duration;
        if ($scope.tab === 'simple') {
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
        var fee = ($scope.rental.distance - 50) * $scope.feeAdditionalKm;
        if (fee < 0) {
          fee = 0;
        }
        return fee;
      };

      //-----------------------------------------------------------------------
      // get other fees
      //-----------------------------------------------------------------------
      $scope.getFeeStanding = function() {
        return $scope.rental.timeStanding * 0.19;
      };

      $scope.getFeeAirport = function() {
        var fee = 0;
        if ($scope.rental.airport) {
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
