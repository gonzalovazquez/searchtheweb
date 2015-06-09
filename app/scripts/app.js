'use strict';

/**
 * @ngdoc overview
 * @name searchTheWebApp
 * @description
 * # searchTheWebApp
 *
 * Main module of the application.
 */
angular
  .module('searchTheWebApp', [
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
