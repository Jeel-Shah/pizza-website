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
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('homeState', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .state('aboutState', {
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .state('contactState', {
        url: '/contact',
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .state('menuState', {
        url: '/menu',
        templateUrl: 'views/menu.html'
      })
  });
