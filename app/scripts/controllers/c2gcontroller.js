'use strict';

/**
 * @ngdoc function
 * @name c2gyoApp.controller:C2gCtrl
 * @description
 * # C2gCtrl
 * Controller of the c2gyoApp
 */
angular.module('c2gyoApp')
  .controller('C2gCtrl', ['$scope', 'c2gConfig', function($scope, c2gConfig) {
    $scope.vendor = c2gConfig.vendor;
    $scope.distance = 10;
    $scope.time = 20;
    $scope.timeStanding = 0;
    $scope.airport = false;

    $scope.feeDay = 59;
    $scope.feeHour = 14.9;
    $scope.feeMinute = 0.29;

    $scope.feeAdditionalKm = 0.29;

    $scope.showMsgRoundDownToDays = false;
    $scope.showMsgRoundDownToHours = false;

    $scope.msgRoundDownToHours = ' (abgerundet auf Stundengebühr)';
    $scope.msgRoundDownToDays = ' (abgerundet auf Tagesgebühr)';

    $scope.resolution = ['minutes', 'minutesStanding', 'airport'];
    $scope.resolutionTime = ['minutes', 'hours', 'days'];

    $scope.getMinutes = function(minutes) {
      var duration = moment.duration(minutes, 'm');
      return duration.minutes();
    };

    $scope.getHours = function(minutes) {
      var duration = moment.duration(minutes, 'm');
      return duration.hours();
    };

    $scope.getDays = function(minutes) {
      var duration = moment.duration(minutes, 'm');
      return Math.floor(duration.asDays());
    };

    $scope.getFreeKm = function(minutes) {
      var feeMinutes = $scope.getFeeMinutes(minutes);
      var feeHours = $scope.getFeeHours(minutes);

      var freeKm = 50;

      if ($scope.getDays(minutes) > 0) {
        freeKm = $scope.getDays(minutes) * 100;
      }

      if (feeMinutes + feeHours >= $scope.feeDay) {
        if (freeKm === 50) {
          freeKm = 100;
        } else {
          freeKm += 100;
        }
      }

      return freeKm;
    };

    $scope.getAdditionalKm = function(km, minutes) {
      var AdditionalKm = 0;
      var freeKm = $scope.getFreeKm(minutes);
      if (km - freeKm > 0) {
        AdditionalKm = km - freeKm;
      }
      return AdditionalKm;
    };

    $scope.getfeeAdditionalKm = function(km, minutes) {
      return $scope.getAdditionalKm(km, minutes) * $scope.feeAdditionalKm;
    };

    $scope.getFeeMinutes = function(minutes) {
      var fee = $scope.getMinutes(minutes) * $scope.feeMinute;
      if (fee >= $scope.feeHour) {
        fee = $scope.feeHour;
      }

      return fee;
    };

    $scope.getFeeHours = function(minutes) {
      var fee = $scope.getHours(minutes) * $scope.feeHour;
      if (fee >= $scope.feeDay) {
        fee = $scope.feeDay;
      }

      return fee;
    };

    $scope.getFeeDays = function(minutes) {
      var feeMinutes = $scope.getFeeMinutes(minutes);
      var feeHours = $scope.getFeeHours(minutes);
      var feeDays = $scope.getDays(minutes) * $scope.feeDay;

      if (feeMinutes + feeHours >= $scope.feeDay) {
        feeDays += $scope.feeDay;
      }

      return feeDays;
    };

    $scope.getFeeStanding = function(minutes) {
      return minutes * 0.19;
    };

    $scope.getFeeAirport = function(airport) {
      var fee = 0;
      if (airport) {
        fee = 4.90;
      }
      return fee;
    };

    $scope.price = function(km, minutes, timeStanding, airport) {
      $scope.msgRoundDownToHours = ' (abgerundet auf Stundengebühr)';
      var feeMinutes = $scope.getFeeMinutes(minutes);
      var feeHours = $scope.getFeeHours(minutes);
      var feeDays = $scope.getFeeDays(minutes);

      if (feeMinutes >= $scope.feeHour) {
        $scope.showMsgRoundDownToHours = true;
      } else {
        $scope.showMsgRoundDownToHours = false;
      }
      if (feeHours >= $scope.feeDay) {
        $scope.showMsgRoundDownToDays = true;
      } else {
        $scope.showMsgRoundDownToDays = false;
      }

      if (feeMinutes + feeHours >= $scope.feeDay) {
        $scope.msgRoundDownToHours = $scope.msgRoundDownToDays;
        $scope.showMsgRoundDownToDays = true;
        $scope.showMsgRoundDownToHours = true;
        feeMinutes = 0;
        feeHours = 0;
      }

      return (
        $scope.getfeeAdditionalKm(km, minutes) +
        feeDays +
        feeHours +
        feeMinutes +
        $scope.getFeeStanding(timeStanding) +
        $scope.getFeeAirport(airport)
      );
    };

    var getDurationBilled = function(minutes) {
      var feeMinutes = $scope.getMinutes(minutes) * $scope.feeMinute;
      var feeHours = $scope.getHours(minutes) * $scope.feeHour;
      var feeDays = $scope.getDays(minutes) * $scope.feeDay;

      var minutesBilled = $scope.getMinutes(minutes);
      var hoursBilled = $scope.getHours(minutes);
      var daysBilled = $scope.getDays(minutes);

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

    $scope.getMinutesBilled = function(minutes) {
      return getDurationBilled(minutes).minutes();
    };

    $scope.getHoursBilled = function(minutes) {
      return getDurationBilled(minutes).hours();
    };

    $scope.getDaysBilled = function(minutes) {
      return getDurationBilled(minutes).days();
    };

  }]);
