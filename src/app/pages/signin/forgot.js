app.controller("page-forgot", function($state, $scope, $http, $rootScope, $stateParams, qh, user, $firebase, $timeout) {

    $scope.email = '';
    $scope.status = 0; // 0=None 1=Sent

    $rootScope.tabsVisible = false;

    $scope.send = function() { 



        if ($scope.email != "") {

            

            qh.fb.resetPassword({
                email:$scope.email
            }, function(error) {
                $scope.status = 1;
                $scope.refresh();
                // Always say success.
                
            });
        } else {

        }
    }
});
