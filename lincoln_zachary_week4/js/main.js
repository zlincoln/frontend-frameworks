function Item(name){
	var self = this;

	self.name = ko.observable(name);
}

function ListViewModel(){
	var self = this;

	self.outstandingItems = ko.observableArray([
		new Item('Mustard'),
		new Item('Salad'),
		new Item('Tomatoes')
	]);

	self.basketedItems = ko.observableArray([
		new Item('Grape Jelly'),
		new Item('Toothpaste'),
		new Item('Granola')
	]);

	self.newItem = ko.observable('');

	self.addNewItem = function(){
		self.outstandingItems.push(new Item(self.newItem()));
		self.newItem('');
	}

	self.removeFromOutstanding = function(object){
		self.outstandingItems.remove(object);
	}

	self.removeFromBasketed = function(object){
		self.basketedItems.remove(object);
	}

	self.addToOutstanding = function(object){
		self.outstandingItems.push(object);
		self.basketedItems.remove(object);
	}

	self.addToBasketed = function(object){
		self.basketedItems.push(object);
		self.outstandingItems.remove(object);
	}
}

ko.applyBindings(new ListViewModel());