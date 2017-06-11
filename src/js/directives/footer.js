angular.module("heimildir").directive("footer", function() {
  return {
    restrict: 'A',
    templateUrl: 'js/templates/Footer.html',
    scope: true,
    transclude : false,
    controller: 'FooterController'
  };
});
