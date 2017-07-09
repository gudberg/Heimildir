angular.module('heimildir.controllers', [])
.controller('HomeController', function() {
  var vm = this;
})
.controller('CiteController', function() {
  var vm = this;
  vm.selectedSystem = "";
  vm.showCategories = false;
  vm.showSubCategories = false;

  const EMPTY_COLOR = 'btn btn-primary btn-simple btn-round';
  const FULL_COLOR = 'btn btn-primary btn-round';
  // Variables for switching colors
  vm.apaSystem = EMPTY_COLOR;
  vm.chicagoSystem = EMPTY_COLOR;

  //Says what system is selected
  vm.systemSelected = '';

  //Select system
  vm.selectSystem = function(system) {
    vm.systemSelcted = system;
    vm.showCategories = true;
    if(system == 'APA') {
      vm.apaSystem = FULL_COLOR;
      vm.chicagoSystem = EMPTY_COLOR;
    }
    else {
      vm.chicagoSystem = FULL_COLOR;
      vm.apaSystem = EMPTY_COLOR;
    }
  };

  vm.subCategories = [];

  // For Category color system
  vm.categoryColor = [false, false];

  // Setting Categories
  vm.categories = [
    {
      name: 'Bækur',
      action: function() {
        vm.resetCategoryColor('Bækur');
        vm.setBookCategory();
      },
      index: 0
    },
    {
      name: 'Myndbönd',
      action: function() {
        vm.resetCategoryColor('Myndbönd');
        vm.setVideoCategory();
      },
      index: 1
    }
  ];

    vm.resetCategoryColor = function(param) {
    for(i = 0; i < vm.categories.length; i++) {
      if(vm.categories[i].name != param) {
        vm.categoryColor[i] = false;
      }
      else {
        vm.categoryColor[i] = true;
      }
    }
    vm.showSubCategories = true;
  };

  // Function to set subCategories
  vm.setBookCategory = function() {
    vm.subCategories = [
      {
        name: 'Erlendur Höfundur',
        action: function() {
          console.log('Erlendur');
        }
      },
      {
        name: 'Íslenskur Höfundur',
        action: function() {
          console.log('Íslenskur');
        }
      },
    ];
  };

  vm.setVideoCategory = function() {
    vm.subCategories = [
      {
        name: 'Youtube myndbönd',
        action: function() {
          console.log('tubbarinn');
        }
      },
      {
        name: 'Myndbönd af erlendum síðum',
        action: function() {
          console.log('annað en tubbarinn');
        }
      }
    ];
  };

});
