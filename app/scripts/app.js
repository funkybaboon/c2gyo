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
      redirectTo: '/c2gdtp'
    });
  });
