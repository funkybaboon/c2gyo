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
      .when('/c2gdtp', {
        templateUrl: 'views/c2gdtp.html',
        controller: 'C2gdtpCtrl'
      })
      .when('/c2gbdtp', {
        templateUrl: 'views/c2gbdtp.html',
        controller: 'C2gbdtpCtrl'
      })
      .when('/smdtp', {
        templateUrl: 'views/smdtp.html',
        controller: 'SmdtpCtrl',
      }).
    otherwise({
      redirectTo: '/c2g'
    });
  });