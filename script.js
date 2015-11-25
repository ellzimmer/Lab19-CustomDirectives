angular
	.module('myMod', [])

	.controller('TestController', ['$scope', function($scope) {
  		$scope.posts = [{a: 1}, {a: 2}, {a: 3}];
	}]);

