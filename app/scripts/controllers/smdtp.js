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
    'stadtmobilratebasic',
    'stadtmobilrateclassic',
    'smConfig',
    'duration',
    'state',
    function(
      $scope,
      stadtmobilratebasic,
      stadtmobilrateclassic,
      smConfig,
      duration,
      state) {
      $scope.rental = state.rental;
      $scope.clear = function() {
        state.clearRental($scope.rental.tab);
      };

      $scope.rate = {
        carClass: smConfig.carClass,
        tariff: smConfig.tariff
      };

      $scope.resolution = ['hours', 'days', 'weeks'];
      $scope.resolutionTime = ['hours', 'days', 'weeks'];

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
        var rate = {};

        // studi and classic have the same rates
        if (tariff === 'studi') {
          tariff = 'classic';
        }

        if (tariff === 'classic') {
          rate = stadtmobilrateclassic[carClass];
        } else if (tariff === 'basic') {
          rate = stadtmobilratebasic[carClass];
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
        var rate = getCurrentRate().time;

        var startDate = new moment($scope.rental.startDate);
        var endDate = new moment($scope.rental.endDate);

        // go through until endate - 1 hour
        for (var i = startDate.clone(); i < endDate; i.add(1, 'h')) {
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
              totalFee += fee;
            }
          }

        }

        return totalFee;
      };

      //-----------------------------------------------------------------------
      // get price for distance
      //-----------------------------------------------------------------------
      $scope.getFeeDistance = function() {
        var rate = getCurrentRate().km;
        var km = $scope.rental.distance;

        //console.log(rate);

        var fee = 0;
        if (km >= 701) {
          fee = 100 * rate[0].fee + 600 * rate[1].fee + (km - 700) * rate[2].fee;
        } else if (km < 701 && km >= 101) {
          fee = 100 * rate[0].fee + (km - 100) * rate[1].fee;
        } else {
          fee = km * rate[0].fee;
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
