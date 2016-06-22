'use strict';

/**
 * @ngdoc service
 * @name c2gyoApp.greenwheelsrate
 * @description
 * # greenwheelsrate
 * Constant in the c2gyoApp.
 */
angular.module('c2gyoApp')
  .constant('car2gotariff', {
    'resolution': 'm',
    'smart': {
      'time': {
        '1': [
          {'start': 0, 'end': 23, 'fee': 14.99}],
        '2': [
          {'start': 0, 'end': 23, 'fee': 14.99}],
        '3': [
          {'start': 0, 'end': 23, 'fee': 14.99}],
        '4': [
          {'start': 0, 'end': 23, 'fee': 14.99}],
        '5': [
          {'start': 0, 'end': 23, 'fee': 14.99}],
        '6': [
          {'start': 0, 'end': 23, 'fee': 14.99}],
        '7': [
          {'start': 0, 'end': 23, 'fee': 14.99}],
        'minute': 0.29,
        'hour': 14.99,
        'day': 79.00
      },
      'km': [
        {'start': 0, 'end': 200, 'fee': 0},
        {'start': 201, 'end': -1, 'fee': 0.29}]
    },
    'mercedesbenz1': {
      'time': {
        '1': [
          {'start': 0, 'end': 23, 'fee': 16.99}],
        '2': [
          {'start': 0, 'end': 23, 'fee': 16.99}],
        '3': [
          {'start': 0, 'end': 23, 'fee': 16.99}],
        '4': [
          {'start': 0, 'end': 23, 'fee': 16.99}],
        '5': [
          {'start': 0, 'end': 23, 'fee': 16.99}],
        '6': [
          {'start': 0, 'end': 23, 'fee': 16.99}],
        '7': [
          {'start': 0, 'end': 23, 'fee': 16.99}],
        'minute': 0.31,
        'hour': 16.99,
        'day': 99.00
      },
      'km': [
        {'start': 0, 'end': 200, 'fee': 0},
        {'start': 201, 'end': -1, 'fee': 0.29}]
    },
    'mercedesbenz2': {
      'time': {
        '1': [
          {'start': 0, 'end': 23, 'fee': 19.99}],
        '2': [
          {'start': 0, 'end': 23, 'fee': 19.99}],
        '3': [
          {'start': 0, 'end': 23, 'fee': 19.99}],
        '4': [
          {'start': 0, 'end': 23, 'fee': 19.99}],
        '5': [
          {'start': 0, 'end': 23, 'fee': 19.99}],
        '6': [
          {'start': 0, 'end': 23, 'fee': 19.99}],
        '7': [
          {'start': 0, 'end': 23, 'fee': 19.99}],
        'minute': 0.34,
        'hour': 19.99,
        'day': 109.00
      },
      'km': [
        {'start': 0, 'end': 200, 'fee': 0},
        {'start': 201, 'end': -1, 'fee': 0.29}]
    },
    'parking': 0.19,
    'airport': {
      'berlin': 4.90,
      'hamburg': 4.90,
      'cologne': 4.90,
      'duesseldorf': 4.90,
      'frankfurt': 4.90,
      'stuttgart': 4.90,
      'munich': 12.00
    }
  }
);
