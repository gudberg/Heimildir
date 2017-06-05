angular.module('heimildir', ['ui.router'])
.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
    $stateProvider
      .state('home', {
        url:'/',
        views: {
          'content@': {
            templateUrl: "js/templates/Home.html",
            controller: 'HomeController'
          }
        }
      })
      .state('test', {
        url:'/',
        views: {
          'content@': {
            template: "js/templates/Home.html",
            controller: 'HomeController'
          }
        }
      });
      $urlRouterProvider.otherwise('/');

}])

.controller('HomeController', function($scope) {
  $scope.test = "hello world";
});
