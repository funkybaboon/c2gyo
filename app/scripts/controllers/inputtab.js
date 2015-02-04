'use strict';

/**
 * @ngdoc function
 * @name c2gyoApp.controller:InputtabCtrl
 * @description
 * # InputtabCtrl
 * Controller of the c2gyoApp
 */
angular.module('c2gyoApp')
  .controller('InputtabCtrl', function ($scope) {
    this.tab = 1;

    this.isSet = function(checkTab) {
      return this.tab === checkTab;
    };

    this.setTab = function(setTab) {
      this.tab = setTab;
    };
  });
