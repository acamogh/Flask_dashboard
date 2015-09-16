/*myApp.controller('smartBuildingsCtrl',function($scope,$http,$location,myUsersService){

});*/
myApp.controller('smartBuildingsCtrl',function($scope,$rootScope,$http,$location){
	$scope.class = "hide"
	$scope.smartBuildingsLoginForm=function(){
		var username = $("#username").val();
		var payload = {"username":username,"password":$("#password").val()};
		$http.post("/user_authentication",data = JSON.stringify(payload)).
		success(function(data){
			api_token(username,function(user,token){
			    $rootScope.emailid = username;
			    $rootScope.user_token = token;
			    $rootScope.configObj = new configMapping();
			    sensor_data();
			});
		}).
		error(function(data){
			 if ($scope.class === "hide")
				$scope.class = "display";
		});
	};
	function api_token(username,callback){
        	$http.defaults.headers.common.Authorization = 'Basic ' + btoa($("#username").val()+ ':' + $("#password").val());
                $http.get('/api/token').
                success(function(data){
                	//redirect to home page , in our case right now it is - set points  page
			callback(username,data.token);
			$http.defaults.headers.common.Authorization = 'Basic ' +btoa($rootScope.user_token+ ':' + "");
	                $http.get('/config_data').
        	        success(function(data){
                	        $rootScope.configObj.setConfigRawData(data);
                        	console.log("data cofig is");
                        	console.log($rootScope.configObj.rawdata);
                	}).
                	error(function(data){
                        	window.location = "http://cloud.urjagreen.com:8080/";
                        	location.relaod(true);
                       		//  $location.path("/login");
                	});

                        $location.path("/dahboard/conditions");
                }).
                error(function(data){
                         $location.path("/login");
                });
		return;
	};	
	function sensor_data(){
		/*$http.get('/api/sensor_data').
		success(function(data){
		    console.log("data of sensor");
		    console.log(data);
		}).
		error(function(data){
			$location.path("/login");
		});*/
	};
		
});

myApp.controller('ConditionsCtrl',function($scope,$http,$location,$rootScope,myUsersService){
        $scope.init = function(){
	  	/*$http.defaults.headers.common.Authorization = 'Basic ' +btoa($rootScope.user_token+ ':' + "");      
		$http.get('/config_data').
		success(function(data){
			$rootScope.configObj.setConfigRawData(data);
			console.log("data cofig is");
			console.log($rootScope.configObj.rawdata);	
		}).
		error(function(data){
			window.location = "http://cloud.urjagreen.com:8080/";
			location.relaod(true);
                       //  $location.path("/login");
        	});*/
	};
	$scope.getBuilding = function(){
		var data =$rootScope.configObj.rawdata.data.data;
		data = data[0];
		data = data["buildingName"];
		$scope.buildingname = [];
		$scope.buildingname.push(data);
		return $scope.buildingname;
	};
	$scope.setConfigBuilding = function(building){
		$scope.floor = [];
		$scope.wing = [];
		$rootScope.configObj.building = building;
	};
	$scope.setConfigFunc = function(func){
		$scope.floor = [];
		$scope.wing = [];
		$scope.func = func;
		if(func == ""){
		}
		else if(func == "group"){
		}
		else if(func == "CO2"){
		}
		else{
		}
		
	};
	$scope.getFloor = function(){
		$scope.floor = [];
                var counter = 0;
                $.each($rootScope.configObj.rawdata.data.data,function(index,ele){
                        if((ele["buildingName"] == $rootScope.configObj.building )){
                                if($scope.floor.length == 0)
                                        $scope.floor.push(ele["floor"]);
                                else{
					counter = 0;
                                        for(var i=0;i<$scope.floor.length;i++){
                                                if(ele["floor"] == $scope.floor[i])
                                                        counter++;
                                        }
					if(counter == 0)
                                        $scope.floor.push(ele["floor"]);
                                }
                        }

                });
		return $scope.floor;
	};

	$scope.setConfigFloor = function(floor){
		$scope.wing = [];
                $rootScope.configObj.floor = floor;
	};
	$scope.getWing = function(){
		$scope.wing = [];
		var counter = 0;
		if($scope.func == "group"){
			$scope.wing.push("Left AHU");
			$scope.wing.push("Right AHU");
		}
		else{
                	$.each($rootScope.configObj.rawdata.data.data,function(index,ele){
				if(typeof $scope.func != "undefined"){
                       			var first_alp_func = $scope.func.toLowerCase().slice(0,1);
                       			var first_alp_ele = ele["func"].toLowerCase().slice(0,1);
	               			if(ele["buildingName"] == $rootScope.configObj.building && first_alp_func == first_alp_ele &&  ele["floor"] == $rootScope.configObj.floor){
                                		if($scope.wing.length == 0)
                                        		$scope.wing.push(ele["wing"]);
                                		else{
                                        		counter = 0;
                                        		for(var i=0;i<$scope.wing.length;i++){
                                                		if(ele["wing"] == $scope.wing[i])
                                                        	counter++;
                                        		}
                                        		if(counter == 0)
                                        		$scope.wing.push(ele["wing"]);
                                		}
                        		}
				}
                	});
		}
		
                return $scope.wing;

	};
	$scope.setConfigWing = function(wing){
		$rootScope.configObj.wing = wing;
		$.each($rootScope.configObj.rawdata.data.data,function(index,ele){
			if(ele["buildingName"] == $rootScope.configObj.building && ele["floor"] == $rootScope.configObj.floor && ele["wing"] == wing){
				$rootScope.configObj.func = ele["func"];
				$rootScope.configObj.sensorid = ele["data_id"];
				console.log($rootScope.configObj);
			}
			//alert("read the comment below");
			//for group we have to hard code the func,sensorid values as we did in tnhhe above if block
			if(wing == "Left AHU" || wing == "Right AHU"){
				$rootScope.configObj.func = "T";
				$rootScope.configObj.sensorid = "1008,100d,100b,100a,1007";
			}
		});
	}
	$scope.getConfigInformation = function(){
		return ($rootScope.configObj);
	}
	$scope.getConfigRawData  = function(){
		return $rootScope.configObj.getConfigRawData();
	}
});
myApp.controller('MeterCtrl',function($scope,$http,$location,myUsersService){

});

myApp.controller('HeaderCtrl',function($scope,$rootScope,$http,$location,myUsersService){
});

