var myApp = angular.module("todo", ["firebase"]);
myApp.constant("firebase_url", "http://what-to-do.firebaseio.com");

function ToDoCtrl($scope, $firebase, firebase_url){
	var todosRef = new Firebase(firebase_url);

	//initialize todo list

	$scope.todos = $firebase(todosRef);
	// function to add to the list
	$scope.addTodo = function(){
		var timestamp = "hi";

		var todosRef = new Firebase(firebase_url + timestamp);

		$scope.todos.$add({
			id: timestamp,
			name: $scope.todoName,
			completed: false,
		});

		$scope.todoName = "";
	};
	//function to remove from the lists
	// $scope.removeTodo = function(start){
	// 	$scope.todos.splice(start, 1);
	// };
	// function to move an item down disabled for now
	// $scope.move = function(index, direction){
	// 	//if moving up, we want index = index -1

	// 	if(direction === "up"){
	// 		if(index === 0){
	// 			return;
	// 		}
	// 		index = index -1;
	// 	}
	// 	if(direction === "down"){
	// 		if(index === $scope.todos.length -1){
	// 		return;
	// 	}	
	// 	}
		

	// 	var todo = $scope.todos[index];
	// 	//takes todo (third parameter), and adds it at index+2 (first parameter); 2nd parameter just says we are not deleting anything, yet
	// 	$scope.todos.splice(index + 2, 0, todo);
	// 	$scope.todos.splice(index, 1);
		//start
		//a
		//b
		//c

		//middle step: copy todo at index and move it down two (index +2)
		//a
		//b
		//a
		//c

		//end
		//b
		//a
		//c
	};
