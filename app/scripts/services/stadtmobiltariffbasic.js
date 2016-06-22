'use strict';

/**
 * @ngdoc service
 * @name c2gyoApp.stadtmobiltariffbasic
 * @description
 * # stadtmobiltariffbasic
 * Constant in the c2gyoApp.
 */
angular.module('c2gyoApp')
  .constant('stadtmobiltariffbasic', {
    'resolution': 'h',
    'a': {
      'time': {
        '1': [
          {'start': 0, 'end': 6, 'fee': 0},
          {'start': 7, 'end': 23, 'fee': 1.6}],
        '2': [
          {'start': 0, 'end': 6, 'fee': 0},
          {'start': 7, 'end': 23, 'fee': 1.6}],
        '3': [
          {'start': 0, 'end': 6, 'fee': 0},
          {'start': 7, 'end': 23, 'fee': 1.6}],
        '4':  [
          {'start': 0, 'end': 6, 'fee': 0},
          {'start': 7, 'end': 23, 'fee': 1.6}],
        '5':  [
          {'start': 0, 'end': 6, 'fee': 0},
          {'start': 7, 'end': 23, 'fee': 1.6}],
        '6':  [
          {'start': 0, 'end': 6, 'fee': 0},
          {'start': 7, 'end': 23, 'fee': 1.6}],
        '7': [
          {'start': 0, 'end': 6, 'fee': 0},
          {'start': 7, 'end': 23, 'fee': 1.6}],
        'hour': 1.6,
        'day': 26,
        'week': 140
      },
      'km': [
        {'start': 0, 'end': 100, 'fee': 0.22},
        {'start': 100, 'end': 700, 'fee': 0.18},
        {'start': 700, 'end': -1, 'fee': 0.18}]
    },
    'b': {
      'time': {
        '1': [
          {'start': 0, 'end': 6, 'fee': 0},
          {'start': 7, 'end': 23, 'fee': 2.7}],
        '2': [
          {'start': 0, 'end': 6, 'fee': 0},
          {'start': 7, 'end': 23, 'fee': 2.7}],
        '3': [
          {'start': 0, 'end': 6, 'fee': 0},
          {'start': 7, 'end': 23, 'fee': 2.7}],
        '4':  [
          {'start': 0, 'end': 6, 'fee': 0},
          {'start': 7, 'end': 23, 'fee': 2.7}],
        '5':  [
          {'start': 0, 'end': 6, 'fee': 0},
          {'start': 7, 'end': 23, 'fee': 2.7}],
        '6':  [
          {'start': 0, 'end': 6, 'fee': 0},
          {'start': 7, 'end': 23, 'fee': 2.7}],
        '7': [
          {'start': 0, 'end': 6, 'fee': 0},
          {'start': 7, 'end': 23, 'fee': 2.7}],
        'hour': 2.7,
        'day': 30,
        'week': 155
      },
      'km': [
        {'start': 0, 'end': 100, 'fee': 0.27},
        {'start': 100, 'end': 700, 'fee': 0.21},
        {'start': 700, 'end': -1, 'fee': 0.16}]
    },
    'c': {
      'time': {
        '1': [
          {'start': 0, 'end': 6, 'fee': 0},
          {'start': 7, 'end': 23, 'fee': 3.3}],
        '2': [
          {'start': 0, 'end': 6, 'fee': 0},
          {'start': 7, 'end': 23, 'fee': 3.3}],
        '3': [
          {'start': 0, 'end': 6, 'fee': 0},
          {'start': 7, 'end': 23, 'fee': 3.3}],
        '4':  [
          {'start': 0, 'end': 6, 'fee': 0},
          {'start': 7, 'end': 23, 'fee': 3.3}],
        '5':  [
          {'start': 0, 'end': 6, 'fee': 0},
          {'start': 7, 'end': 23, 'fee': 3.3}],
        '6':  [
          {'start': 0, 'end': 6, 'fee': 0},
          {'start': 7, 'end': 23, 'fee': 3.3}],
        '7': [
          {'start': 0, 'end': 6, 'fee': 0},
          {'start': 7, 'end': 23, 'fee': 3.3}],
        'hour': 3.3,
        'day': 37,
        'week': 175
      },
      'km': [
        {'start': 0, 'end': 100, 'fee': 0.31},
        {'start': 100, 'end': 700, 'fee': 0.23},
        {'start': 700, 'end': -1, 'fee': 0.17}]
    },
    'd': {
      'time': {
        '1': [
          {'start': 0, 'end': 6, 'fee': 1},
          {'start': 7, 'end': 23, 'fee': 3.7}],
        '2': [
          {'start': 0, 'end': 6, 'fee': 1},
          {'start': 7, 'end': 23, 'fee': 3.7}],
        '3': [
          {'start': 0, 'end': 6, 'fee': 1},
          {'start': 7, 'end': 23, 'fee': 3.7}],
        '4':  [
          {'start': 0, 'end': 6, 'fee': 1},
          {'start': 7, 'end': 23, 'fee': 3.7}],
        '5':  [
          {'start': 0, 'end': 6, 'fee': 1},
          {'start': 7, 'end': 23, 'fee': 3.7}],
        '6':  [
          {'start': 0, 'end': 6, 'fee': 1},
          {'start': 7, 'end': 23, 'fee': 3.7}],
        '7': [
          {'start': 0, 'end': 6, 'fee': 1},
          {'start': 7, 'end': 23, 'fee': 3.7}],
        'hour': 3.7,
        'day': 40,
        'week': 210
      },
      'km': [
        {'start': 0, 'end': 100, 'fee': 0.34},
        {'start': 100, 'end': 700, 'fee': 0.25},
        {'start': 700, 'end': -1, 'fee': 0.25}]
    },
    'f': {
      'time': {
        '1': [
          {'start': 0, 'end': 6, 'fee': 2},
          {'start': 7, 'end': 23, 'fee': 4.7}],
        '2': [
          {'start': 0, 'end': 6, 'fee': 2},
          {'start': 7, 'end': 23, 'fee': 4.7}],
        '3': [
          {'start': 0, 'end': 6, 'fee': 2},
          {'start': 7, 'end': 23, 'fee': 4.7}],
        '4':  [
          {'start': 0, 'end': 6, 'fee': 2},
          {'start': 7, 'end': 23, 'fee': 4.7}],
        '5':  [
          {'start': 0, 'end': 6, 'fee': 2},
          {'start': 7, 'end': 23, 'fee': 4.7}],
        '6':  [
          {'start': 0, 'end': 6, 'fee': 2},
          {'start': 7, 'end': 23, 'fee': 4.7}],
        '7': [
          {'start': 0, 'end': 6, 'fee': 2},
          {'start': 7, 'end': 23, 'fee': 4.7}],
        'hour': 4.7,
        'day': 49,
        'week': 260
      },
      'km': [
        {'start': 0, 'end': 100, 'fee': 0.38},
        {'start': 100, 'end': 700, 'fee': 0.27},
        {'start': 700, 'end': -1, 'fee': 0.27}]
    }
  }
);
