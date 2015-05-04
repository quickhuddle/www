app.controller("page-event", function($state, $scope, $http, $rootScope, $stateParams, qh, $firebase, $timeout,$firebaseArray, $firebaseObject) {


	$scope.mainImg = ''; 
    $scope.event = $firebaseObject(qh.fb.child("event").child($stateParams.id));

    var unwatch = $scope.event.$watch(function() {  		
  		var a = $scope.event.a;
    	//$scope.mainImg = "img/activites/a"+a+"_2_quickie.png";
    	var a = 1;
    	$scope.mainImg = "img/themes/"+a+"/" + a+"_headline.png";

	});

	$scope.$on('$destroy', function () { 		
		unwatch();
	 });
});