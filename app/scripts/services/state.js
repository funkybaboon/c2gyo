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

    var now = new moment();

    return {
      rental: {
        tab: 'simple',
        startDate: now.clone().startOf('hour').add(1, 'h'),
        endDate: now.clone().startOf('hour').add(10, 'h'),
        distance: 10,
        timeMinutes: 0,
        timeHours: 10,
        timeDays: 0,
        timeWeeks: 0,
        timeStanding: 0,
        airport: false
      }
    };
  });
