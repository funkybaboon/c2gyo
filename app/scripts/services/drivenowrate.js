'use strict';

/**
 * @ngdoc service
 * @name c2gyoApp.greenwheelsrate
 * @description
 * # greenwheelsrate
 * Constant in the c2gyoApp.
 */
angular.module('c2gyoApp')
  .constant('drivenowrate', {
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
      'muenchen': 12,
      'koeln': 4,
      'duesseldorf': 6,
      'wien': 10,
    },
    'drivecitytocity': {
      'duesseldorfkoeln': 10,
      'koelnduesseldorf':6,
      'hildengerresheim': 3,
      'neubibergbavariafilmstadt': 3,
    },

  }
);
