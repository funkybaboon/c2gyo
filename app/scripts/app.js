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
      .when('/sm', {
        templateUrl: 'views/sm.html',
        controller: 'SmCtrl',
        resolve: {
          stadtmobilRates: ['stadtMobilRates', function(stadtMobilRates) {
            return stadtMobilRates().then(function(resp) {
              return resp.data;
            });
          }]
        }
      })
      .when('/dtp', {
        templateUrl: 'views/dtp.html',
        controller: 'DatetimepickerCtrl',
        resolve: {
          stadtmobilRates: ['stadtMobilRates', function(stadtMobilRates) {
            return stadtMobilRates().then(function(resp) {
              return resp.data;
            });
          }]
        }
      }).
    otherwise({
      redirectTo: '/c2g'
    });
  });