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
      tariff: {
        flinkster: 'bundesweit',
        greenwheels: 'standard',
        stadtmobil: 'classic'
      },
      carClass: {
        flinkster: 'sonder',
        greenwheels: 'compact',
        stadtmobil: 'A'
      },
      car2go: {
        airport: false,
      },
      car2goblack: {
        airport: false,
      },
      flinkster: {
        airport: false,
      },
      drivenow: {
        carClass: 'mini',
        'airport': {
          'berlintegel': false,
          'berlinschoenefeld': false,
          'hamburg': false,
          'muenchen': false,
          'cologne': false,
          'duesseldorf': false,
          'wien': false,
        },
        'drivecitytocity': {
          'duesseldorfcologne': false,
          'cologneduesseldorf': false,
          'hildengerresheim': false,
          'neubibergbavariafilmstadt': false,
        }
      }
    };

    return {
      rental: rental
    };
  });
