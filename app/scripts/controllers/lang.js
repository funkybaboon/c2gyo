'use strict';

/**
 * @ngdoc function
 * @name c2gyoApp.controller:LangCtrl
 * @description
 * # LangCtrl
 * Controller of the c2gyoApp
 */
angular.module('c2gyoApp')
  .controller('LangCtrl', function($scope, $translate) {

  $scope.changeLang = function(key) {
    $translate.use(key).then(function(key) {
      console.log('Sprache zu ' + key + ' gewechselt.');
    }, function() {
      console.log('Irgendwas lief schief.');
    });
  };
});
