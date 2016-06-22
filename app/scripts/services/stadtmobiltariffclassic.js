'use strict';

/**
 * @ngdoc service
 * @name c2gyoApp.stadtmobiltariffclassic
 * @description
 * # stadtmobiltariffclassic
 * Constant in the c2gyoApp.
 */
angular.module('c2gyoApp')
  .constant('stadtmobiltariffclassic', {
    'resolution': 'h',
    'a': {
      'time': {
        '1': [
          {'start': 0, 'end': 6, 'fee': 0},
          {'start': 7, 'end': 23, 'fee': 1.4}],
        '2': [
          {'start': 0, 'end': 6, 'fee': 0},
          {'start': 7, 'end': 23, 'fee': 1.4}],
        '3': [
          {'start': 0, 'end': 6, 'fee': 0},
          {'start': 7, 'end': 23, 'fee': 1.4}],
        '4':  [
          {'start': 0, 'end': 6, 'fee': 0},
          {'start': 7, 'end': 23, 'fee': 1.4}],
        '5':  [
          {'start': 0, 'end': 6, 'fee': 0},
          {'start': 7, 'end': 23, 'fee': 1.4}],
        '6':  [
          {'start': 0, 'end': 6, 'fee': 0},
          {'start': 7, 'end': 23, 'fee': 1.4}],
        '7': [
          {'start': 0, 'end': 6, 'fee': 0},
          {'start': 7, 'end': 23, 'fee': 1.4}],
        'hour': 1.4,
        'day': 21,
        'week': 125
     },
      'km': [
        {'start': 0, 'end': 100, 'fee': 0.2},
        {'start': 100, 'end': 700, 'fee': 0.18},
        {'start': 700, 'end': -1, 'fee': 0.18}]
   },
    'b': {
      'time': {
        '1': [
          {'start': 0, 'end': 6, 'fee': 0},
          {'start': 7, 'end': 23, 'fee': 2.2}],
        '2': [
          {'start': 0, 'end': 6, 'fee': 0},
          {'start': 7, 'end': 23, 'fee': 2.2}],
        '3': [
          {'start': 0, 'end': 6, 'fee': 0},
          {'start': 7, 'end': 23, 'fee': 2.2}],
        '4':  [
          {'start': 0, 'end': 6, 'fee': 0},
          {'start': 7, 'end': 23, 'fee': 2.2}],
        '5':  [
          {'start': 0, 'end': 6, 'fee': 0},
          {'start': 7, 'end': 23, 'fee': 2.2}],
        '6':  [
          {'start': 0, 'end': 6, 'fee': 0},
          {'start': 7, 'end': 23, 'fee': 2.2}],
        '7': [
          {'start': 0, 'end': 6, 'fee': 0},
          {'start': 7, 'end': 23, 'fee': 2.2}],
        'hour': 2.2,
        'day': 25,
        'week': 140
     },
      'km': [
        {'start': 0, 'end': 100, 'fee': 0.22},
        {'start': 100, 'end': 700, 'fee': 0.19},
        {'start': 700, 'end': -1, 'fee': 0.16}]
   },
    'c': {
      'time': {
        '1': [
          {'start': 0, 'end': 6, 'fee': 0},
          {'start': 7, 'end': 23, 'fee': 2.8}],
        '2': [
          {'start': 0, 'end': 6, 'fee': 0},
          {'start': 7, 'end': 23, 'fee': 2.8}],
        '3': [
          {'start': 0, 'end': 6, 'fee': 0},
          {'start': 7, 'end': 23, 'fee': 2.8}],
        '4':  [
          {'start': 0, 'end': 6, 'fee': 0},
          {'start': 7, 'end': 23, 'fee': 2.8}],
        '5':  [
          {'start': 0, 'end': 6, 'fee': 0},
          {'start': 7, 'end': 23, 'fee': 2.8}],
        '6':  [
          {'start': 0, 'end': 6, 'fee': 0},
          {'start': 7, 'end': 23, 'fee': 2.8}],
        '7': [
          {'start': 0, 'end': 6, 'fee': 0},
          {'start': 7, 'end': 23, 'fee': 2.8}],
        'hour': 2.8,
        'day': 32,
        'week': 160
     },
      'km': [
        {'start': 0, 'end': 100, 'fee': 0.26},
        {'start': 100, 'end': 700, 'fee': 0.21},
        {'start': 700, 'end': -1, 'fee': 0.17}]
   },
    'd': {
      'time': {
        '1': [
          {'start': 0, 'end': 6, 'fee': 1},
          {'start': 7, 'end': 23, 'fee': 3.2}],
        '2': [
          {'start': 0, 'end': 6, 'fee': 1},
          {'start': 7, 'end': 23, 'fee': 3.2}],
        '3': [
          {'start': 0, 'end': 6, 'fee': 1},
          {'start': 7, 'end': 23, 'fee': 3.2}],
        '4':  [
          {'start': 0, 'end': 6, 'fee': 1},
          {'start': 7, 'end': 23, 'fee': 3.2}],
        '5':  [
          {'start': 0, 'end': 6, 'fee': 1},
          {'start': 7, 'end': 23, 'fee': 3.2}],
        '6':  [
          {'start': 0, 'end': 6, 'fee': 1},
          {'start': 7, 'end': 23, 'fee': 3.2}],
        '7': [
          {'start': 0, 'end': 6, 'fee': 1},
          {'start': 7, 'end': 23, 'fee': 3.2}],
        'hour': 3.2,
        'day': 35,
        'week': 190
     },
      'km': [
        {'start': 0, 'end': 100, 'fee': 0.29},
        {'start': 100, 'end': 700, 'fee': 0.25},
        {'start': 700, 'end': -1, 'fee': 0.25}]
   },
    'f': {
      'time': {
        '1': [
          {'start': 0, 'end': 6, 'fee': 2},
          {'start': 7, 'end': 23, 'fee': 4.2}],
        '2': [
          {'start': 0, 'end': 6, 'fee': 2},
          {'start': 7, 'end': 23, 'fee': 4.2}],
        '3': [
          {'start': 0, 'end': 6, 'fee': 2},
          {'start': 7, 'end': 23, 'fee': 4.2}],
        '4':  [
          {'start': 0, 'end': 6, 'fee': 2},
          {'start': 7, 'end': 23, 'fee': 4.2}],
        '5':  [
          {'start': 0, 'end': 6, 'fee': 2},
          {'start': 7, 'end': 23, 'fee': 4.2}],
        '6':  [
          {'start': 0, 'end': 6, 'fee': 2},
          {'start': 7, 'end': 23, 'fee': 4.2}],
        '7': [
          {'start': 0, 'end': 6, 'fee': 2},
          {'start': 7, 'end': 23, 'fee': 4.2}],
        'hour': 4.2,
        'day': 44,
        'week': 245
     },
      'km': [
        {'start': 0, 'end': 100, 'fee': 0.33},
        {'start': 100, 'end': 700, 'fee': 0.27},
        {'start': 700, 'end': -1, 'fee': 0.27}]
   }
 }
);
