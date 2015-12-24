(function() {
  'use strict';
  angular.module('starter').config(function($stateProvider) {
    $stateProvider.state('app.category', {
      url: '/category',
      views: {
        'menuContent': {
          templateUrl: 'app/views/category/category.html',
          controller: 'CategoryCtrl'
        }
      }
    });
  });

  'use strict';

  angular.module('starter').controller('CategoryCtrl', function($scope ) {

  });

}).call(this);
