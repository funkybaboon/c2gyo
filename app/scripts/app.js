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
    'ui.bootstrap.datetimepicker'
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/c2g', {
        templateUrl: 'views/c2g.html',
        controller: 'C2gCtrl'
      })
      .when('/c2gb', {
        templateUrl: 'views/c2gb.html',
        controller: 'C2gbCtrl'
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
      .otherwise({
        redirectTo: '/c2g'
      });
  });
