angular.module('heimildir.controllers', [])
.controller('HomeController', function() {
  var vm = this;
  vm.test = "hello world";
  console.log(vm.test);
})
.controller('CiteController', function() {
  var vm = this;
  vm.systems = ['APA', 'Chicago'];

  vm.systemSelected = function(param) {
    if(system == 'APA') {
      console.log('cool');
    }
    else {
      console.log('not cool');
    }
  };
});
