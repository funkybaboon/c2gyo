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
      //timeinputform.html
      simple_: 'Einfach',
      exact_: 'Exakt',
      time: 'Zeit',
      minute: 'Minuten',
      hour: 'Stunden',
      day: 'Tage',
      startdate: 'Startdatum',
      enddate: 'Enddatum',
      timeStanding: 'Zeit stehend',
      minuteStanding: 'Minuten (stehend)',
      distance: 'Strecke',

      //billedBox.html
      billedTime: 'Abgerechnete Zeit',
      trueTime: 'Wahre Zeit',

      //priceBox.html
      kmPrice: 'Preis',
      timePrice: 'Zeit Preis',
      byKm: 'pro Km',

      airportFee: 'Flughafenpauschale',
      rental: {
        }
      }
    });

    $translateProvider.translations('en_US', {
      //timeinputform.html
      simple_: 'Simple',
      exact_: 'Exact',
      time: 'Time',
      minute: 'Minutes',
      hour: 'Hours',
      day: 'Days',
      startDate: 'Start date',
      endDate: 'End date',
      timeStanding: 'Time standing',
      minuteStanding: 'Minutes (standing)',
      distance: 'Distance',

      //billedBox.html
      billedTime: 'Billed time',
      trueTime: 'True time',

      //priceBox.html
      kmPrice: 'Price',
      timePrice: 'Time price',
      byKm: 'for each Km',

      airportFee: 'Airport Fee',
      rental: {
        }
      }
    });

    $translateProvider.preferredLanguage('de_DE');
  });
