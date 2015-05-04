app.controller("page-join", function($state, $scope, $http, $rootScope, $stateParams, qh, user, $firebase, $timeout) {


    $scope.status = 0; // 0=None 1=Joining 2=Error Joining
    $scope.errorMsg = '';
    $scope.buttonText = "Join quickhuddle";

    $rootScope.tabsVisible = false;

    //$scope.email = "mike@quickhuddle.com";
    //$scope.firstName = "Mike";
    //$scope.lastName = "Abele";
    //$scope.password = "mazzmazz"

    $scope.join = function() { 

        $scope.status = 1;
        $scope.buttonText = "Joining";

        user.join({
            email: $scope.email,
            password: $scope.password,
            firstName: $scope.firstName,
            lastName: $scope.lastName
        }).done(function(value) {
            // User Created
            user.signIn($scope.email, $scope.password) 
                .done(function(value) {

                    // Redirect to Starting Page after Login
                    $state.go('main.home');

                })
                .fail(function(value) {

                    $scope.errorMsg = "User account created. Unable to sign in. Please try to sign in.";
                    $scope.status = 2;
                    $scope.buttonText = "Join quickhuddle";
                    $scope.$apply();

                })
        }).fail(function(error) {
            $scope.errorMsg = error;
            $scope.status = 2;
            $scope.buttonText = "Join quickhuddle";
            $scope.$apply();
        })
    }
});
