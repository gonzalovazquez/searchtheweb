'use strict';

/**
 * @ngdoc function
 * @name searchTheWebApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the searchTheWebApp
 */
angular.module('searchTheWebApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
