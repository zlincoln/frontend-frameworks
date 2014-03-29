controllers.controller('HomeCtrl', ['$scope', 'EmployeeService', function($scope, EmployeeService){

	var instance = this;
	$scope.employees = EmployeeService.getEmployees();

	this.clearFields = function(){
		$scope.name = '';
		$scope.streetAddress = '';
		$scope.city = '';
		$scope.state = '';
		$scope.zip = '';
	}

	$scope.addNewEmployee = function(){
		var employeeObj = {
			name: $scope.name,
			streetAddress: $scope.streetAddress,
			city: $scope.city,
			state: $scope.state,
			zip: $scope.zip
		};
		
		instance.clearFields();
		EmployeeService.addEmployee(employeeObj);
	}

	$scope.fireEmployee = function(index){
		EmployeeService.removeEmployee(index);
	}
}]);