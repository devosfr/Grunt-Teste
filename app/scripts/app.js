'use strict';

/**
 * @ngdoc overview
 * @name startFilmesApp
 * @description
 * # startFilmesApp
 *
 * Main module of the application.
 */
var app = angular
  .module('startFilmesApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);

  app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

  // app.config(function($httpProvider){
    
  // });
