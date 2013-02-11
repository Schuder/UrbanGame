angular.module('myApp',[]);

function Ctrl0($scope) {

	$scope.changeSize = function() {
		console.log('Hi!');
		angular.element($scope).addClass('clicked');
		
	}

}