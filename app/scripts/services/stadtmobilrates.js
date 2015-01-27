'use strict';

/**
 * @ngdoc service
 * @name c2gyoApp.stadtMobilRates
 * @description
 * # stadtMobilRates
 * Factory in the c2gyoApp.
 */
angular.module('c2gyoApp')
  .factory('stadtMobilRates', function($http) {
    var promise = null;

    return function() {
      if (promise) {
        // If we've already asked for this data once,
        // return the promise that already exists.
        return promise;
      } else {
        promise = $http.get('stadtmobilRates.json');
        return promise;
      }
    };
  });