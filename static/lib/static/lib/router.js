var myApp = angular.module('myApp', []);
myApp.factory('myUsersService', function($rootScope) {
	var usersService = {};
	usersService.emailid = '';
	usersService.user_token = '';
	usersService.prepForBroadcast = function(emailid_username,token) {
		this.emailid = emailid_username;
		this.user_token = token;
		alert(this.emailid);
		this.broadcastItem();
	};
	usersService.broadcastItem = function() {
		$rootScope.$broadcast('handleUserBroadcast');
	};
	return usersService;	
});
myApp.config(['$routeProvider',function($routeProvider) {
    $routeProvider.
        when('/login', {
           templateUrl: 'static/lib/templates/loginpage.html',
           controller: 'smartBuildingsCtrl'
        }).
        when('/dahboard/conditions', {

            templateUrl: 'static/lib/templates/conditions.html',
            controller: 'ConditionsCtrl'
        }).   
 	when('/dahboard/meter', {

            templateUrl: 'static/lib/templates/meter.html',
            controller: 'ConditionsCtrl'
        }).
	 otherwise({
            redirectTo: '/login'
        });
    }]);

/*var myApp = angular.module('myApp', []);
myApp.factory('myUsersService', function($rootScope) {
	var usersService = {};
	usersService.emailid = '';
	usersService.user_token = '';
	usersService.prepForBroadcast = function(emailid_username,token) {
		this.emailid = emailid_username;
		this.user_token = token;
		alert(this.emailid);
		this.broadcastItem();
	};
	usersService.broadcastItem = function() {
		$rootScope.$broadcast('handleUserBroadcast');
	};
	return usersService;	
});
myApp.config(['$routeProvider',function($routeProvider) {
    $routeProvider.
        when('/login', {
           templateUrl: 'static/lib/templates/loginpage.html',
           controller: 'smartBuildingsCtrl'
        }).
        when('/dahboard/conditions', {

            templateUrl: 'static/lib/templates/conditions.html',
            controller: 'ConditionsCtrl'
        }).   
	 otherwise({
            redirectTo: '/login'
        });
    }]);
*/
