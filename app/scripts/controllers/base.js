'use strict';

/**
 * @ngdoc function
 * @name c2gyoApp.controller:BaseCtrl
 * @description
 * # BaseCtrl
 * Controller of the c2gyoApp
 */
angular.module('c2gyoApp')
  .controller('BaseCtrl', function($scope) {

    $scope.getDays = function(minutes) {
      var duration = moment.duration(minutes, 'm');
      return Math.floor(duration.asDays());
    };

  });
