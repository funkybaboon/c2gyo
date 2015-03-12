'use strict';

/**
 * @ngdoc service
 * @name c2gyoApp.duration
 * @description
 * # duration
 * Service in the c2gyoApp.
 */
angular.module('c2gyoApp')
  .service('duration', function() {

    this.getDurationSimple = function(rental) {
      var durationMinutes = moment.duration(rental.timeMinutes, 'm');
      var durationHours = moment.duration(rental.timeHours, 'h');
      var durationDays = moment.duration(rental.timeDays, 'd');

      var durationAll = durationMinutes.add(durationHours).add(durationDays);
      return durationAll;
    };

    this.getDurationExact = function(rental) {
      return moment.duration(rental.endDate - rental.startDate);
    };

    this.getDurationAll = function(rental) {
      var duration;
      if (rental.tab === 'simple') {
        duration = this.getDurationSimple(rental);
      } else {
        duration = this.getDurationExact(rental);
      }
      return duration;
    };

  });
