'use strict';

angular.module('piApp', ['controllers'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });


angular.module('controllers', ['restangular']).config(function(RestangularProvider) {
    RestangularProvider.setBaseUrl("http://192.168.0.10:4567/control");
});