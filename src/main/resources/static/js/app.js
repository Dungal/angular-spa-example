var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
	$routeProvider
	
	.when('/', {
	    templateUrl : 'pages/home.html',
	    controller  : 'HomeController'
	  })

	  .when('/new-employee', {
	    templateUrl : 'pages/new-employee.html',
	    controller  : 'NewEmployeeController'
	  })

	  .otherwise({redirectTo: '/'});
	$locationProvider.hashPrefix('');
});

app.controller('HomeController', function($scope) {
	  $scope.message = 'Hello from HomeController';
});

	app.controller('NewEmployeeController', function($scope) {
	  $scope.message = 'Hello from NewEmployeeController';
});