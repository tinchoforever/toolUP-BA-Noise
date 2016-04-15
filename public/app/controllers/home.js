'use strict';

/* Controllers */
angular.module('ssApp.controllers')
  .controller('homeController', function($scope, $routeParams, $location, $route) {
    $scope.cities = [
        {'class': 'ny', 'name': 'Stark', 'endpoint' :'nyc'},
        {'class': 'au', 'name': 'Tyrell', 'endpoint' :'atx' },
        {'class': 'la', 'name': 'Targaryien', 'endpoint' :'la'},
        {'class': 'ba', 'name': 'Lannister', 'endpoint' :'ba'},
        {'class': 'sy', 'name': 'Baratheon', 'endpoint' :'syd' }
      ];
 });
