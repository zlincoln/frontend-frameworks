controllers.controller('HomeCtrl', ['$scope', function($scope){

	$scope.outstanding = [
		{name: 'Mustard'},
		{name: 'Salad'},
		{name: 'Tomatoes'}
	];

	$scope.basketed = [
		{name: 'Grape Jelly'},
		{name: 'Toothpaste'},
		{name: 'Granola'}
	];

	$scope.addNewItem = function(){
		if($scope.newItem != ''){
			var itemObj = {
				name: $scope.newItem
			}
			$scope.addToOutstanding(itemObj);
			$scope.newItem = '';
		}
	}

	$scope.removeFromOutstanding = function(index){
		$scope.outstanding.splice(index, 1);
	}

	$scope.removeFromBasketed = function(index){
		$scope.basketed.splice(index, 1);
	}

	$scope.addToBasketed = function(item, index){
		$scope.removeFromOutstanding(index);
		$scope.basketed.unshift(item);
	}

	$scope.addToOutstanding = function(item, index){
		if(typeof index != 'undefined'){
			$scope.removeFromBasketed(index);
		}
		$scope.outstanding.push(item);
	}
}]);