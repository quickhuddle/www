app.controller("card-chat", function($state, $scope, $http, $rootScope, $firebase, $timeout, $stateParams, huddle, user,message) {

    $scope.huddleId = '';

    $scope.saveMsg = function() {

 

        message.add(user.key, $scope.huddle.$id, {
            t: 0,
            s: "",
            m: $scope.message
        });

        $scope.message = "";


    }

});
