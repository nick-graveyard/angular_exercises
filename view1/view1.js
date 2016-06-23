'use strict';

angular.module('myApp.view1', [])

.controller('View1Ctrl', ['$scope', '$http', function($scope, $http) {


	$scope.$watch('search', function() {
      fetch();
    });

    $scope.search = "Hook";

    function fetch(){
    	$http.jsonp("https://www.omdbapi.com/?t=" + $scope.search + "&tomatoes=true&plot=full&callback=JSON_CALLBACK")
      	.success(function(response){ $scope.details = response });

      	$http.jsonp("https://www.omdbapi.com/?s=" + $scope.search + "&callback=JSON_CALLBACK")
      	.then(function(response){ $scope.related = response; });
    }
}]);