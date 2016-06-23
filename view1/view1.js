'use strict';

angular.module('myApp.view1', [])

.controller('View1Ctrl', ['$scope', '$http', function($scope, $http) {


	$scope.$watch('search', function() {
      fetch();
    });

    $scope.search = "Hook";

    function fetch(){
    	$http.jsonp("http://www.omdbapi.com/?t=" + $scope.search + "&tomatoes=true&plot=full")
      	.then(function(response){ $scope.details = response.data; });

      	$http.jsonp("http://www.omdbapi.com/?s=" + $scope.search)
      	.then(function(response){ $scope.related = response.data; });
    }
}]);