var myApp = angular.module('myApp', []);

myApp.config(['$routeProvider',function($routeProvider) {
    $routeProvider.

        when('/main', {

            templateUrl: 'static/lib/templates/conditions.html',
            controller: 'ConditionsCtrl'
        }).

        when('/setpoints', {

            templateUrl: 'static/lib/templates/setpoints.html',
            controller: 'SetpointCtrl'
        }).   
 	
	 otherwise({
            redirectTo: '/main'
        });
    }]);

alert('router')