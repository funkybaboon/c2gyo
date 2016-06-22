'use strict';

/**
 * @ngdoc service
 * @name c2gyoApp.stadtmobiltariffbusiness
 * @description
 * # stadtmobiltariffbusiness
 * Constant in the c2gyoApp.
 */
angular.module('c2gyoApp')
  .constant('stadtmobiltariffbusiness', {
    'resolution': 'h',
    'a': {
      'time': {
        '1': [
          {'start':  0, 'end':  6, 'fee': 0},
          {'start':  7, 'end': 15, 'fee': 1.3},
          {'start': 16, 'end': 23, 'fee': 1.3}],
        '2': [
          {'start':  0, 'end':  6, 'fee': 0},
          {'start':  7, 'end': 15, 'fee': 1.3},
          {'start': 16, 'end': 23, 'fee': 1.3}],
        '3': [
          {'start':  0, 'end':  6, 'fee': 0},
          {'start':  7, 'end': 15, 'fee': 1.3},
          {'start': 16, 'end': 23, 'fee': 1.3}],
        '4': [
          {'start':  0, 'end':  6, 'fee': 0},
          {'start':  7, 'end': 15, 'fee': 1.3},
          {'start': 16, 'end': 23, 'fee': 1.3}],
        '5': [
          {'start':  0, 'end':  6, 'fee': 0},
          {'start':  7, 'end': 15, 'fee': 1.3},
          {'start': 16, 'end': 23, 'fee': 1.3}],
        '6': [
          {'start':  0, 'end':  6, 'fee': 0},
          {'start':  7, 'end': 15, 'fee': 1.3},
          {'start': 16, 'end': 23, 'fee': 1.3}],
        '7': [
          {'start':  0, 'end':  6, 'fee': 0},
          {'start':  7, 'end': 15, 'fee': 1.3},
          {'start': 16, 'end': 23, 'fee': 1.3}],
        'hour': 1.3,
        'day': 20,
        'week': 115
      },
      'km': [
        {'start': 0, 'end': -1, 'fee': 0.17}]
    },
    'b': {
      'time': {
        '1': [
          {'start':  0, 'end':  6, 'fee': 0},
          {'start':  7, 'end': 15, 'fee': 1.3},
          {'start': 16, 'end': 23, 'fee': 1.9}],
        '2': [
          {'start':  0, 'end':  6, 'fee': 0},
          {'start':  7, 'end': 15, 'fee': 1.3},
          {'start': 16, 'end': 23, 'fee': 1.9}],
        '3': [
          {'start':  0, 'end':  6, 'fee': 0},
          {'start':  7, 'end': 15, 'fee': 1.3},
          {'start': 16, 'end': 23, 'fee': 1.9}],
        '4': [
          {'start':  0, 'end':  6, 'fee': 0},
          {'start':  7, 'end': 15, 'fee': 1.3},
          {'start': 16, 'end': 23, 'fee': 1.9}],
        '5': [
          {'start':  0, 'end':  6, 'fee': 0},
          {'start':  7, 'end': 15, 'fee': 1.3},
          {'start': 16, 'end': 23, 'fee': 1.9}],
        '6': [
          {'start':  0, 'end':  6, 'fee': 0},
          {'start':  7, 'end': 15, 'fee': 1.9},
          {'start': 16, 'end': 23, 'fee': 1.9}],
        '7': [
          {'start':  0, 'end':  6, 'fee': 0},
          {'start':  7, 'end': 15, 'fee': 1.9},
          {'start': 16, 'end': 23, 'fee': 1.9}],
        'hour': 1.9,
        'day': 22,
        'week': 125
      },
      'km': [
        {'start': 0, 'end': -1, 'fee': 0.17}]
    },
    'c': {
      'time': {
        '1': [
          {'start':  0, 'end':  6, 'fee': 0},
          {'start':  7, 'end': 15, 'fee': 1.9},
          {'start': 16, 'end': 23, 'fee': 2.3}],
        '2': [
          {'start':  0, 'end':  6, 'fee': 0},
          {'start':  7, 'end': 15, 'fee': 1.9},
          {'start': 16, 'end': 23, 'fee': 2.3}],
        '3': [
          {'start':  0, 'end':  6, 'fee': 0},
          {'start':  7, 'end': 15, 'fee': 1.9},
          {'start': 16, 'end': 23, 'fee': 2.3}],
        '4': [
          {'start':  0, 'end':  6, 'fee': 0},
          {'start':  7, 'end': 15, 'fee': 1.9},
          {'start': 16, 'end': 23, 'fee': 2.3}],
        '5': [
          {'start':  0, 'end':  6, 'fee': 0},
          {'start':  7, 'end': 15, 'fee': 1.9},
          {'start': 16, 'end': 23, 'fee': 2.3}],
        '6': [
          {'start':  0, 'end':  6, 'fee': 0},
          {'start':  7, 'end': 15, 'fee': 2.3},
          {'start': 16, 'end': 23, 'fee': 2.3}],
        '7': [
          {'start':  0, 'end':  6, 'fee': 0},
          {'start':  7, 'end': 15, 'fee': 2.3},
          {'start': 16, 'end': 23, 'fee': 2.3}],
        'hour': 2.3,
        'day': 28,
        'week': 145
      },
      'km': [
        {'start': 0, 'end': -1, 'fee': 0.18}]
    },
    'd': {
      'time': {
        '1': [
          {'start':  0, 'end':  6, 'fee': 1},
          {'start':  7, 'end': 15, 'fee': 3},
          {'start': 16, 'end': 23, 'fee': 3}],
        '2': [
          {'start':  0, 'end':  6, 'fee': 1},
          {'start':  7, 'end': 15, 'fee': 3},
          {'start': 16, 'end': 23, 'fee': 3}],
        '3': [
          {'start':  0, 'end':  6, 'fee': 1},
          {'start':  7, 'end': 15, 'fee': 3},
          {'start': 16, 'end': 23, 'fee': 3}],
        '4': [
          {'start':  0, 'end':  6, 'fee': 1},
          {'start':  7, 'end': 15, 'fee': 3},
          {'start': 16, 'end': 23, 'fee': 3}],
        '5': [
          {'start':  0, 'end':  6, 'fee': 1},
          {'start':  7, 'end': 15, 'fee': 3},
          {'start': 16, 'end': 23, 'fee': 3}],
        '6': [
          {'start':  0, 'end':  6, 'fee': 1},
          {'start':  7, 'end': 15, 'fee': 3},
          {'start': 16, 'end': 23, 'fee': 3}],
        '7': [
          {'start':  0, 'end':  6, 'fee': 1},
          {'start':  7, 'end': 15, 'fee': 3},
          {'start': 16, 'end': 23, 'fee': 3}],
        'hour': 3,
        'day': 32,
        'week': 175
      },
      'km': [
        {'start': 0, 'end': -1, 'fee': 0.25}]
    },
    'f': {
      'time': {
        '1': [
          {'start':  0, 'end':  6, 'fee': 2},
          {'start':  7, 'end': 15, 'fee': 3.8},
          {'start': 16, 'end': 23, 'fee': 3.8}],
        '2': [
          {'start':  0, 'end':  6, 'fee': 2},
          {'start':  7, 'end': 15, 'fee': 3.8},
          {'start': 16, 'end': 23, 'fee': 3.8}],
        '3': [
          {'start':  0, 'end':  6, 'fee': 2},
          {'start':  7, 'end': 15, 'fee': 3.8},
          {'start': 16, 'end': 23, 'fee': 3.8}],
        '4': [
          {'start':  0, 'end':  6, 'fee': 2},
          {'start':  7, 'end': 15, 'fee': 3.8},
          {'start': 16, 'end': 23, 'fee': 3.8}],
        '5': [
          {'start':  0, 'end':  6, 'fee': 2},
          {'start':  7, 'end': 15, 'fee': 3.8},
          {'start': 16, 'end': 23, 'fee': 3.8}],
        '6': [
          {'start':  0, 'end':  6, 'fee': 2},
          {'start':  7, 'end': 15, 'fee': 3.8},
          {'start': 16, 'end': 23, 'fee': 3.8}],
        '7': [
          {'start':  0, 'end':  6, 'fee': 2},
          {'start':  7, 'end': 15, 'fee': 3.8},
          {'start': 16, 'end': 23, 'fee': 3.8}],
        'hour': 3.8,
        'day': 40,
        'week': 230
      },
      'km': [
        {'start': 0, 'end': -1, 'fee': 0.27}]
    }
  }
);
