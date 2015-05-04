app.controller("page-signin", function($state, $scope, $http, $rootScope, $stateParams, qh, user, $firebase, $timeout) {

    $scope.mode = 0;
    $scope.status = 0; // 0=None 1=Signing In 2=Error 
    $scope.errorMsg = '';
    $scope.buttonText = "Sign In";
    $scope.email = "";
    $scope.password = "";

    $rootScope.tabsVisible = false;

    $scope.signIn = function() {

        var msg = "";

        if ($scope.password == "") msg = "Password is required";
        if ($scope.email == "") msg = "Email is required";

        if (msg == "") {

            $scope.status = 1;
            $scope.buttonText = "Signing In";

            user.signIn($scope.email, $scope.password)
                .done(function(value) {

                    // Redirect to Starting Page after Login
                    $state.go('main.dashboard');

                }).fail(function(error) {

                    $scope.errorMsg = error;
                    $scope.status = 2;
                    $scope.buttonText = "Sign In";
                    $scope.$apply();
                })
        } else {
            $scope.errorMsg = msg;
            $scope.status = 2;

        }
    }

});


