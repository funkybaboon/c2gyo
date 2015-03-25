'use strict';

/**
 * @ngdoc service
 * @name c2gyoApp.stadtmobilrates2
 * @description
 * # stadtmobilrates2
 * Constant in the c2gyoApp.
 */
angular.module('c2gyoApp')
  .constant('stadtmobilratebasic', {
    'resolution': 'h',
    'A': {
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
        {'start': 101, 'end': 700, 'fee': 0.18},
        {'start': 701, 'end': -1, 'fee': 0.18}]
   },
    'B': {
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
        {'start': 101, 'end': 700, 'fee': 0.21},
        {'start': 701, 'end': -1, 'fee': 0.16}]
   },
    'C': {
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
        {'start': 101, 'end': 700, 'fee': 0.23},
        {'start': 701, 'end': -1, 'fee': 0.17}]
   },
    'D': {
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
        {'start': 101, 'end': 700, 'fee': 0.25},
        {'start': 701, 'end': -1, 'fee': 0.25}]
   },
    'F': {
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
        {'start': 101, 'end': 700, 'fee': 0.27},
        {'start': 701, 'end': -1, 'fee': 0.27}]
   }
 }
);
