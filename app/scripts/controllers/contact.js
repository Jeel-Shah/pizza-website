'use strict';

angular.module('pizzaWebsiteApp')
  .controller('ContactCtrl', function($scope){
    $scope.map = {
      center: {
        latitude: 45,
        longitude: -73
      },
      zoom: 8,
      options: {
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: false
      }
    };
});
