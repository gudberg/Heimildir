angular.module("heimildir").directive("header", function() {
  return {
    restrict: 'A',
    templateUrl: 'js/templates/NavBar.html',
    scope: true,
    transclude : false,
    controller: 'HeaderController'
  };
});
