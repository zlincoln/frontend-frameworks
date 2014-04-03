var app = angular.module('employeeApp', ['ngRoute', 'app.controllers', 'app.services']);

var controllers = angular.module('app.controllers', []);
var services = angular.module('app.services', []);
// var directives = angular.module('app.directives', []);

app.run(['$rootScope', '$route', function($rootScope, $route){
	$rootScope.pageTitle = 'Home | Employee App';

	$rootScope.$on('$routeChangeSuccess', function(){
		$rootScope.pageTitle = $route.current.pageTitle + ' | Employee App';
	});
}]);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: 'partials/layout/home.html',
		controller: 'HomeCtrl',
		pageTitle: 'Home'
	})
	.when('/employee/:id', {
		templateUrl: 'partials/layout/detail.html',
		controller: 'DetailCtrl',
		pageTitle: 'Employee'
	})
	.when('/new', {
		templateUrl: 'partials/layout/new.html',
		controller: 'NewCtrl',
		pageTitle: 'New Employee'
	})
	.when('/error', {
		templateUrl: 'partials/layout/error.html',
		controller: 'ErrorCtrl',
		pageTitle: 'Oh No!'
	})
	.otherwise({
		redirectTo: '/error'
	});
}]);