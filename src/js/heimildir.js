var heimildir = angular.module('heimildir', ['ui.router']);

heimildir.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
    $stateProvider
      .state('home', {
        url: '/',
        views:{
          "HomeView": {
            templateUrl: "src/js/templates/Home.html",
            controller: 'HomeController',
          }}
      });
      $urlRouterProvider.otherwise('/');
}]);
