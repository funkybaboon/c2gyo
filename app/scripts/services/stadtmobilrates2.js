'use strict';

/**
 * @ngdoc service
 * @name c2gyoApp.stadtmobilrates2
 * @description
 * # stadtmobilrates2
 * Constant in the c2gyoApp.
 */
angular.module('c2gyoApp')
  .constant('stadtmobilrates2', {
    "resolution": "h",
    "A": {
      "time": {
        "monday": [
          { "Start": 0, "End": 7, "fee": 0 },
          { "Start": 7, "End": 0, "fee": 1.6}],
        "tuesday": [
          { "Start": 0, "End": 7, "fee": 0 },
          { "Start": 7, "End": 0, "fee": 1.6}],
        "wednesday": [
          { "Start": 0, "End": 7, "fee": 0 },
          { "Start": 7, "End": 0, "fee": 1.6}],
        "thursday":  [
          { "Start": 0, "End": 7, "fee": 0 },
          { "Start": 7, "End": 0, "fee": 1.6}],
        "friday":  [
          { "Start": 0, "End": 7, "fee": 0 },
          { "Start": 7, "End": 0, "fee": 1.6}],
        "saturday":  [
          { "Start": 0, "End": 7, "fee": 0 },
          { "Start": 7, "End": 0, "fee": 1.6}],
        "sunday": [
          { "Start": 0, "End": 7, "fee": 0 },
          { "Start": 7, "End": 0, "fee": 1.6}],
        "day": 26,
        "week": 140
      },
      "km": [
        { "Start": 0, "End": 100, "fee": 0.22},
        { "Start": 101,"End": 701, "fee": 0.18},
        { "Start": 701,"End": -1, "fee": 0.18}]
    },
    "B": {
      "time": {
        "monday": [
          { "Start": 0, "End": 7, "fee": 0 },
          { "Start": 7, "End": 0, "fee": 2.7}],
        "tuesday": [
          { "Start": 0, "End": 7, "fee": 0 },
          { "Start": 7, "End": 0, "fee": 2.7}],
        "wednesday": [
          { "Start": 0, "End": 7, "fee": 0 },
          { "Start": 7, "End": 0, "fee": 2.7}],
        "thursday":  [
          { "Start": 0, "End": 7, "fee": 0 },
          { "Start": 7, "End": 0, "fee": 2.7}],
        "friday":  [
          { "Start": 0, "End": 7, "fee": 0 },
          { "Start": 7, "End": 0, "fee": 2.7}],
        "saturday":  [
          { "Start": 0, "End": 7, "fee": 0 },
          { "Start": 7, "End": 0, "fee": 2.7}],
        "sunday": [
          { "Start": 0, "End": 7, "fee": 0 },
          { "Start": 7, "End": 0, "fee": 2.7}],
        "day": 30,
        "week": 155
      },
      "km": [
        { "Start": 0, "End": 100, "fee": 0.27},
        { "Start": 101,"End": 701, "fee": 0.21},
        { "Start": 701,"End": -1, "fee": 0.16}]
    },
    "C": {
      "time": {
        "monday": [
          { "Start": 0, "End": 7, "fee": 0 },
          { "Start": 7, "End": 0, "fee": 3.3}],
        "tuesday": [
          { "Start": 0, "End": 7, "fee": 0 },
          { "Start": 7, "End": 0, "fee": 3.3}],
        "wednesday": [
          { "Start": 0, "End": 7, "fee": 0 },
          { "Start": 7, "End": 0, "fee": 3.3}],
        "thursday":  [
          { "Start": 0, "End": 7, "fee": 0 },
          { "Start": 7, "End": 0, "fee": 3.3}],
        "friday":  [
          { "Start": 0, "End": 7, "fee": 0 },
          { "Start": 7, "End": 0, "fee": 3.3}],
        "saturday":  [
          { "Start": 0, "End": 7, "fee": 0 },
          { "Start": 7, "End": 0, "fee": 3.3}],
        "sunday": [
          { "Start": 0, "End": 7, "fee": 0 },
          { "Start": 7, "End": 0, "fee": 3.3}],
        "day": 37,
        "week": 175
      },
      "km": [
        { "Start": 0, "End": 100, "fee": 0.31},
        { "Start": 101,"End": 701, "fee": 0.23},
        { "Start": 701,"End": -1, "fee": 0.17}]
    },
    "D": {
      "time": {
        "monday": [
          { "Start": 0, "End": 7, "fee": 0 },
          { "Start": 7, "End": 0, "fee": 3.7}],
        "tuesday": [
          { "Start": 0, "End": 7, "fee": 0 },
          { "Start": 7, "End": 0, "fee": 3.7}],
        "wednesday": [
          { "Start": 0, "End": 7, "fee": 0 },
          { "Start": 7, "End": 0, "fee": 3.7}],
        "thursday":  [
          { "Start": 0, "End": 7, "fee": 0 },
          { "Start": 7, "End": 0, "fee": 3.7}],
        "friday":  [
          { "Start": 0, "End": 7, "fee": 0 },
          { "Start": 7, "End": 0, "fee": 3.7}],
        "saturday":  [
          { "Start": 0, "End": 7, "fee": 0 },
          { "Start": 7, "End": 0, "fee": 3.7}],
        "sunday": [
          { "Start": 0, "End": 7, "fee": 0 },
          { "Start": 7, "End": 0, "fee": 3.7}],
        "day": 40,
        "week": 210
      },
      "km": [
        { "Start": 0, "End": 100, "fee": 0.34},
        { "Start": 101,"End": 701, "fee": 0.25},
        { "Start": 701,"End": -1, "fee": 0.25}]
    },
    "F": {
      "time": {
        "monday": [
          { "Start": 0, "End": 7, "fee": 0 },
          { "Start": 7, "End": 0, "fee": 4.7}],
        "tuesday": [
          { "Start": 0, "End": 7, "fee": 0 },
          { "Start": 7, "End": 0, "fee": 4.7}],
        "wednesday": [
          { "Start": 0, "End": 7, "fee": 0 },
          { "Start": 7, "End": 0, "fee": 4.7}],
        "thursday":  [
          { "Start": 0, "End": 7, "fee": 0 },
          { "Start": 7, "End": 0, "fee": 4.7}],
        "friday":  [
          { "Start": 0, "End": 7, "fee": 0 },
          { "Start": 7, "End": 0, "fee": 4.7}],
        "saturday":  [
          { "Start": 0, "End": 7, "fee": 0 },
          { "Start": 7, "End": 0, "fee": 4.7}],
        "sunday": [
          { "Start": 0, "End": 7, "fee": 0 },
          { "Start": 7, "End": 0, "fee": 4.7}],
        "day": 49,
        "week": 260
      },
      "km": [
        { "Start": 0, "End": 100, "fee": 0.38},
        { "Start": 101,"End": 701, "fee": 0.27},
        { "Start": 701,"End": -1, "fee": 0.27}]
    }
  }
);
