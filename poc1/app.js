var app = angular.module('noteApp', ['cfp.hotkeys','ngAnimate', 'ngSanitize', 'ui.bootstrap']);
app.controller('testControl', function($scope,hotkeys) {
$scope.value = false;
console.log("controller");
// You can pass it an object.  This hotkey will not be unbound unless manually removed
// using the hotkeys.del() method
	
	/* hotkeys.bindTo($scope).add({
  combo: 'alt+1',
  description: 'This one goes to 11',
  callback: function(res) {
 console.log("first");
 angular.element(res.target).find('input')[0].focus();
  }
});
hotkeys.bindTo($scope).add({
  combo: 'alt+2',
  description: 'This one goes to 11',
  callback: function(res) {
 console.log("second");
 angular.element(res.target).find('input')[1].focus();
  }
});
hotkeys.add({
  combo: 'alt+3',
  description: 'Description goes here',
  allowIn: ['INPUT', 'SELECT', 'TEXTAREA'],
  callback: function(event, hotkey) {
    event.preventDefault();
  }
});
	
	var x='alt+4';
var shortkuts = {
  combo: x,
  description: 'This one goes to 11',
  callback: function(res) {
 console.log("second");
 angular.element(res.target).find('input')[3].focus();
  }} */
  
  
 
              
console.log(hotkeys);
// when you bind it to the controller's scope, it wilal automatically unbind
// the hotkey when the scope is destroyed (due to ng-if or something that changes the DOM)
  // you can chain these methods for ease of use:
//  .add ({...});
});
app.directive("notepad", function() {  return {
      restrict: "A",
      compile: function(scope, ele, attr) {
          return {
              post: function postLink(scope, ele, attr) {
                console.log("sdf");
                ele.bind('click', function(scope, elem, attrs) {
                  scope.srcElement.parentElement.getElementsByTagName('input')[2].focus();
                  console.log("dagasdfgs");
                });
              }
          }
      }
  }});
  app.directive("shortkey", function(hotkeys) {
  return {
        restrict: "A",
        priority:1000,
         link: function ($scope, element, attrs, ngModel,$rootScope) {
           console.log("asdf");
           var altDown = false;
for(var i=1;i<=4;i++){
	  var x='alt+'+i;
	  var shortkuts = {
  combo: x,
  description: 'This one goes to 11',
  callback: function(event,hotkey) {
 console.log("second");
  i=parseInt(event.key)-1;
 angular.element(event.target).find('input')[i].focus();
  }}
    hotkeys.bindTo($scope).add(shortkuts);
  }
       }
    }});
  app.directive("notepad1", function() {
  return {
      restrict: "A",
	  template:'<div>First name:<br>{{firstname}}<br>Last name:<br>{{lastname}}<br><br>CLASS:<br>{{class}}<br><br>AGE:<br>{{age}}<br><br></div>',
   link: function ($scope, ele, attrs, ngModel,$rootScope) {
   console.log("asdf");
           /*     var destroyScope = function(){
                       //$scope = null;
                       ele.off("blur");
                       ele.empty();
                       ele.remove();
                }
            	  $scope.$on("$destroy",destroyScope);
               var x = true;
		*/
        //         ele.on('click', function () {
				// console.log("jkhji")
				// });
      
ele.bind('click',function(elem,a){
  alert("sdfgsdfg");
  
  
})
				}
  }
  });
  app.directive('mydatepicker', Directive);
   function Directive($filter) {
        return {
            require: 'ngModel',
            link: function (scope, element, attr, ngModel) {
                // element.addClass('datepicker');
                // element.pickadate({ format: 'dd/mm/yyyy', editable: true });

                // convert utc date to local for display
				console.log(ngModel);
                ngModel.$formatters.push(function (utcDate) {
                    if (!utcDate)
                        return;

                    return $filter('utcToLocal')(utcDate, 'dd/MM/yyyy');
                });

                // convert local date to utc for storage
                ngModel.$parsers.push(function (localDate) {
                    if (!localDate)
                        return;

                    return moment(localDate, 'DD/MM/YYYY').utc().toISOString();
                });
            }
        };
    }
	
	app.controller('DatepickerPopupDemoCtrl', function ($scope) {
  

  // $scope.inlineOptions = {
    // customClass: getDayClass,
    // minDate: new Date(),
    // showWeeks: true
  // };

  $scope.dateOptions = {   
    formatYear: 'yy',
    startingDay: 1
  };

  //Disable weekend selection
  // function disabled(data) {
    // var date = data.date,
      // mode = data.mode;
    // return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
  // }

  // $scope.toggleMin = function() {
    // $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
    // $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
  // };

  // $scope.toggleMin();

  // $scope.open1 = function() {
    // $scope.popup1.opened = true;
  // };

  // $scope.open2 = function() {
    // $scope.popup2.opened = true;
  // };

  $scope.setDate = function(year, month, day) {
    $scope.dt = new Date(year, month, day);
  };

  // $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate','ddMMM','MMM'];
  // $scope.format = $scope.formats[0];
  // $scope.altInputFormats = ['M!/d!/yyyy'];

  // $scope.popup1 = {
    // opened: false
  // };

  // $scope.popup2 = {
    // opened: false
  // };

  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  var afterTomorrow = new Date();
  afterTomorrow.setDate(tomorrow.getDate() + 1);
  $scope.events = [
    {
      date: tomorrow,
      status: 'full'
    },
    {
      date: afterTomorrow,
      status: 'partially'
    }
  ];

  function getDayClass(data) {
    var date = data.date,
      mode = data.mode;
    if (mode === 'day') {
      var dayToCheck = new Date(date).setHours(0,0,0,0);

      for (var i = 0; i < $scope.events.length; i++) {
        var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

        if (dayToCheck === currentDay) {
          return $scope.events[i].status;
        }
      }
    }

    return '';
  }
}).config(function (datepickerConfig) {
  datepickerConfig.startingDay = 1;
  datepickerConfig.showWeeks = false;
})

app.directive('cap', function(){
    return {
        require: 'ngModel',
		priority:1000,
        link: function(scope, elem, attrs, ngModel){
            ngModel.$formatters.push(function(value){
                //formats the value for display when ng-model is changed
				if(value){					
					return value.toUpperCase(); 
				}
                
            });
            ngModel.$parsers.push(function(value){
                //formats the value for ng-model when input value is changed
               if(value){					
					return value.toUpperCase(); 
				}
            });
        }
    };
});