angular.module("heimildir").controller("HeaderController", function() {
  var vm = this;
  vm.headerContent = [{
    title: 'Log in',
    action: 'login'
  }, {
    title: 'Sign up',
    action: 'signup'
  }];

  vm.submitFeedback = function(action) {
    //good or bad...
    if (action) {
      //good

      //submit using $http or service

    } else {
      //bad

      //submit using $http or service
    }
  };
});
