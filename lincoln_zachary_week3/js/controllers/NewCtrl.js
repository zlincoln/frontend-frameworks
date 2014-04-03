controllers.controller('NewCtrl', ['$scope', '$location', 'EmployeeService', function($scope, $location, EmployeeService){

	$scope.addNewEmployee = function(){

		var employeeObj = {
			id: EmployeeService.makeUniqueId(),
			name: $scope.name,
			role: $scope.role,
			streetAddress: $scope.streetAddress,
			city: $scope.city,
			state: $scope.state,
			zip: $scope.zip
		};

		EmployeeService.addEmployee(employeeObj);
		$location.path('employee/'+employeeObj.id);
	}

}]);