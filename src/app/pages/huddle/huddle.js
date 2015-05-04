app.controller("page-huddle", function($state, $scope, $http, $rootScope, $stateParams, user, qh, message,card, $firebaseArray, $firebaseObject, $timeout) {

    $scope.huddle = null;
    $scope.events = null;
    $scope.messages = null;
    $scope.cards = null;


    // $scope.cards = [ {
    //     id: 333,
    //     t: 2,
    //     p: function(){
    //         return qh.system.cards['2']
    //     }
    // }];

    $scope.card = {n:'WOW'}

    

    var syncHuddle = $firebaseObject(qh.fb.child("huddle").child($stateParams.id));
    syncHuddle.$bindTo($scope, "huddle").then(function() {

        $scope.cards = $firebaseArray(qh.fb.child("huddle-card").child($scope.huddle.$id));
        $scope.events = $firebaseArray(qh.fb.child("huddle-event").child($scope.huddle.$id));
        $scope.messages = $firebaseArray(qh.fb.child("huddle-message").child($scope.huddle.$id));

    })

    $scope.CHECK = function(){

        alert(qh.system.cards['1'].n)

    }

    $scope.addCard = function(type) {

        

        card.add(user.key, $scope.huddle.$id, {
            t: type
        });

        
    }

    $scope.saveMessage = function() {

        message.add(user.key, $scope.huddle.$id, {
            t: 0,
            s: "Hello World",
            c: $scope.message
        });


    }
});
