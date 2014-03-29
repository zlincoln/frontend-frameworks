services.service('EmployeeService', [function(){
	this.employees = [
		{
			name: 'John Smith',
			streetAddress: '123 Private Ln.',
			city: 'Nowhere',
			state: 'VT',
			zip: '05408'
		},
		{
			name: 'Dan Mooring',
			streetAddress: '987 Perfect Pl.',
			city: 'Somewhere',
			state: 'OK',
			zip: '08945'
		},
		{
			name: 'Suzy Queue',
			streetAddress: '31 Main St.',
			city: 'Alstead',
			state: 'NH',
			zip: '03602'
		}
	];

	this.getEmployees = function(){
		var str = localStorage.getItem('employeeArray');
		this.employees = JSON.parse(str) || this.employees;
		return this.employees;
	}

	this.addEmployee = function(employeeObj){
		this.employees.unshift(employeeObj);
		this.saveEmployees();
	}

	this.removeEmployee = function(index){
		this.employees.splice(index, 1);
		this.saveEmployees();
	}

	this.saveEmployees = function(){
		var employeeArrayString = JSON.stringify(this.employees);
		localStorage.setItem('employeeArray', employeeArrayString);
	}

}]);