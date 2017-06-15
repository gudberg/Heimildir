var vm = this;
angular.module('heimildir', ['ui.router', 'heimildir.controllers'])
.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
    $stateProvider
      .state('home', {
        url:'/',
        views: {
          'content@': {
            templateUrl: "js/templates/Home.html",
            controller: 'HomeController',
            controllerAs: 'vm'
          }
        }
      })
      .state('cite', {
        url:'/cite',
        views: {
          'content@': {
            templateUrl: "js/templates/cite.html",
            controller: 'CiteController',
            controllerAs: 'vm'
          }
        }
      });
      $urlRouterProvider.otherwise('/');
}]);
