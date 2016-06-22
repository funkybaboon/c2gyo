'use strict';

/**
 * @ngdoc service
 * @name c2gyoApp.greenwheelstariff
 * @description
 * # greenwheelstariff
 * Constant in the c2gyoApp.
 */
angular.module('c2gyoApp')
  .constant('greenwheelstariffstandard', {
    'resolution': 'h',
    'compact': {
      'time': {
        '1': [
          {'start': 0, 'end': 7, 'fee': 0.99},
          {'start': 8, 'end': 23, 'fee': 1.99}],
        '2': [
          {'start': 0, 'end': 7, 'fee': 0.99},
          {'start': 8, 'end': 23, 'fee': 1.99}],
        '3': [
          {'start': 0, 'end': 7, 'fee': 0.99},
          {'start': 8, 'end': 23, 'fee': 1.99}],
        '4':  [
          {'start': 0, 'end': 7, 'fee': 0.99},
          {'start': 8, 'end': 23, 'fee': 1.99}],
        '5':  [
          {'start': 0, 'end': 7, 'fee': 0.99},
          {'start': 8, 'end': 23, 'fee': 1.99}],
        '6':  [
          {'start': 0, 'end': 7, 'fee': 0.99},
          {'start': 8, 'end': 23, 'fee': 1.99}],
        '7': [
          {'start': 0, 'end': 7, 'fee': 0.99},
          {'start': 8, 'end': 23, 'fee': 1.99}],
        'hour': 1.99,
        'day': 39.76,
        'week': 278.32
      },
      'km': [
        {'start': 0, 'end': -1, 'fee': 0.24}]
    },
    'van': {
      'time': {
        '1': [
          {'start': 0, 'end': 7, 'fee': 0.99},
          {'start': 8, 'end': 23, 'fee': 3.99}],
        '2': [
          {'start': 0, 'end': 7, 'fee': 0.99},
          {'start': 8, 'end': 23, 'fee': 3.99}],
        '3': [
          {'start': 0, 'end': 7, 'fee': 0.99},
          {'start': 8, 'end': 23, 'fee': 3.99}],
        '4':  [
          {'start': 0, 'end': 7, 'fee': 0.99},
          {'start': 8, 'end': 23, 'fee': 3.99}],
        '5':  [
          {'start': 0, 'end': 7, 'fee': 0.99},
          {'start': 8, 'end': 23, 'fee': 3.99}],
        '6':  [
          {'start': 0, 'end': 7, 'fee': 0.99},
          {'start': 8, 'end': 23, 'fee': 3.99}],
        '7': [
          {'start': 0, 'end': 7, 'fee': 0.99},
          {'start': 8, 'end': 23, 'fee': 3.99}],
        'hour': 3.99,
        'day': 71.76,
        'week': 502.32
      },
      'km': [
        {'start': 0, 'end': -1, 'fee': 0.34}]
    }
  }
);
