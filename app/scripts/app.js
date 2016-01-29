'use strict';

/**
 * @ngdoc overview
 * @name pizzaWebsiteApp
 * @description
 * # pizzaWebsiteApp
 *
 * Main module of the application.
 */
angular
  .module('pizzaWebsiteApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'uiGmapgoogle-maps'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: "views/main.html",
        controller: "MainCtrl"
      })
      .when('/about', {
        templateUrl: "views/about.html",
        controller: "AboutCtrl"
      })
      .when('/contact', {
        templateUrl: "views/contact.html",
        controller: "ContactCtrl"
      })
      .when('/menu', {
        templateUrl: "views/menu.html"
      })
      .when('/hiring', {
          templateUrl: "views/hiring.html"
      })
      .when('/gallery', {
          templateUrl: "views/gallery.html"
      })
      .when('/checkout', {
          templateUrl: "views/checkout.html"
      })
      .otherwise({
        redirectTo: '/'
      });

      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });

  });
