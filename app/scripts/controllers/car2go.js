'use strict';

/**
 * @ngdoc function
 * @name c2gyoApp.controller:SmCtrl
 * @description
 * # SmCtrl
 * Controller of the c2gyoApp
 */
angular.module('c2gyoApp')
  .controller('Car2goCtrl', [
    '$scope',
    'car2gotariff',
    'duration',
    'state',
    function($scope,
              car2gotariff,
              duration,
              state) {

      var vendor = 'car2go';
      $scope.vendor = vendor;
      var createForm = function(tariffs, type) {
        for (var key in tariffs) {
          if (tariffs.hasOwnProperty(key)) {
            var tariff = tariffs[key];
            tariff.model = 'rental.' + vendor + '.' + type;
            tariff.value = tariff.technicalName;
            tariff.id = type + '.' + tariff.technicalName;
            tariff.popover = 'popover.' + vendor + '.' + type + '.' +
              tariff.technicalName;
          }
        }
        return tariffs;
      };

      var carclasses = [
        {
          'technicalName': 'smart',
          'name': 'smart'
        },
        {
          'technicalName': 'mercedesbenz1',
          'name': 'Mercedes-Benz 1'
        },
        {
          'technicalName': 'mercedesbenz2',
          'name': 'Mercedes-Benz 2'
        }
      ];
      $scope.carclasses = createForm(carclasses, 'carclass');

      $scope.rental = state.rental;
      $scope.resolution = function() {
        var resolution = [
          'minutes',
          'minutesStanding',
          'hours',
          'days'
        ];

        if (durationAll().asMinutes() > 60 * 24 * 7) {
          resolution.push('weeks');
        }

        return resolution;
      };

      $scope.resolutionTime = [
        'minutes',
        'hours',
        'days'
      ];

      //-----------------------------------------------------------------------
      // convert dates and minutes, hours, weeks into durations
      //-----------------------------------------------------------------------
      var durationAll = function() {
        return duration.getDurationAll($scope.rental);
      };

      //-----------------------------------------------------------------------
      // get actual time
      //-----------------------------------------------------------------------
      $scope.getMinutes = function() {
        return durationAll().minutes();
      };

      $scope.getHours = function() {
        return durationAll().hours();
      };

      $scope.getDays = function() {
        return Math.floor(durationAll().asDays());
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

      //-----------------------------------------------------------------------
      // calculate billed time
      //-----------------------------------------------------------------------
      var getDurationBilled = function() {
        var durationBilled;

        if ($scope.rental.tab === 'tabSimple') {
          durationBilled = getDurationBilledSimple();
        } else {
          durationBilled = getDurationBilledExact();
        }

        return durationBilled;
      };

      var getDurationBilledSimple = function() {
        var rate = getCurrentRate().time;

        var feeMinutes = $scope.getMinutes() * rate.minute;
        var feeHours = $scope.getHours() * rate.hour;
        var feeDays = $scope.getDays() * rate.day;

        var minutesBilled = $scope.getMinutes();
        var hoursBilled = $scope.getHours();
        var daysBilled = $scope.getDays();

        if (feeMinutes >= rate.hour) {
          minutesBilled = 0;
          feeMinutes = 0;
          hoursBilled += 1;
          feeHours = hoursBilled * rate.hour;
        }

        if (feeMinutes + feeHours >= rate.day) {
          minutesBilled = 0;
          hoursBilled = 0;
          feeMinutes = 0;
          feeHours = 0;
          daysBilled += 1;
          feeDays = daysBilled * rate.day;
        }

        var duration = moment.duration({
          minutes: minutesBilled,
          hours: hoursBilled,
          days: daysBilled,
        });

        return duration;
      };

      var getDurationBilledExact = function() {
        return getDurationAndFeeExact().duration;
      };

      //-----------------------------------------------------------------------
      // get current rate
      //-----------------------------------------------------------------------
      var getCurrentRate = function() {
        var carclass = $scope.rental.car2go.carclass;
        return car2gotariff[carclass];
      };

      //-----------------------------------------------------------------------
      // get price for used time
      //-----------------------------------------------------------------------
      $scope.getFeeTime = function() {
        var fee;

        if ($scope.rental.tab === 'tabSimple') {
          fee = getFeeTimeSimple();
        } else {
          fee = getFeeTimeExact();
        }

        return fee;
      };

      var getFeeTimeSimple = function() {
        var rate = getCurrentRate().time;

        var feeMinutes = $scope.getMinutesBilled() * rate.minute;
        var feeHours = $scope.getHoursBilled() * rate.hour;
        var feeDays = $scope.getDaysBilled() * rate.day;

        var fee = feeMinutes + feeHours + feeDays;

        return fee;
      };

      var getFeeTimeExact = function() {
        return getDurationAndFeeExact().fee;
      };

      //-----------------------------------------------------------------------
      // get duration and fee exact
      //-----------------------------------------------------------------------
      var getDurationAndFeeExact = function() {

        // init variables for calculating fee
        var totalFeeMinutes = 0;
        var totalFeeHours = 0;
        var totalFeeDays = 0;
        var totalFeeMinutesStanding =
          $scope.rental.timeStanding * car2gotariff.parking;

        var rate = getCurrentRate().time;
        var feeMinute = rate.minute;
        var feeHour = rate.hour;
        var feeDay = rate.day;

        // init variables for billed time
        var minutesBilled = 0;
        var hoursBilled = 0;
        var daysBilled = 0;
        var minutesStandingBilled = $scope.rental.timeStanding;

        var startDate = new moment($scope.rental.startDate);
        var endDate = new moment($scope.rental.endDate);
        var currentTime = startDate.clone();

        // go through with days
        while (currentTime.clone().add(1, 'd') < endDate) {
          totalFeeDays += feeDay;
          currentTime.add(1, 'd');
          daysBilled++;
        }

        // separate enddate as we don't want to count the minutes for hours
        var endDateForHours = endDate.clone().minute(0);

        // go through hours exactly until endate - 1 hour
        for (var i = currentTime.clone(); i < endDateForHours; i.add(1, 'h')) {
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
              currentTime.add(1, 'h');
              hoursBilled++;
            }
          }
        }

        // go through with minutes
        while (currentTime.clone() < endDate) {
          totalFeeMinutes += feeMinute;
          currentTime.add(1, 'm');
          minutesBilled++;
        }

        // check to see if it is cheaper to rent for the full hour
        if (totalFeeMinutes + totalFeeMinutesStanding >= feeHour &&
          minutesBilled !== 0) {
          minutesStandingBilled =
            60 - minutesBilled - minutesStandingBilled;

          // if we have over one hour with regular usage time and parking,
          // add the overtime fee
          if (minutesStandingBilled < 0) {
            minutesStandingBilled = Math.abs(minutesStandingBilled);
            totalFeeMinutesStanding =
              minutesStandingBilled * car2gotariff.parking;
          } else {
            totalFeeMinutesStanding = 0;
            minutesStandingBilled = 0;
          }

          minutesBilled = 0;
          totalFeeMinutes = 0;
          hoursBilled++;
          totalFeeHours += feeHour;
        }

        // check to see if it is cheaper to rent for the full day
        while (
        totalFeeMinutes + totalFeeHours + totalFeeMinutesStanding >= feeDay) {

          minutesStandingBilled =
            1440 - hoursBilled * 60 - minutesBilled - minutesStandingBilled;

          // if we have over one day with regular usage time and parking,
          // add the overtime fee
          if (minutesStandingBilled < 0) {
            minutesStandingBilled = Math.abs(minutesStandingBilled);
            totalFeeMinutesStanding =
              minutesStandingBilled * car2gotariff.parking;
          } else {
            totalFeeMinutesStanding = 0;
            minutesStandingBilled = 0;
          }

          totalFeeMinutes = 0;
          minutesBilled = 0;
          totalFeeHours = 0;
          hoursBilled = 0;
          totalFeeDays += feeDay;
          daysBilled++;
        }

        // time billed
        var duration = moment.duration({
          minutes: minutesBilled,
          hours: hoursBilled,
          days: daysBilled
        });

        // fee billed
        var totalFee =
          totalFeeMinutes +
          totalFeeHours +
          totalFeeDays +
          totalFeeMinutesStanding;

        /*
         console.log('totalFeeMinutes ', totalFeeMinutes);
         console.log('totalFeeHours ', totalFeeHours);
         console.log('totalFeeDays ', totalFeeDays);
         console.log('totalFeeMinutesStanding ', totalFeeMinutesStanding);
         */

        return {
          duration: duration,
          fee: totalFee,
          feeStanding: totalFeeMinutesStanding
        };
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
      $scope.getFeeStanding = function() {
        return getDurationAndFeeExact().minuteStanding;
      };

      $scope.getFeeAirport = function() {
        var fee = 0;
        for (var i in $scope.rental.car2go.airport) {
          if ($scope.rental.car2go.airport[i]) {
            fee += car2gotariff.airport[i];
          }
        }
        return fee;
      };

      //-----------------------------------------------------------------------
      // calculate final prices
      //-----------------------------------------------------------------------
      $scope.price = function() {/*
       console.log('getFeeAirport ', $scope.getFeeAirport());
       console.log('getFeeTime ', $scope.getFeeTime());
       console.log('getFeeDistance ', $scope.getFeeDistance());*/

        return (
          $scope.getFeeAirport() +
          $scope.getFeeTime() +
          $scope.getFeeDistance()
        );
      };
    }
  ]);
