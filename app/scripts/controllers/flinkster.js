'use strict';

/**
 * @ngdoc function
 * @name c2gyoApp.controller:SmdtpCtrl
 * @description
 * # SmdtpCtrl
 * Controller of the c2gyoApp
 */
angular.module('c2gyoApp')
  .controller('FlinksterCtrl', [
    '$scope',
    'flinksterratebundesweit',
    'flinksterratelokal',
    'flinksterConfig',
    'duration',
    'state',
    function(
      $scope,
      flinksterratebundesweit,
      flinksterratelokal,
      flinksterConfig,
      duration,
      state) {

      $scope.rental = state.rental;
      $scope.clear = function() {
        state.clearRental($scope.rental.tab);
      };

      $scope.rate = {
        tariff: flinksterConfig.tariff,
        carClass: flinksterConfig.carClass
      };

      $scope.resolution = ['hours', 'days'];
      $scope.resolutionTime = ['hours', 'days'];

      //-----------------------------------------------------------------------
      // convert dates and minutes, hours, weeks into durations
      //-----------------------------------------------------------------------
      var durationAll = function() {
        return duration.getDurationAll($scope.rental);
      };

      //-----------------------------------------------------------------------
      // get actual time
      //-----------------------------------------------------------------------
      $scope.getHours = function() {
        return durationAll().hours();
      };

      $scope.getDays = function() {
        return Math.floor(durationAll().asDays() % 7);
      };

      $scope.getWeeks = function() {
        return Math.floor(durationAll().asDays() / 7);
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

      //-----------------------------------------------------------------------
      // calculate billed time
      //-----------------------------------------------------------------------
      var getDurationBilled = function() {
        var durationBilled;

        if ($scope.rental.tab === 'simple') {
          durationBilled = getDurationBilledSimple();
        } else {
          durationBilled = getDurationBilledExact();
        }

        return durationBilled;
      };

      var getDurationBilledSimple = function() {
        var rate = getCurrentRate().time;

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

      var getDurationBilledExact = function() {
        var totalFee = 0;
        var totalFeeHours = 0;
        var totalFeeDays = 0;
        var rate = getCurrentRate().time;

        var feeDay = rate.day;
        var feeWeek = rate.week;

        var startDate = new moment($scope.rental.startDate);
        var endDate = new moment($scope.rental.endDate);

        var currentTime = startDate.clone();

        var hoursBilled = 0;
        var daysBilled = 0;
        var weeksBilled = 0;

        // go through with weeks
        while (currentTime.clone().add(1, 'w') < endDate) {
          totalFee += feeWeek;
          currentTime.add(1, 'w');
          weeksBilled++;
        }

        // go through with days
        var startOfDays = currentTime.clone();
        while (currentTime.clone().add(1, 'd') < endDate) {
          totalFeeDays += feeDay;
          currentTime.add(1, 'd');
          daysBilled++;
        }

        // check to see if it is cheaper to rent for the full week
        if (totalFeeDays >= feeWeek) {
          totalFeeDays = feeWeek;
          currentTime = startOfDays.add(1, 'w');
          daysBilled = 0;
          weeksBilled++;
        }

        // go through hours exactly until endate - 1 hour
        for (var i = currentTime.clone(); i < endDate; i.add(1, 'h')) {
          var day = i.isoWeekday();
          var hour = i.hour();
          var currentRate = rate[day];

          // loop through possible hour rates
          for (var j = 0; j <= currentRate.length - 1; j++) {
            var start = currentRate[j].start;
            var end = currentRate[j].end;
            var fee = currentRate[j].fee;

            if (hour >= start && hour <= end) {
              //console.log('Day: ' + day + ' hour: ' + hour + ' fee: ' + fee);
              totalFeeHours += fee;
              hoursBilled++;
            }
          }
        }

        // check to see if it is cheaper to rent for the full day
        if (totalFeeHours >= feeDay) {
          totalFeeHours = feeDay;
          hoursBilled = 0;
          daysBilled++;
        }

        // check to see if it is cheaper to rent for the full week
        if (totalFeeDays + totalFeeHours >= feeWeek) {
          totalFeeHours = 0;
          totalFeeDays = feeWeek;
          hoursBilled = 0;
          daysBilled = 0;
          weeksBilled++;
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
        var rate = {};

        // studi and classic have the same rates
        if (tariff === 'studi') {
          tariff = 'classic';
        }

        if (tariff === 'classic') {
          rate = flinksterratelokal[carClass];
        } else if (tariff === 'basic') {
          rate = flinksterratebundesweit[carClass];
        } else {
          rate = [carClass];
        }

        return rate;
      };

      //-----------------------------------------------------------------------
      // get price for used time
      //-----------------------------------------------------------------------
      $scope.getFeeTime = function() {
        var fee;

        if ($scope.rental.tab === 'simple') {
          fee = getFeeTimeSimple();
        } else {
          fee = getFeeTimeExact();
        }

        return fee;
      };

      var getFeeTimeSimple = function() {
        var rate = getCurrentRate().time;

        var feeHours = $scope.getHoursBilled() * rate.hour;
        var feeDays = $scope.getDaysBilled() * rate.day;
        var feeWeeks = $scope.getWeeksBilled() * rate.week;

        var fee = feeHours + feeDays + feeWeeks;

        return fee;
      };

      var getFeeTimeExact = function() {
        var totalFee = 0;
        var totalFeeHours = 0;
        var totalFeeDays = 0;
        var rate = getCurrentRate().time;

        var feeDay = rate.day;
        var feeWeek = rate.week;

        var startDate = new moment($scope.rental.startDate);
        var endDate = new moment($scope.rental.endDate);

        var currentTime = startDate.clone();

        // go through with weeks
        while (currentTime.clone().add(1, 'w') < endDate) {
          totalFee += feeWeek;
          currentTime.add(1, 'w');
        }

        // go through with days
        var startOfDays = currentTime.clone();
        while (currentTime.clone().add(1, 'd') < endDate) {
          totalFeeDays += feeDay;
          currentTime.add(1, 'd');
        }

        // check to see if it is cheaper to rent for the full week
        if (totalFeeDays >= feeWeek) {
          totalFeeDays = feeWeek;
          currentTime = startOfDays.add(1, 'w');
        }

        // go through hours exactly until endate - 1 hour
        for (var i = currentTime.clone(); i < endDate; i.add(1, 'h')) {
          var day = i.isoWeekday();
          var hour = i.hour();
          var currentRate = rate[day];

          // loop through possible hour rates
          for (var j = 0; j <= currentRate.length - 1; j++) {
            var start = currentRate[j].start;
            var end = currentRate[j].end;
            var fee = currentRate[j].fee;

            if (hour >= start && hour <= end) {
              //console.log('Day: ' + day + ' hour: ' + hour + ' fee: ' + fee);
              totalFeeHours += fee;
            }
          }
        }

        // check to see if it is cheaper to rent for the full day
        if (totalFeeHours >= feeDay) {
          totalFeeHours = feeDay;
        }

        // check to see if it is cheaper to rent for the full week
        if (totalFeeDays + totalFeeHours >= feeWeek) {
          totalFeeHours = 0;
          totalFeeDays = feeWeek;
        }

        return (totalFee + totalFeeDays + totalFeeHours);
      };

      //-----------------------------------------------------------------------
      // get price for distance
      //-----------------------------------------------------------------------
      $scope.getFeeDistance = function() {
        var rate = getCurrentRate().km;
        var km = $scope.rental.distance;
        var totalFee = 0;

        // counter for possible km rates
        var k = 0;

        // go through kms
        while (km > 0) {
          var start = rate[k].start;
          var end = rate[k].end;
          var fee = rate[k].fee;
          var range = end - start;

          if (km <= range || end === -1) {
            totalFee += (km * fee);
            km = 0;
          } else {
            km = km - range;
            totalFee += (range * fee);
            k++;
          }
        }

        return totalFee;
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
