controllers.controller('HomeCtrl', ['$scope', 'EmployeeService', function($scope, EmployeeService){

	$scope.employees = EmployeeService.getEmployees();

}]);