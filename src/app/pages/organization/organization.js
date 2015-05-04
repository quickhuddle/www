app.controller("page-organization", function($state, $scope, $http, $rootScope, $firebase, $timeout, $stateParams, huddle, user, organization) {


    $scope.org = null;

    if ($stateParams.id) {

        // Reference Organization

        alert($stateParams.id);

        var syncOrg = $firebaseObject(qh.fb.child("organization").child($stateParams.id));

        alert(2);
        syncHuddle.$bindTo($scope, "org").then(function() {

            // $scope.cards = $firebaseArray(qh.fb.child("huddle-card").child($scope.huddle.$id));
            // $scope.events = $firebaseArray(qh.fb.child("huddle-event").child($scope.huddle.$id));
            // $scope.messages = $firebaseArray(qh.fb.child("huddle-message").child($scope.huddle.$id));

        })
    }


    $scope.save = function() {

        var ID = organization.add(user.key, {
            t: 1,
            a: 0,
            n: $scope.name
        })


        $state.go('main.organization', {id: ID})

    }
});
