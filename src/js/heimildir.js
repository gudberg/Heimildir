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
      .state('test', {
        url:'/test',
        views: {
          'content@': {
            template: "js/templates/Home.html {{vm.test}}",
            controller: 'HomeController',
            controllerAs: 'vm'
          }
        }
      });
      $urlRouterProvider.otherwise('/');
}]);
