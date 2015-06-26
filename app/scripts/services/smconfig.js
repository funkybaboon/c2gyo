'use strict';

/**
 * @ngdoc service
 * @name c2gyoApp.smConfig
 * @description
 * # smConfig
 * Constant in the c2gyoApp.
 */
angular.module('c2gyoApp')
  .constant('smConfig', {
    tariff: 'classic',
    carClass: 'A',
    info: {
      carClass: {
        rateA: 'Toyota Aygo',
        rateB: 'Opel Agila, Opel Corsa, Renault Zoe, Toyota Yaris Hybrid, ' +
        'Fiat 500 Cabrio, Opel Adam, Renault Wind, Opel Combo Kastenwagen, ' +
        'Renault Kangoo Kastenwagen',
        rateC: 'Opel Astra Kombi, Ford Tourneo Hochdachkombi, Mini One',
        rateD: 'BMW 116d, Mazda MX5 Cabrio, Ford Custom Kleinbus, ' +
        'Opel Vivaro Kleinbus',
        rateF: 'Ford Transit Transporter'
      },
      tariff: {
        tariffbasic: '4€ pro Person, 4€ pro weiterer Person, ohne Kaution',
        tariffclassic: '11€ pro Person, 15€ pro Haushalt, ohne Kaution. ' +
        '7,50€ pro Person, 11€ pro Haushalt, 550€ Kaution.',
        tariffstudi: '5€ pro Person, 200€ Kaution. Tarif entspricht Classic ' +
        'Tarif',
        tariffbusiness: '29€ pro Haushalt, 550€ Kaution'
      }
    }
  });
