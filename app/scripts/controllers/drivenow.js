'use strict';

/**
 * @ngdoc function
 * @name c2gyoApp.controller:SmCtrl
 * @description
 * # SmCtrl
 * Controller of the c2gyoApp
 */
angular.module('c2gyoApp')
  .controller('DriveNowCtrl', [
    '$scope',
    'drivenowtariff',
    'duration',
    'state',
    function(
      $scope,
      drivenowtariff,
      duration,
      state) {

      var vendor = 'drivenow';
      $scope.vendor = vendor;
      var createForm = function(tariffs, type) {
        for (var key in tariffs) {
          if (tariffs.hasOwnProperty(key)) {
            var tariff = tariffs[key];
            tariff.model = 'rental.' + vendor + '.' + type;
            tariff.value = tariff.technicalName;
            tariff.id = type + '.' + tariff.technicalName;
            tariff.popover = 'popover.' + vendor + '.' + type + '.' +
              tariff.technicalName  ;
          }
        }
        return tariffs;
      };

      var carclasses = [
        {
          'technicalName': 'mini',
          'name': 'Mini'
        },
        {
          'technicalName': 'bmw',
          'name': 'BMW'
        },
        {
          'technicalName': 'minicabriosummer',
          'name': 'Mini Cabrio Sommer'
        },
        {
          'technicalName': 'minicabriowinter',
          'name': 'Mini Cabrio Winter'
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
        return durationAll().minutes();
      };

      $scope.getHoursBilled = function() {
        return durationAll().hours();
      };

      $scope.getDaysBilled = function() {
        return Math.floor(durationAll().asDays());
      };

      //-----------------------------------------------------------------------
      // get current rate
      //-----------------------------------------------------------------------
      var getCurrentRate = function() {
        var carclass = $scope.rental.drivenow.carclass;
        return drivenowtariff[carclass];
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
        var feeHours = $scope.getHoursBilled() * rate.minute * 60;
        var feeDays = $scope.getDaysBilled() * rate.minute * 60 * 24;

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
        return {
          duration: durationAll(),
          fee: getFeeTimeSimple()
        };
      };

      //-----------------------------------------------------------------------
      // get price for distance
      //-----------------------------------------------------------------------
      $scope.getFeeDistance = function() {
        return 0;
      };

      //-----------------------------------------------------------------------
      // get other fees
      //-----------------------------------------------------------------------
      $scope.getFeeStanding = function() {
        return $scope.rental.timeStanding * drivenowtariff.parking;
      };

      $scope.getFeeAirport = function() {
        var fee = 0;
        for (var i in $scope.rental.drivenow.airport) {
          if ($scope.rental.drivenow.airport[i]) {
            fee += drivenowtariff.airport[i];
          }
        }
        return fee;
      };

      $scope.getFeeCitytoCity = function() {
        var fee = 0;
        for (var i in $scope.rental.drivenow.drivecitytocity) {
          if ($scope.rental.drivenow.drivecitytocity[i]) {
            fee += drivenowtariff.drivecitytocity[i];
          }
        }
        return fee;
      };

      //-----------------------------------------------------------------------
      // calculate final prices
      //-----------------------------------------------------------------------
      $scope.price = function() {
        return (
          $scope.getFeeStanding() +
          $scope.getFeeAirport() +
          $scope.getFeeCitytoCity() +
          $scope.getFeeTime() +
          $scope.getFeeDistance()
        );
      };
    }
  ]);
