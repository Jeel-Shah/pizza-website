'use strict';

angular.module('pizzaWebsiteApp')
  .controller('ContactCtrl', function($scope){
    $scope.map = {
      center: {
        latitude: 43.47133,
        longitude: -80.54168
      },
      zoom: 15,
      options: {
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: false
      }
    };

    $scope.marker = {
      id: 0,
      coords: {
        latitude: 43.47133,
        longitude: -80.54168
      }
    };

});
