'use strict';

/**
 * @ngdoc function
 * @name c2gyoApp.controller:SmdtpCtrl
 * @description
 * # SmdtpCtrl
 * Controller of the c2gyoApp
 */
angular.module('c2gyoApp')
  .controller('SmdtpCtrl', [
    '$scope',
    'stadtmobilRates',
    'smConfig',
    function($scope, stadtmobilRates, smConfig) {
      var now = new moment();
      $scope.rental = {
        startDate: now.clone().startOf('hour').add(1, 'h'),
        endDate: now.clone().startOf('hour').add(10, 'h'),
        distance: 10,
        timeHours: 10,
        timeDays: 0,
        timeWeeks: 0
      };

      $scope.rate = {
        carClass: smConfig.carClass,
        tariff: smConfig.tariff
      };

      $scope.resolution = ['hours', 'days', 'weeks'];
      $scope.resolutionTime = ['hours', 'days', 'weeks'];

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
        var durationWeeks = moment.duration($scope.rental.timeWeeks, 'w');

        var durationAll = durationHours.add(durationDays).add(durationWeeks);
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
        var carClass = $scope.rate.carClass;
        var tariff = $scope.rate.tariff;
        // studi and classic have the same rates
        if (tariff === 'studi') {
          tariff = 'classic';
        }
        return stadtmobilRates[tariff][carClass];
      };

      //-----------------------------------------------------------------------
      // get price for used time
      //-----------------------------------------------------------------------
      $scope.getFeeTime = function() {
        var fee;

        if ($scope.tab === 'simple') {
          fee = getFeeTimeSimple();
        } else {
          fee = getFeeTimeExact();
        }

        return fee;
      };

      var getFeeTimeSimple = function() {
        var rate = getCurrentRate();

        var feeHours = $scope.getHoursBilled() * rate.hour;
        var feeDays = $scope.getDaysBilled() * rate.day;
        var feeWeeks = $scope.getWeeksBilled() * rate.week;

        var fee = feeHours + feeDays + feeWeeks;

        return fee;
      };

      var getFeeTimeExact = function() {
        var fee = 0;
        var rate = getCurrentRate();

        var startDate = new moment($scope.rental.startDate);
        var endDate = new moment($scope.rental.endDate);

        for (var i = startDate; i < endDate; i.add(1, 'h')) {
          if (i.hour >= 0 && i.hour < 7) {
            fee += rate.night;
          } else {
            fee += rate.hour;
          }
        }

        return fee;
      };

      //-----------------------------------------------------------------------
      // get price for distance
      //-----------------------------------------------------------------------
      $scope.getFeeDistance = function() {
        var rate = getCurrentRate();
        var km = $scope.rental.distance;

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

      //-----------------------------------------------------------------------
      // get other fees
      //-----------------------------------------------------------------------

      //-----------------------------------------------------------------------
      // calculate final prices
      //-----------------------------------------------------------------------
      $scope.price = function() {
        return (
          $scope.getFeeTime() +
          $scope.getFeeDistance()
        );
      };
    }
  ]);
