'use strict';

/**
 * @ngdoc service
 * @name c2gyoApp.stadtmobilRates
 * @description
 * # stadtmobilRates
 * Constant in the c2gyoApp.
 */
angular.module('c2gyoApp')
  .constant('stadtmobilRates', {
    'classic': {
      'A': {
        'night': 0,
        'hour': 1.4,
        'day': 21,
        'week': 125,
        'km000': 0.2,
        'km101': 0.18,
        'km701': 0.18
      },
      'B': {
        'night': 0,
        'hour': 2.2,
        'day': 25,
        'week': 140,
        'km000': 0.22,
        'km101': 0.19,
        'km701': 0.16
      },
      'C': {
        'night': 0,
        'hour': 2.8,
        'day': 32,
        'week': 160,
        'km000': 0.26,
        'km101': 0.21,
        'km701': 0.17
      },
      'D': {
        'night': 1,
        'hour': 3.2,
        'day': 35,
        'week': 190,
        'km000': 0.29,
        'km101': 0.25,
        'km701': 0.25
      },
      'F': {
        'night': 2,
        'hour': 4.2,
        'day': 44,
        'week': 245,
        'km000': 0.33,
        'km101': 0.27,
        'km701': 0.27
      }
    },
    'basic': {
      'A': {
        'night': 0,
        'hour': 1.6,
        'day': 26,
        'week': 140,
        'km000': 0.22,
        'km101': 0.18,
        'km701': 0.18
      },
      'B': {
        'night': 0,
        'hour': 2.7,
        'day': 30,
        'week': 155,
        'km000': 0.27,
        'km101': 0.21,
        'km701': 0.16
      },
      'C': {
        'night': 0,
        'hour': 3.3,
        'day': 37,
        'week': 175,
        'km000': 0.31,
        'km101': 0.23,
        'km701': 0.17
      },
      'D': {
        'night': 1,
        'hour': 3.7,
        'day': 40,
        'week': 210,
        'km000': 0.34,
        'km101': 0.25,
        'km701': 0.25
      },
      'F': {
        'night': 2,
        'hour': 4.7,
        'day': 49,
        'week': 260,
        'km000': 0.38,
        'km101': 0.27,
        'km701': 0.27
      }
    },
    'business': {
      'A': {},
      'B': {},
      'C': {},
      'D': {},
      'F': {}
    }
});
