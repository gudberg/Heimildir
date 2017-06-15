angular.module('heimildir.controllers', [])
.controller('HomeController', function() {
  var vm = this;
  vm.test = "hello world";
  console.log(vm.test);
})
.controller('CiteController', function() {
  var vm = this;
  vm.test ="holaaa";
});
