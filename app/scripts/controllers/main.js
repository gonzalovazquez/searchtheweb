'use strict';

/**
 * @ngdoc function
 * @name searchTheWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the searchTheWebApp
 */
angular.module('searchTheWebApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
