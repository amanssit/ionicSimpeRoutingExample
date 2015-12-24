(function () {
  'use strict';

  angular.module('starter', ['ionic'])
    .run(function ($ionicPlatform) {
      $ionicPlatform.ready(function () {
        if (window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
          cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
          // org.apache.cordova.statusbar required
          StatusBar.styleDefault();
        }
      });
    })

    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
      $stateProvider
        .state('app', {
          url: '/app',
          abstract: true,
          templateUrl: 'app/master.html',
          controller: 'AppCtrl'
        })

      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/app/category');
      //$locationProvider.html5Mode(true);
    })

}).call(this);



