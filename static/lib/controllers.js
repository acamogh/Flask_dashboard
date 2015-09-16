/*myApp.controller('smartBuildingsCtrl',function($scope,$http,$location,myUsersService){

});*/
myApp.controller('smartBuildingsCtrl',function($scope){

		
});

myApp.controller('ConditionsCtrl',function($scope){

});




  //  myApp.controller('SetpointCtrl', ['$scope', '$http', 'myData', function($scope, $http, myData) {
      

       myApp.directive('clickOnce', function($timeout) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var replacementText = attrs.clickOnce;

            element.bind('click', function() {
                $timeout(function() {
                    if (replacementText) {
                        element.html(replacementText);
                    }
                    element.attr('disabled', true);
                }, 0);
            });
        }
    };
});
    myApp.controller('SetpointCtrl', function($http,$scope) {
      show = [];
      var test = []
      var bosch = [{
        building: "viveks",
        floor: "floor 1",
        wing: ["left", "right"],
        ac: ["ac1", "ac2"]
      }, {
        floor: "floor 2",
        wing: ["north", "south"],
        ac: ["ac3", "ac4"]
      }];
      $scope.bosch = bosch;


      $scope.name = 'World';
      $scope.testModel = {
        Monday: false,
        Tuesday: false,
        Wednesday: false,
        Thrusday: false,
        Friday: false,
        Saturday: false,
        Sunday: false
      };
      $scope.ddcheck = function() {
        show.push({
          build: $scope.building_id["building"],
          floor: $scope.floor_id["floor"],
          wing: $scope.sel_wing,
          ac: $scope.ac_num,
          day: $scope.testModel
        });


      }
      $scope.showme = function() {

      }


      // -----------------------------------------------------------------------------------------

      $scope.rows = [];
      $scope.table = []
      $scope.final1_table = []

      $scope.addDynamically = function() {
        $scope.rows.push({
          tfPlaceholder: "Time From",
          ttPlaceholder: "Time to",
          spfPlaceholder: "Time to",
          sptPlaceholder: "Time to",
          sp_from: "",
          sp_to: "",
          time_from: "",
          time_to: ""
        });


        $scope.submit = function() {

          for (var i in $scope.rows) {
            $scope.table.push({

              time_from: $scope.rows[i].time_from,
              time_to: $scope.rows[i].time_to,
              sp_from: $scope.rows[i].sp_from,
              sp_to: $scope.rows[i].sp_to,

            })           
          }
          $scope.final1_table.push({
              config_data: show,
              set_points: $scope.table
              
            })
            console.log(JSON.stringify($scope.final1_table));


            var res = $http.post('/table_data', JSON.stringify($scope.final1_table));
    res.success(function(data, status, headers, config) {
      $scope.message = data;
    });
    res.error(function(data, status, headers, config) {
      alert( "failure message: " + JSON.stringify({data: data}));
    })
        }
      };
      $scope.deleteRows = function(index) {
        $scope.rows.splice(index, 1);
      };
      $scope.check = function() {
        // console.log(JSON.stringify($scope.table));
      }

    });