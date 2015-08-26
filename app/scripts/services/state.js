'use strict';

/**
 * @ngdoc service
 * @name c2gyoApp.state
 * @description
 * # state
 * Factory in the c2gyoApp.
 */
angular.module('c2gyoApp')
  .factory('state', function() {

    var now = new moment().startOf('hour');

    var rental = {
      tab: 'simple',
      startDate: now.clone().add(1, 'h'),
      endDate: now.clone().add(11, 'h'),
      distance: 10,
      timeMinutes: 0,
      timeHours: 10,
      timeDays: 0,
      timeWeeks: 0,
      timeStanding: 0,
      airport: {
        c2g: false,
        c2gb: false,
        flinkster: false
      },
      tariff: {
        flinkster: 'bundesweit',
        greenwheels: 'standard',
        sm: 'classic'
      },
      carClass: {
        flinkster: 'sonder',
        greenwheels: 'compact',
        sm: 'A'
      }
    };

    return {
      rental: rental
    };
  });
