(function() {
  'use strict';
  angular.module('starter').config(function($stateProvider) {
    $stateProvider.state('app.sub-category', {
      url: '/sub-category',
      views: {
        'menuContent': {
          templateUrl: 'app/views/sub-category/sub-category.html',
          controller: 'SubCategoryCtrl'
        }
      }
    });
  });

  'use strict';

  angular.module('starter').controller('SubCategoryCtrl', function($scope ) {

  });

}).call(this);
