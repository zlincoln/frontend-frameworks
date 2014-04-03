controllers.controller('DetailCtrl', ['$scope', '$routeParams', '$rootScope', '$location', 'EmployeeService', function($scope, $routeParams, $rootScope, $location, EmployeeService){
	
	$scope.employee = EmployeeService.lookupById($routeParams.id).employeeObject;
	
	if($scope.employee != null){
		$rootScope.pageTitle = $scope.employee.name + " | Employee App";
	}


	$scope.saveEmployee = function(){
		var employeeObj = {
			id: $scope.employee.id,
			name: $scope.employee.name,
			role: $scope.employee.role,
			streetAddress: $scope.employee.streetAddress,
			city: $scope.employee.city,
			state: $scope.employee.state,
			zip: $scope.employee.zip
		};

		EmployeeService.editEmployee(employeeObj);
		$location.path('/');
	}

	$scope.fireEmployee = function(){
		EmployeeService.removeEmployee($scope.employee.id);
		$location.path('/');
	}

}]);