'use strict';

/**
 * @ngdoc service
 * @name c2gyoApp.flinksterratebundesweit
 * @description
 * # flinksterratebundesweit
 * Constant in the c2gyoApp.
 */
angular.module('c2gyoApp')
  .constant('flinksterratelokal', {
    'resolution': 'h',
    'sonder': {
      'time': {
        '1': [
          {'start': 0, 'end': 7, 'fee': 0},
          {'start': 8, 'end': 21, 'fee': 1.75},
          {'start': 22, 'end': 23, 'fee': 0}],
        '2': [
          {'start': 0, 'end': 7, 'fee': 0},
          {'start': 8, 'end': 21, 'fee': 1.75},
          {'start': 22, 'end': 23, 'fee': 0}],
        '3': [
          {'start': 0, 'end': 7, 'fee': 0},
          {'start': 8, 'end': 21, 'fee': 1.75},
          {'start': 22, 'end': 23, 'fee': 0}],
        '4': [
          {'start': 0, 'end': 7, 'fee': 0},
          {'start': 8, 'end': 21, 'fee': 1.75},
          {'start': 22, 'end': 23, 'fee': 0}],
        '5': [
          {'start': 0, 'end': 7, 'fee': 0},
          {'start': 8, 'end': 21, 'fee': 1.75},
          {'start': 22, 'end': 23, 'fee': 0}],
        '6': [
          {'start': 0, 'end': 7, 'fee': 0},
          {'start': 8, 'end': 21, 'fee': 1.75},
          {'start': 22, 'end': 23, 'fee': 0}],
        '7': [
          {'start': 0, 'end': 7, 'fee': 0},
          {'start': 8, 'end': 21, 'fee': 1.75},
          {'start': 22, 'end': 23, 'fee': 0}],
        'hour': 1.75,
        'day': 19.50,
        'week': 120,
     },
      'km': [
        {'start': 0, 'end': -1, 'fee': 0.26}]
    },
    'mini': {
      'time': {
        '1': [
          {'start': 0, 'end': 7, 'fee': 0},
          {'start': 8, 'end': 21, 'fee': 1.75},
          {'start': 22, 'end': 23, 'fee': 0}],
        '2': [
          {'start': 0, 'end': 7, 'fee': 0},
          {'start': 8, 'end': 21, 'fee': 1.75},
          {'start': 22, 'end': 23, 'fee': 0}],
        '3': [
          {'start': 0, 'end': 7, 'fee': 0},
          {'start': 8, 'end': 21, 'fee': 1.75},
          {'start': 22, 'end': 23, 'fee': 0}],
        '4': [
          {'start': 0, 'end': 7, 'fee': 0},
          {'start': 8, 'end': 21, 'fee': 1.75},
          {'start': 22, 'end': 23, 'fee': 0}],
        '5': [
          {'start': 0, 'end': 7, 'fee': 0},
          {'start': 8, 'end': 21, 'fee': 1.75},
          {'start': 22, 'end': 23, 'fee': 0}],
        '6': [
          {'start': 0, 'end': 7, 'fee': 0},
          {'start': 8, 'end': 21, 'fee': 1.75},
          {'start': 22, 'end': 23, 'fee': 0}],
        '7': [
          {'start': 0, 'end': 7, 'fee': 0},
          {'start': 8, 'end': 21, 'fee': 1.75},
          {'start': 22, 'end': 23, 'fee': 0}],
        'hour': 1.75,
        'day': 19.50,
        'week': 120,
     },
      'km': [
        {'start': 0, 'end': -1, 'fee': 0.26}]
    },
    'klein': {
      'time': {
        '1': [
          {'start': 0, 'end': 7, 'fee': 1},
          {'start': 8, 'end': 21, 'fee': 2.25},
          {'start': 22, 'end': 23, 'fee': 1}],
        '2': [
          {'start': 0, 'end': 7, 'fee': 1},
          {'start': 8, 'end': 21, 'fee': 2.25},
          {'start': 22, 'end': 23, 'fee': 1}],
        '3': [
          {'start': 0, 'end': 7, 'fee': 1},
          {'start': 8, 'end': 21, 'fee': 2.25},
          {'start': 22, 'end': 23, 'fee': 1}],
        '4': [
          {'start': 0, 'end': 7, 'fee': 1},
          {'start': 8, 'end': 21, 'fee': 2.25},
          {'start': 22, 'end': 23, 'fee': 1}],
        '5': [
          {'start': 0, 'end': 7, 'fee': 1},
          {'start': 8, 'end': 21, 'fee': 2.25},
          {'start': 22, 'end': 23, 'fee': 1}],
        '6': [
          {'start': 0, 'end': 7, 'fee': 1},
          {'start': 8, 'end': 21, 'fee': 2.25},
          {'start': 22, 'end': 23, 'fee': 1}],
        '7': [
          {'start': 0, 'end': 7, 'fee': 1},
          {'start': 8, 'end': 21, 'fee': 2.25},
          {'start': 22, 'end': 23, 'fee': 1}],
        'hour': 2.25,
        'day': 24.50,
        'week': 130,
     },
      'km': [
        {'start': 0, 'end': -1, 'fee': 0.26}]
    },
    'kompakt': {
      'time': {
        '1': [
          {'start': 0, 'end': 7, 'fee': 1},
          {'start': 8, 'end': 21, 'fee': 2.75},
          {'start': 22, 'end': 23, 'fee': 1}],
        '2': [
          {'start': 0, 'end': 7, 'fee': 1},
          {'start': 8, 'end': 21, 'fee': 2.75},
          {'start': 22, 'end': 23, 'fee': 1}],
        '3': [
          {'start': 0, 'end': 7, 'fee': 1},
          {'start': 8, 'end': 21, 'fee': 2.75},
          {'start': 22, 'end': 23, 'fee': 1}],
        '4': [
          {'start': 0, 'end': 7, 'fee': 1},
          {'start': 8, 'end': 21, 'fee': 2.75},
          {'start': 22, 'end': 23, 'fee': 1}],
        '5': [
          {'start': 0, 'end': 7, 'fee': 1},
          {'start': 8, 'end': 21, 'fee': 2.75},
          {'start': 22, 'end': 23, 'fee': 1}],
        '6': [
          {'start': 0, 'end': 7, 'fee': 1},
          {'start': 8, 'end': 21, 'fee': 2.75},
          {'start': 22, 'end': 23, 'fee': 1}],
        '7': [
          {'start': 0, 'end': 7, 'fee': 1},
          {'start': 8, 'end': 21, 'fee': 2.75},
          {'start': 22, 'end': 23, 'fee': 1}],
        'hour': 2.75,
        'day': 29.50,
        'week': 160,
     },
      'km': [
        {'start': 0, 'end': -1, 'fee': 0.26}]
    },
    'mittel': {
      'time': {
        '1': [
          {'start': 0, 'end': 7, 'fee': 1.5},
          {'start': 8, 'end': 21, 'fee': 4.75},
          {'start': 22, 'end': 23, 'fee': 1.5}],
        '2': [
          {'start': 0, 'end': 7, 'fee': 1.5},
          {'start': 8, 'end': 21, 'fee': 4.75},
          {'start': 22, 'end': 23, 'fee': 1.5}],
        '3': [
          {'start': 0, 'end': 7, 'fee': 1.5},
          {'start': 8, 'end': 21, 'fee': 4.75},
          {'start': 22, 'end': 23, 'fee': 1.5}],
        '4': [
          {'start': 0, 'end': 7, 'fee': 1.5},
          {'start': 8, 'end': 21, 'fee': 4.75},
          {'start': 22, 'end': 23, 'fee': 1.5}],
        '5': [
          {'start': 0, 'end': 7, 'fee': 1.5},
          {'start': 8, 'end': 21, 'fee': 4.75},
          {'start': 22, 'end': 23, 'fee': 1.5}],
        '6': [
          {'start': 0, 'end': 7, 'fee': 1.5},
          {'start': 8, 'end': 21, 'fee': 4.75},
          {'start': 22, 'end': 23, 'fee': 1.5}],
        '7': [
          {'start': 0, 'end': 7, 'fee': 1.5},
          {'start': 8, 'end': 21, 'fee': 4.75},
          {'start': 22, 'end': 23, 'fee': 1.5}],
        'hour': 4.75,
        'day': 39.50,
        'week': 250,
     },
      'km': [
        {'start': 0, 'end': -1, 'fee': 0.29}]
    },
    'transporter': {
      'time': {
        '1': [
          {'start': 0, 'end': 7, 'fee': 1.5},
          {'start': 8, 'end': 21, 'fee': 4.75},
          {'start': 22, 'end': 23, 'fee': 1.5}],
        '2': [
          {'start': 0, 'end': 7, 'fee': 1.5},
          {'start': 8, 'end': 21, 'fee': 4.75},
          {'start': 22, 'end': 23, 'fee': 1.5}],
        '3': [
          {'start': 0, 'end': 7, 'fee': 1.5},
          {'start': 8, 'end': 21, 'fee': 4.75},
          {'start': 22, 'end': 23, 'fee': 1.5}],
        '4': [
          {'start': 0, 'end': 7, 'fee': 1.5},
          {'start': 8, 'end': 21, 'fee': 4.75},
          {'start': 22, 'end': 23, 'fee': 1.5}],
        '5': [
          {'start': 0, 'end': 7, 'fee': 1.5},
          {'start': 8, 'end': 21, 'fee': 4.75},
          {'start': 22, 'end': 23, 'fee': 1.5}],
        '6': [
          {'start': 0, 'end': 7, 'fee': 1.5},
          {'start': 8, 'end': 21, 'fee': 4.75},
          {'start': 22, 'end': 23, 'fee': 1.5}],
        '7': [
          {'start': 0, 'end': 7, 'fee': 1.5},
          {'start': 8, 'end': 21, 'fee': 4.75},
          {'start': 22, 'end': 23, 'fee': 1.5}],
        'hour': 4.75,
        'day': 39.50,
        'week': 250,
     },
      'km': [
        {'start': 0, 'end': -1, 'fee': 0.29}]
    }
  }
);
