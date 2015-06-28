'use strict';

/**
 * @ngdoc service
 * @name c2gyoApp.smConfig
 * @description
 * # smConfig
 * Constant in the c2gyoApp.
 */
angular.module('c2gyoApp')
  .constant('flinksterConfig', {
    tariff: 'bundesweit',
    carClass: 'sonder',
    info: {
      carClass: {
        sonder: 'Fahrzeuge mit Vollbranding: Citroen DS3, Fiat 500, Mercedes ' +
        'C-Klasse',
        mini: 'Smart, Fiat Panda, e-Smart, Citroen C1',
        klein: 'VW Polo, Citroen DS3, Opel Corsa, Ford Fiesta, MINI E, Peugeot ' +
        'iOn',
        kompakt: 'Opel Astra, VW Golf, Seat Leon, VW Caddy',
        mittel: 'Ford Mondeo, VW Passat,  C-Klasse, Toyota Prius Plug-In PHV, ' +
        'Opel Ampera',
        transporter: 'Ford Transit, MB Sprinter, Opel Movano, VW T5'
      },
      tariff: {
        tariffbundesweit: 'Keine Monatliche Grundgebühr',
        tarifflokal: '10€ Monatliche Grundgebühr'
      },
      airport: 'Anmietungen an Flughäfen +25% auf den Zeitpreis sind nur zum ' +
      'Tagespreis der bundesweiten Flinkster Preisliste möglich. Der ' +
      'Lokaltarif findet keine Anwendung. Die Betankung erfolgt auf eigene ' +
      'Rechnung ohne Verbrauchspauschale.'
    }

  });
