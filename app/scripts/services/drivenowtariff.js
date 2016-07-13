'use strict';

/**
 * @ngdoc service
 * @name c2gyoApp.greenwheelsrate
 * @description
 * # greenwheelsrate
 * Constant in the c2gyoApp.
 */
angular.module('c2gyoApp')
  .constant('drivenowtariff', {
    'resolution': 'm',
    'mini': {
      'time': {
        '1': [
          {'start': 0, 'end': 23, 'fee': 0.31}],
        '2': [
          {'start': 0, 'end': 23, 'fee': 0.31}],
        '3': [
          {'start': 0, 'end': 23, 'fee': 0.31}],
        '4': [
          {'start': 0, 'end': 23, 'fee': 0.31}],
        '5': [
          {'start': 0, 'end': 23, 'fee': 0.31}],
        '6': [
          {'start': 0, 'end': 23, 'fee': 0.31}],
        '7': [
          {'start': 0, 'end': 23, 'fee': 0.31}],
        'minute': 0.31,
      },
      'km': [
        {'start': 0, 'end': -1, 'fee': 0}]
    },
    'bmw': {
      'time': {
        '1': [
          {'start': 0, 'end': 23, 'fee': 0.34}],
        '2': [
          {'start': 0, 'end': 23, 'fee': 0.34}],
        '3': [
          {'start': 0, 'end': 23, 'fee': 0.34}],
        '4': [
          {'start': 0, 'end': 23, 'fee': 0.34}],
        '5': [
          {'start': 0, 'end': 23, 'fee': 0.34}],
        '6': [
          {'start': 0, 'end': 23, 'fee': 0.34}],
        '7': [
          {'start': 0, 'end': 23, 'fee': 0.34}],
        'minute': 0.34,
      },
      'km': [
        {'start': 0, 'end': -1, 'fee': 0}]
    },
    'minicabriosummer': {
      'time': {
        '1': [
          {'start': 0, 'end': 23, 'fee': 0.31}],
        '2': [
          {'start': 0, 'end': 23, 'fee': 0.31}],
        '3': [
          {'start': 0, 'end': 23, 'fee': 0.31}],
        '4': [
          {'start': 0, 'end': 23, 'fee': 0.31}],
        '5': [
          {'start': 0, 'end': 23, 'fee': 0.31}],
        '6': [
          {'start': 0, 'end': 23, 'fee': 0.31}],
        '7': [
          {'start': 0, 'end': 23, 'fee': 0.31}],
        'minute': 0.31,
      },
      'km': [
        {'start': 0, 'end': -1, 'fee': 0}]
    },
    'minicabriowinter': {
      'time': {
        '1': [
          {'start': 0, 'end': 23, 'fee': 0.34}],
        '2': [
          {'start': 0, 'end': 23, 'fee': 0.34}],
        '3': [
          {'start': 0, 'end': 23, 'fee': 0.34}],
        '4': [
          {'start': 0, 'end': 23, 'fee': 0.34}],
        '5': [
          {'start': 0, 'end': 23, 'fee': 0.34}],
        '6': [
          {'start': 0, 'end': 23, 'fee': 0.34}],
        '7': [
          {'start': 0, 'end': 23, 'fee': 0.34}],
        'minute': 0.34,
      },
      'km': [
        {'start': 0, 'end': -1, 'fee': 0}]
    },
    'drivensave': {
      'time': {
        '1': [
          {'start': 0, 'end': 23, 'fee': 0.20}],
        '2': [
          {'start': 0, 'end': 23, 'fee': 0.20}],
        '3': [
          {'start': 0, 'end': 23, 'fee': 0.20}],
        '4': [
          {'start': 0, 'end': 23, 'fee': 0.20}],
        '5': [
          {'start': 0, 'end': 23, 'fee': 0.20}],
        '6': [
          {'start': 0, 'end': 23, 'fee': 0.20}],
        '7': [
          {'start': 0, 'end': 23, 'fee': 0.20}],
        'minute': 0.20,
      },
      'km': [
        {'start': 0, 'end': -1, 'fee': 0}]
    },
    'parking': 0.15,
    'reservation': [
      {'start': 15, 'end': -1, 'fee': 0.1}],
    'airport': {
      'berlintegel': 4,
      'berlinschoenefeld':6,
      'hamburg': 5,
      'munich': 12,
      'cologne': 4,
      'duesseldorf': 6,
      'wien': 10,
    },
    'drivecitytocity': {
      'duesseldorfcologne': 10,
      'cologneduesseldorf':6,
      'hildengerresheim': 3,
      'neubibergbavariafilmstadt': 3,
    },

  }
);
