'use strict';

/**
 * @ngdoc overview
 * @name c2gyoApp
 * @description
 * # c2gyoApp
 *
 * Main module of the application.
 */
angular
  .module('c2gyoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angularMoment',
    'ui.bootstrap',
    'ui.bootstrap.datetimepicker',
    'pascalprecht.translate'
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/car2go', {
        templateUrl: 'views/car2go.html',
        controller: 'Car2goCtrl'
      })
      .when('/car2goblack', {
        templateUrl: 'views/car2goblack.html',
        controller: 'Car2goblackCtrl'
      })
      .when('/stadtmobil', {
        templateUrl: 'views/stadtmobil.html',
        controller: 'StadtmobilCtrl',
      })
      .when('/flinkster', {
        templateUrl: 'views/flinkster.html',
        controller: 'FlinksterCtrl'
      })
      .when('/greenwheels', {
        templateUrl: 'views/greenwheels.html',
        controller: 'GreenwheelsCtrl'
      })
      .when('/drivenow', {
        templateUrl: 'views/drivenow.html',
        controller: 'DriveNowCtrl'
      })
      .otherwise({
        redirectTo: '/car2go'
      });
  })
  .config(function ($translateProvider) {
    $translateProvider.translations('de_DE', {
      //navbar.html
      languageButton: 'Deutsch',

      //timeinputform.html
      simple: 'Einfach',
      exact: 'Exakt',
      time: 'Zeit',
      minute: 'Minuten',
      hour: 'Stunden',
      day: 'Tage',
      week: 'Wochen',
      startDate: 'Startdatum',
      endDate: 'Enddatum',
      timeStanding: 'Zeit stehend',
      minuteStanding: 'Minuten (stehend)',
      distance: 'Strecke',

      //billedBox.html
      billedTime: 'Abgerechnete Zeit',
      trueTime: 'Wahre Zeit',

      //priceBox.html
      kmPrice: 'Km Preis',
      timePrice: 'Zeit Preis',
      byKm: 'pro Km',

      //general carsharing sites
      airportFee: 'Flughafenpauschale',
      carClass: 'Fahrzeugklasse',
      airport: 'Flughafen',
      airports: 'Flughäfen',
      specialDestinations: 'Sonderziele',
      tariff: 'Tarif',

      //custom carsharing sites
      rental: {
        drivenow: {
          airport: {
            berlintegel: 'Flughafen Berlin-Tegel',
            berlinschoenefeld: 'Flughafen Berlin-Schönefeld',
            hamburg: 'Flughafen Hamburg',
            munich: 'Flughafen München',
            cologne: 'Flughafen Köln',
            duesseldorf: 'Flughafen Düsseldorf',
            wien: 'Flughafen Wien'
          },
          drivecitytocity: {
            duesseldorfcologne: 'Fahrt von Düsseldorf nach Köln',
            cologneduesseldorf: 'Fahrt von Köln nach Düsseldorf',
            hildengerresheim: 'Fahrt von Hilden / Gerresheim',
            neubibergbavariafilmstadt: 'Fahrt von Neubiberg / Bavaria Filmstadt'
          }
        }
      },

      //popovers
      popover: {
        car2go: {
          airport: '4,90€ für alle Fahrten von und zum Flughafen'
        },
        car2goblack: {
          airport: '4,90€ für alle Fahrten von und zum Flughafen'
        },
        greenwheels: {
          tariffstandard: 'Keine Monatliche Grundgebühr',
          tariffjoker:
          '<ul>' +
            '<li>10€ Grundgebühr pro Monat</li>' +
            '<li>60 gratis Kilometer</li>' +
            '<li>' +
              '30 € für 24 Stunden Buchungen in der Fahrzeugklasse Compact' +
            ' (anstatt 39.76€)' +
            '</li>' +
            '<li>' +
              '40 € für 24 Stunden Buchungen in der Fahrzeugklasse Van ' +
              '(anstatt 71.76€)' +
            '</li>' +
          '</ul>',
          carClassCompact: 'VW Up',
          carClassVan:
          '<ul>' +
            '<li>VW Golf Variant</li>' +
            '<li>VW Caddy</li>' +
          '</ul>',
        },
        flinkster: {
          tariffbundesweit: 'Keine Monatliche Grundgebühr',
          tarifflokal: '10€ Monatliche Grundgebühr',
          carClassSonder:
          '<ul>' +
            '<li>Citroen DS3</li>' +
          '</ul>',
          carClassMini:
          '<ul>' +
            '<li>Smart</li>' +
            '<li>Fiat Panda</li>' +
            '<li>e-Smart</li>' +
            '<li>Citroen C1</li>' +
            '<li>Toyota Aygo</li>' +
          '</ul>',
          carClassKlein:
          '<ul>' +
            '<li>VW Polo</li>' +
            '<li>Citroen DS3</li>' +
            '<li>Opel Corsa</li>' +
            '<li>Ford Fiesta</li>' +
            '<li>MINI E</li>' +
            '<li>Peugeot iOn</li>' +
          '</ul>',
          carClassKompakt:
          '<ul>' +
            '<li>Opel Astra</li>' +
            '<li>VW Golf</li>' +
            '<li>Seat Leon</li>' +
            '<li>VW Caddy</li>' +
          '</ul>',
          carClassMittel:
          '<ul>' +
            '<li>Ford Mondeo</li>' +
            '<li>VW Passat</li>' +
            '<li>Mercedes C-Klasse</li>' +
            '<li>Toyota Prius Plug-In PHV</li>' +
            '<li>Opel Ampera</li>' +
          '</ul>',
          carClassTransporter:
          '<ul>' +
            '<li>Ford Transit</li>' +
            '<li>Mercedes Sprinter</li>' +
            '<li>Opel Movano</li>' +
            '<li>VW T5</li>' +
          '</ul>',
          airport: 'Anmietungen an Flughäfen +25% auf den Zeitpreis sind ' +
          'nur zum Tagespreis der bundesweiten Flinkster Preisliste möglich' +
          '. Der Lokaltarif findet keine Anwendung. Die Betankung erfolgt ' +
          'auf eigene Rechnung ohne Verbrauchspauschale.',
        },
        stadtmobil: {
          tariffbasic: '4€ pro Person, 4€ pro weiterer Person, ohne Kaution',
          tariffbusiness: '29€ pro Haushalt, 550€ Kaution',
          tariffclassic: '11€ pro Person, 15€ pro Haushalt, ohne Kaution. ' +
          '7,50€ pro Person, 11€ pro Haushalt, 550€ Kaution.',
          tariffstudi: '5€ pro Person, 200€ Kaution. Tarif entspricht Classic' +
          ' Tarif',
          carClassRateA:
          '<ul>' +
            '<li>Toyota Aygo</li>' +
          '</ul>',
          carClassRateB:
          '<ul>' +
            '<li>Opel Agila</li>' +
            '<li>Opel Corsa</li>' +
            '<li>Renault Zoe</li>' +
            '<li>Toyota Yaris Hybrid</li>' +
            '<li>Fiat 500 Cabrio</li>' +
            '<li>Opel Adam</li>' +
            '<li>Renault Wind</li>' +
            '<li>Opel Combo Kastenwagen</li>' +
            '<li>Renault Kangoo Kastenwagen</li>' +
          '</ul>',
          carClassRateC:
          '<ul>' +
            '<li>Opel Astra Kombi</li>' +
            '<li>Ford Tourneo Hochdachkombi</li>' +
            '<li>Mini One</li>' +
          '</ul>',
          carClassRateD:
          '<ul>' +
            '<li>BMW 116d</li>' +
            '<li>Mazda MX5 Cabrio</li>' +
            '<li>Ford Custom Kleinbus</li>' +
            '<li>Opel Vivaro Kleinbus</li>' +
          '</ul>',
          carClassRateF:
          '<ul>' +
            '<li>FFord Transit Transporter</li>' +
          '</ul>'
        },
        drivenow: {
          airport: 'for each start/end of booking',
          carClass: {
            BMW:
            '<ul>' +
              '<li>BMW i3</li>' +
              '<li>BMW X1</li>' +
              '<li>BMW 2er Active Tourer</li>' +
              '<li>BMW 2er Cabrio</li>' +
            '</ul>',
            Mini:
            '<ul>' +
              '<li>Mini</li>' +
              '<li>Mini Clubman</li>' +
              '<li>Mini Countryman</li>' +
              '<li>BMW 1er</li>' +
            '</ul>',
            MiniCabrioSummer: 'Mini Cabrio, Sommer 01.04. - 31.10.',
            MiniCabrioWinter: 'Mini Cabrio, Winter 01.11. - 31.03.'
          },
          drivecitytocity: {
            cologneduesseldorf: 'end booking in the other city',
            duesseldorfcologne: 'end booking in the other city',
            hildengerresheim: 'plus intercity fee from Cologne',
            neubibergbavariafilmstadt: 'end booking in satellite'
          }
        }
      }
    });

    $translateProvider.translations('en_US', {
      //navbar.html
      languageButton: 'English',

      //timeinputform.html
      simple: 'Simple',
      exact: 'Exact',
      time: 'Time',
      minute: 'Minutes',
      hour: 'Hours',
      day: 'Days',
      week: 'Weeks',
      startDate: 'Start date',
      endDate: 'End date',
      timeStanding: 'Time standing',
      minuteStanding: 'Minutes (standing)',
      distance: 'Distance',

      //billedBox.html
      billedTime: 'Billed time',
      trueTime: 'True time',

      //priceBox.html
      kmPrice: 'Km Price',
      timePrice: 'Time price',
      byKm: 'for each Km',

      //general carsharing sites
      airportFee: 'Airport Fee',
      carClass: 'Car class',
      airport: 'Airport',
      airports: 'Airports',
      specialDestinations: 'Special destinations',
      tariff: 'Tariff',

      //custom carsharing sites
      rental: {
        drivenow: {
          airport: {
            berlintegel: 'Berlin-Tegel Airport',
            berlinschoenefeld: 'Berlin Schönefeld Airport',
            hamburg: 'Hamburg International Airport',
            munich: 'Munich International Airport',
            cologne: 'Cologne International Airport',
            duesseldorf: 'Dusseldorf International Airport',
            wien: 'Vienna International Airport'
          },
          drivecitytocity: {
            duesseldorfcologne: 'Trip from Dusseldorf to Cologne',
            cologneduesseldorf: 'Trip from Cologne to Dusseldorf',
            hildengerresheim: 'Trip to Hilden/Gerresheim',
            neubibergbavariafilmstadt: 'Trip to Neubiberg/Bavaria Filmstadt'
          }
        }
      },

      //popovers
      popover: {
        car2go: {
          airport: '4,90€ for all rides to and from the airport'
        },
        car2goblack: {
          airport: '4,90€ for all rides to and from the airport'
        },
        greenwheels: {
          tariffstandard: 'No monthly fee',
          tariffjoker:
          '<ul>' +
            '<li>10€ monthly fee</li>' +
            '<li>60 kilometers free</li>' +
            '<li>' +
              '30 € for 24 hours bookings in car class Compact' +
              ' (instead of 39.76€)' +
            '</li>' +
            '<li>' +
              '40 € for 24 hours bookings in car class Van ' +
              '(instead of 71.76€)' +
            '</li>' +
          '</ul>',
          carClassCompact: 'VW Up',
          carClassVan:
          '<ul>' +
            '<li>VW Golf Variant</li>' +
            '<li>VW Caddy</li>' +
          '</ul>',
        },
        flinkster: {
          tariffbundesweit: 'No monthly fees',
          tarifflokal: '10€ monthly fees',
          carClassSonder:
          '<ul>' +
            '<li>Citroen DS3</li>' +
          '</ul>',
          carClassMini:
          '<ul>' +
            '<li>Smart</li>' +
            '<li>Fiat Panda</li>' +
            '<li>e-Smart</li>' +
            '<li>Citroen C1</li>' +
            '<li>Toyota Aygo</li>' +
          '</ul>',
          carClassKlein:
          '<ul>' +
            '<li>VW Polo</li>' +
            '<li>Citroen DS3</li>' +
            '<li>Opel Corsa</li>' +
            '<li>Ford Fiesta</li>' +
            '<li>MINI E</li>' +
            '<li>Peugeot iOn</li>' +
          '</ul>',
          carClassKompakt:
          '<ul>' +
            '<li>Opel Astra</li>' +
            '<li>VW Golf</li>' +
            '<li>Seat Leon</li>' +
            '<li>VW Caddy</li>' +
          '</ul>',
          carClassMittel:
          '<ul>' +
            '<li>Ford Mondeo</li>' +
            '<li>VW Passat</li>' +
            '<li>Mercedes C-Class</li>' +
            '<li>Toyota Prius Plug-In PHV</li>' +
            '<li>Opel Ampera</li>' +
          '</ul>',
          carClassTransporter:
          '<ul>' +
            '<li>Ford Transit</li>' +
            '<li>Mercedes Sprinter</li>' +
            '<li>Opel Movano</li>' +
            '<li>VW T5</li>' +
          '</ul>',
          airport: 'Rentals on Airports have a minimum duration of one day ' +
          'and are billed according to tariff \"Bundesweit\" + 25%. No ' +
          'tariff \"Lokal\" possible. Fuel completely at your own charge.'
        },
        stadtmobil: {
          tariffbasic: '4€ per person, 4€ for each additional Person, ' +
          'whithout bail',
          tariffbusiness: '29€ per household, 550€ bail',
          tariffclassic: '11€ per person, 15€ per household, without bail. ' +
          '7,50€ per person, 11€ per household, 550€ bail.',
          tariffstudi: '5€ per person, 200€ bail. Tariff is equal to tariff ' +
          'Classic',
          carClassRateA:
          '<ul>' +
            '<li>Toyota Aygo</li>' +
          '</ul>',
          carClassRateB:
          '<ul>' +
            '<li>Opel Agila</li>' +
            '<li>Opel Corsa</li>' +
            '<li>Renault Zoe</li>' +
            '<li>Toyota Yaris Hybrid</li>' +
            '<li>Fiat 500 Cabrio</li>' +
            '<li>Opel Adam</li>' +
            '<li>Renault Wind</li>' +
            '<li>Opel Combo Kastenwagen</li>' +
            '<li>Renault Kangoo Kastenwagen</li>' +
          '</ul>',
          carClassRateC:
          '<ul>' +
            '<li>Opel Astra Kombi</li>' +
            '<li>Ford Tourneo Hochdachkombi</li>' +
            '<li>Mini One</li>' +
          '</ul>',
          carClassRateD:
          '<ul>' +
            '<li>BMW 116d</li>' +
            '<li>Mazda MX5 Cabrio</li>' +
            '<li>Ford Custom Kleinbus</li>' +
            '<li>Opel Vivaro Kleinbus</li>' +
          '</ul>',
          carClassRateF:
          '<ul>' +
            '<li>Ford Transit Transporter</li>' +
          '</ul>'
        },
        drivenow: {
          airport: 'for each start/end of booking',
          carClass: {
            BMW:
            '<ul>' +
              '<li>BMW i3</li>' +
              '<li>BMW X1</li>' +
              '<li>BMW 2er Active Tourer</li>' +
              '<li>BMW 2er Cabrio</li>' +
            '</ul>',
            Mini:
            '<ul>' +
              '<li>Mini</li>' +
              '<li>Mini Clubman</li>' +
              '<li>Mini Countryman</li>' +
              '<li>BMW 1er</li>' +
            '</ul>',
            MiniCabrioSummer: 'Mini Cabrio, Sommer 01.04. - 31.10.',
            MiniCabrioWinter: 'Mini Cabrio, Winter 01.11. - 31.03.'
          },
          drivecitytocity: {
            cologneduesseldorf: 'end booking in the other city',
            duesseldorfcologne: 'end booking in the other city',
            hildengerresheim: 'plus intercity fee from Cologne',
            neubibergbavariafilmstadt: 'end booking in satellite'
          }
        }
      }
    });

    $translateProvider.preferredLanguage('de_DE');
    $translateProvider.useSanitizeValueStrategy('sanitizeParameters');

  })
;
