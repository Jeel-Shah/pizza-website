'use strict';

angular.module('pizzaWebsiteApp')
  .controller('ContactCtrl', function($scope){
    $scope.map = {
      center: {
        latitude: 45,
        longitude: -73
      },
      zoom: 8
    };
});
