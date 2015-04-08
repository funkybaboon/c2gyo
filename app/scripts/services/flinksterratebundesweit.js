'use strict';

/**
 * @ngdoc service
 * @name c2gyoApp.flinksterratebundesweit
 * @description
 * # flinksterratebundesweit
 * Constant in the c2gyoApp.
 */
angular.module('c2gyoApp')
  .constant('flinksterratebundesweit', {
    'resolution': 'h',
    'mini': {
      'time': {
        '1': [
          {'start': 0, 'end': 7, 'fee': 1.5},
          {'start': 8, 'end': 21, 'fee': 2.3},
          {'start': 22, 'end': 23, 'fee': 1.5}],
        '2': [
          {'start': 0, 'end': 7, 'fee': 1.5},
          {'start': 8, 'end': 21, 'fee': 2.3},
          {'start': 22, 'end': 23, 'fee': 1.5}],
        '3': [
          {'start': 0, 'end': 7, 'fee': 1.5},
          {'start': 8, 'end': 21, 'fee': 2.3},
          {'start': 22, 'end': 23, 'fee': 1.5}],
        '4': [
          {'start': 0, 'end': 7, 'fee': 1.5},
          {'start': 8, 'end': 21, 'fee': 2.3},
          {'start': 22, 'end': 23, 'fee': 1.5}],
        '5': [
          {'start': 0, 'end': 7, 'fee': 1.5},
          {'start': 8, 'end': 21, 'fee': 2.3},
          {'start': 22, 'end': 23, 'fee': 1.5}],
        '6': [
          {'start': 0, 'end': 7, 'fee': 1.5},
          {'start': 8, 'end': 21, 'fee': 2.3},
          {'start': 22, 'end': 23, 'fee': 1.5}],
        '7': [
          {'start': 0, 'end': 7, 'fee': 1.5},
          {'start': 8, 'end': 21, 'fee': 2.3},
          {'start': 22, 'end': 23, 'fee': 1.5}],
        'hour': 2.3,
        'day1': 39,
        'day2': 29,
     },
      'km': [
        {'start': 0, 'end': -1, 'fee': 0.18}]
    },
    'klein': {
      'time': {
        '1': [
          {'start': 0, 'end': 7, 'fee': 1.5},
          {'start': 8, 'end': 21, 'fee': 5},
          {'start': 22, 'end': 23, 'fee': 1.5}],
        '2': [
          {'start': 0, 'end': 7, 'fee': 1.5},
          {'start': 8, 'end': 21, 'fee': 5},
          {'start': 22, 'end': 23, 'fee': 1.5}],
        '3': [
          {'start': 0, 'end': 7, 'fee': 1.5},
          {'start': 8, 'end': 21, 'fee': 5},
          {'start': 22, 'end': 23, 'fee': 1.5}],
        '4': [
          {'start': 0, 'end': 7, 'fee': 1.5},
          {'start': 8, 'end': 21, 'fee': 5},
          {'start': 22, 'end': 23, 'fee': 1.5}],
        '5': [
          {'start': 0, 'end': 7, 'fee': 1.5},
          {'start': 8, 'end': 21, 'fee': 5},
          {'start': 22, 'end': 23, 'fee': 1.5}],
        '6': [
          {'start': 0, 'end': 7, 'fee': 1.5},
          {'start': 8, 'end': 21, 'fee': 5},
          {'start': 22, 'end': 23, 'fee': 1.5}],
        '7': [
          {'start': 0, 'end': 7, 'fee': 1.5},
          {'start': 8, 'end': 21, 'fee': 5},
          {'start': 22, 'end': 23, 'fee': 1.5}],
        'hour': 5,
        'day1': 50,
        'day2': 29,
     },
      'km': [
        {'start': 0, 'end': -1, 'fee': 0.18}]
    },
    'kompakt': {
      'time': {
        '1': [
          {'start': 0, 'end': 7, 'fee': 1.9},
          {'start': 8, 'end': 21, 'fee': 6},
          {'start': 22, 'end': 23, 'fee': 1.9}],
        '2': [
          {'start': 0, 'end': 7, 'fee': 1.9},
          {'start': 8, 'end': 21, 'fee': 6},
          {'start': 22, 'end': 23, 'fee': 1.9}],
        '3': [
          {'start': 0, 'end': 7, 'fee': 1.9},
          {'start': 8, 'end': 21, 'fee': 6},
          {'start': 22, 'end': 23, 'fee': 1.9}],
        '4': [
          {'start': 0, 'end': 7, 'fee': 1.9},
          {'start': 8, 'end': 21, 'fee': 6},
          {'start': 22, 'end': 23, 'fee': 1.9}],
        '5': [
          {'start': 0, 'end': 7, 'fee': 1.9},
          {'start': 8, 'end': 21, 'fee': 6},
          {'start': 22, 'end': 23, 'fee': 1.9}],
        '6': [
          {'start': 0, 'end': 7, 'fee': 1.9},
          {'start': 8, 'end': 21, 'fee': 6},
          {'start': 22, 'end': 23, 'fee': 1.9}],
        '7': [
          {'start': 0, 'end': 7, 'fee': 1.9},
          {'start': 8, 'end': 21, 'fee': 6},
          {'start': 22, 'end': 23, 'fee': 1.9}],
        'hour': 6,
        'day1': 60,
        'day2': 39,
     },
      'km': [
        {'start': 0, 'end': -1, 'fee': 0.18}]
    },
    'mittel': {
      'time': {
        '1': [
          {'start': 0, 'end': 7, 'fee': 1.9},
          {'start': 8, 'end': 21, 'fee': 7},
          {'start': 22, 'end': 23, 'fee': 1.9}],
        '2': [
          {'start': 0, 'end': 7, 'fee': 1.9},
          {'start': 8, 'end': 21, 'fee': 7},
          {'start': 22, 'end': 23, 'fee': 1.9}],
        '3': [
          {'start': 0, 'end': 7, 'fee': 1.9},
          {'start': 8, 'end': 21, 'fee': 7},
          {'start': 22, 'end': 23, 'fee': 1.9}],
        '4': [
          {'start': 0, 'end': 7, 'fee': 1.9},
          {'start': 8, 'end': 21, 'fee': 7},
          {'start': 22, 'end': 23, 'fee': 1.9}],
        '5': [
          {'start': 0, 'end': 7, 'fee': 1.9},
          {'start': 8, 'end': 21, 'fee': 7},
          {'start': 22, 'end': 23, 'fee': 1.9}],
        '6': [
          {'start': 0, 'end': 7, 'fee': 1.9},
          {'start': 8, 'end': 21, 'fee': 7},
          {'start': 22, 'end': 23, 'fee': 1.9}],
        '7': [
          {'start': 0, 'end': 7, 'fee': 1.9},
          {'start': 8, 'end': 21, 'fee': 7},
          {'start': 22, 'end': 23, 'fee': 1.9}],
        'hour': 7,
        'day1': 70,
        'day2': 49,
     },
      'km': [
        {'start': 0, 'end': -1, 'fee': 0.2}]
    },
    'transporter': {
      'time': {
        '1': [
          {'start': 0, 'end': 7, 'fee': 1.9},
          {'start': 8, 'end': 21, 'fee': 8},
          {'start': 22, 'end': 23, 'fee': 1.9}],
        '2': [
          {'start': 0, 'end': 7, 'fee': 1.9},
          {'start': 8, 'end': 21, 'fee': 8},
          {'start': 22, 'end': 23, 'fee': 1.9}],
        '3': [
          {'start': 0, 'end': 7, 'fee': 1.9},
          {'start': 8, 'end': 21, 'fee': 8},
          {'start': 22, 'end': 23, 'fee': 1.9}],
        '4': [
          {'start': 0, 'end': 7, 'fee': 1.9},
          {'start': 8, 'end': 21, 'fee': 8},
          {'start': 22, 'end': 23, 'fee': 1.9}],
        '5': [
          {'start': 0, 'end': 7, 'fee': 1.9},
          {'start': 8, 'end': 21, 'fee': 8},
          {'start': 22, 'end': 23, 'fee': 1.9}],
        '6': [
          {'start': 0, 'end': 7, 'fee': 1.9},
          {'start': 8, 'end': 21, 'fee': 8},
          {'start': 22, 'end': 23, 'fee': 1.9}],
        '7': [
          {'start': 0, 'end': 7, 'fee': 1.9},
          {'start': 8, 'end': 21, 'fee': 8},
          {'start': 22, 'end': 23, 'fee': 1.9}],
        'hour': 8,
        'day1': 80,
        'day2': 59,
     },
      'km': [
        {'start': 0, 'end': -1, 'fee': 0.2}]
    },
    'sonder': {
      'time': {
        '1': [
          {'start': 0, 'end': 7, 'fee': 1.5},
          {'start': 8, 'end': 21, 'fee': 2.5},
          {'start': 22, 'end': 23, 'fee': 1.5}],
        '2': [
          {'start': 0, 'end': 7, 'fee': 1.5},
          {'start': 8, 'end': 21, 'fee': 2.5},
          {'start': 22, 'end': 23, 'fee': 1.5}],
        '3': [
          {'start': 0, 'end': 7, 'fee': 1.5},
          {'start': 8, 'end': 21, 'fee': 2.5},
          {'start': 22, 'end': 23, 'fee': 1.5}],
        '4': [
          {'start': 0, 'end': 7, 'fee': 1.5},
          {'start': 8, 'end': 21, 'fee': 2.5},
          {'start': 22, 'end': 23, 'fee': 1.5}],
        '5': [
          {'start': 0, 'end': 7, 'fee': 1.5},
          {'start': 8, 'end': 21, 'fee': 2.5},
          {'start': 22, 'end': 23, 'fee': 1.5}],
        '6': [
          {'start': 0, 'end': 7, 'fee': 1.5},
          {'start': 8, 'end': 21, 'fee': 2.5},
          {'start': 22, 'end': 23, 'fee': 1.5}],
        '7': [
          {'start': 0, 'end': 7, 'fee': 1.5},
          {'start': 8, 'end': 21, 'fee': 2.5},
          {'start': 22, 'end': 23, 'fee': 1.5}],
        'hour': 2.5,
        'day1': 40,
        'day2': 29,
     },
      'km': [
        {'start': 0, 'end': -1, 'fee': 0.2}]
    }
  }
);
