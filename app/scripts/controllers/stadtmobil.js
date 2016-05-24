'use strict';

/**
 * @ngdoc function
 * @name c2gyoApp.controller:SmCtrl
 * @description
 * # SmCtrl
 * Controller of the c2gyoApp
 */
angular.module('c2gyoApp')
  .controller('StadtmobilCtrl', [
    '$scope',
    'stadtmobiltariffbasic',
    'stadtmobiltariffclassic',
    'stadtmobiltariffbusiness',
    'duration',
    'state',
    function(
      $scope,
      stadtmobiltariffbasic,
      stadtmobiltariffclassic,
      stadtmobiltariffbusiness,
      duration,
      state) {

      var vendor = 'stadtmobil';
      $scope.vendor = vendor;
      var createForm = function(tariffs, type) {
        for (var key in tariffs) {
          if (tariffs.hasOwnProperty(key)) {
            var tariff = tariffs[key];
            tariff.model = 'rental.' + vendor + '.' + type;
            tariff.value = tariff.technicalName;
            tariff.id = type + '.' + tariff.technicalName;
            tariff.popover = 'popover.' + vendor + '.' + type + '.'
              + tariff.technicalName;
          }
        }
        return tariffs;
      };

      var tariffs = [
        {
          'technicalName': 'classic',
          'name': 'Classic'
        },
        {
          'technicalName': 'basic',
          'name': 'Basic'
        },
        {
          'technicalName': 'studi',
          'name': 'Studi'
        },
        {
          'technicalName': 'business',
          'name': 'Business'
        }
      ];
      $scope.tariffs = createForm(tariffs, 'tariff');

      var carclasses = [
        {
          'technicalName': 'a',
          'name': 'A Kleinstwagen'
        },
        {
          'technicalName': 'b',
          'name': 'B Kleinwagen'
        },
        {
          'technicalName': 'c',
          'name': 'C Kombi/Fun'
        },
        {
          'technicalName': 'd',
          'name': 'D Komfort/Kleinbus'
        },
        {
          'technicalName': 'f',
          'name': 'F Transporter'
        }
      ];
      $scope.carclasses = createForm(carclasses, 'carclass');

      $scope.rental = state.rental;
      $scope.resolution = function() {
        return ['hours', 'days', 'weeks'];
      };
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

        var feeHours = $scope.getHours() * rate.hour;
        var feeDays = $scope.getDays() * rate.day;

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
          daysBilled = 0;
          weeksBilled += 1;
        }

        var duration = moment.duration({
          hours: hoursBilled,
          days: daysBilled,
          weeks: weeksBilled
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
        var carclass = $scope.rental.stadtmobil.carclass;
        var tariff = $scope.rental.stadtmobil.tariff;
        var rate = {};

        // studi and classic have the same rates
        if (tariff === 'classic' || tariff === 'studi') {
          rate = stadtmobiltariffclassic[carclass];
        } else if (tariff === 'basic') {
          rate = stadtmobiltariffbasic[carclass];
        } else { // tariff === business
          rate = stadtmobiltariffbusiness[carclass];
        }

        return rate;
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

        var feeHours = $scope.getHoursBilled() * rate.hour;
        var feeDays = $scope.getDaysBilled() * rate.day;
        var feeWeeks = $scope.getWeeksBilled() * rate.week;

        var fee = feeHours + feeDays + feeWeeks;

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
        var totalFeeHours = 0;
        var totalFeeDays = 0;
        var totalFeeWeeks = 0;
        var rate = getCurrentRate().time;
        var feeDay = rate.day;
        var feeWeek = rate.week;

        // init variables for billed time
        var hoursBilled = 0;
        var daysBilled = 0;
        var weeksBilled = 0;

        var startDate = new moment($scope.rental.startDate);
        var endDate = new moment($scope.rental.endDate);
        var currentTime = startDate.clone();

        // go through with weeks
        while (currentTime.clone().add(1, 'w') < endDate) {
          totalFeeWeeks += feeWeek;
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

        // time billed
        var duration = moment.duration({
          hours: hoursBilled,
          days: daysBilled,
          weeks: weeksBilled
        });

        // fee billed
        var totalFee = totalFeeDays + totalFeeHours + totalFeeWeeks;

        return {
          duration: duration,
          fee: totalFee
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
