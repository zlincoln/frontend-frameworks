services.service('EmployeeService', [function(){

	this.employees = [
		{
			id: 1,
			name: 'John Smith',
			role: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			streetAddress: '123 Private Ln.',
			city: 'Nowhere',
			state: 'VT',
			zip: '05408'
		},
		{
			id: 2,
			name: 'Dan Mooring',
			role: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			streetAddress: '987 Perfect Pl.',
			city: 'Somewhere',
			state: 'OK',
			zip: '08945'
		},
		{
			id: 3,
			name: 'Suzy Queue',
			role: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			streetAddress: '31 Main St.',
			city: 'Alstead',
			state: 'NH',
			zip: '03602'
		}
	];

	this.isInit = false;

	this.getEmployees = function(){
		var str = localStorage.getItem('employeeArray');
		this.employees = JSON.parse(str) || this.employees;
		this.isInit = true;
		return this.employees;
	}

	this.editEmployee = function(employeeObj){
		var location = this.lookupById(employeeObj.id).serviceLocation;

		this.employees[location].name = employeeObj.name;
		this.employees[location].role = employeeObj.role;
		this.employees[location].streetAddress = employeeObj.streetAddress;
		this.employees[location].city = employeeObj.city;
		this.employees[location].state = employeeObj.state;
		this.employees[location].zip = employeeObj.zip;

		this.saveEmployees();
	}

	this.addEmployee = function(employeeObj){
		this.employees.unshift(employeeObj);
		this.saveEmployees();
	}

	this.removeEmployee = function(employeeId){
		var index = this.lookupById(employeeId).serviceLocation;
		this.employees.splice(index, 1);
		this.saveEmployees();
	}

	this.saveEmployees = function(){
		var employeeArrayString = JSON.stringify(this.employees);
		localStorage.setItem('employeeArray', employeeArrayString);
	}

	this.lookupById = function(employeeId){
		var found = null;
		if(!this.isInit){
			this.getEmployees();
		}
		angular.forEach(this.employees, function(item, index){

			if(item.id == employeeId){
				found = {
					employeeObject: item,
					serviceLocation: index
				}
			}

		});
		return found;
	}

	this.makeUniqueId = function(){
		var newId = this.employees.length + 1;
		return newId;
	}

}]);