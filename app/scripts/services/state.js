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
      tab: 'tabSimple',
      startDate: now.clone().add(1, 'h'),
      endDate: now.clone().add(11, 'h'),
      distance: 10,
      timeMinutes: 0,
      timeHours: 10,
      timeDays: 0,
      timeWeeks: 0,
      timeStanding: 0,
      car2go: {
        carclass: 'smart',
        airport: {
          berlin: false,
          hamburg: false,
          cologne: false,
          duesseldorf: false,
          frankfurt: false,
          stuttgart: false,
          munich: false
        }
      },
      flinkster: {
        tariff: 'bundesweit',
        carclass: 'sonder',
        airport: false
      },
      stadtmobil: {
        tariff: 'classic',
        carclass: 'a'
      },
      greenwheels: {
        tariff: 'standard',
        carclass: 'compact'
      },
      drivenow: {
        carclass: 'mini',
        airport: {
          berlintegel: false,
          berlinschoenefeld: false,
          hamburg: false,
          munich: false,
          cologne: false,
          duesseldorf: false,
          wien: false,
        },
        drivecitytocity: {
          duesseldorfcologne: false,
          cologneduesseldorf: false,
          hildengerresheim: false,
          neubibergbavariafilmstadt: false
        }
      },
      bookndrive: {
        tariff: 'basic',
        carclass: 'xs'
      }
    };

    return {
      rental: rental
    };
  });
