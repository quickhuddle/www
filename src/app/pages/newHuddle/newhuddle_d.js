app.controller("page-newhuddle", function($state, $scope, $http, $rootScope, $firebase, $timeout, $stateParams, huddle, user) {

    $scope.email = '';
    $scope.status = 0; // 0=None 1=Sent


     

    $rootScope.tabsVisible = false;

    console.log("INIT page-newhuddle");

    $scope.save = function() {

        var ID = huddle.add(user.key, {
            t: 10,
            a: $scope.activity,
            n: $scope.name
        })

    }

    $scope.a = 1;

  


    $scope.setA = function(a) {

        if ($scope.a == 1) {
            $scope.a = 2;

        } else if ($scope.a == 2) {
            $scope.a = 1;
        }


    }
});
