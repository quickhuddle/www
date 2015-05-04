app.controller("page-scale", function($state, $scope, $http, $rootScope, $stateParams, qh, user, $firebase, $timeout) {


    $scope.cal = function() {


        $scope.scale = [];

        var StartWeight = 255;
        var EndWeight = 209;
        var Increase = 1;

        var CurrentWeight = 255;
        var CurrentHeight = 72;
        var CurrentAge = 47;
        var CurrentExercice = 1.2;

        var CurrentCaloires = $scope.getCalories(CurrentWeight, CurrentHeight, CurrentAge,CurrentExercice);

        for (i = StartWeight; i >= 210; i=i-Increase) {

        	var c = $scope.getCalories(i, CurrentHeight, CurrentAge,CurrentExercice);

            $scope.scale.push({
                w: i,
                c: c,
                a: c - CurrentCaloires,
                p: CurrentWeight - i,
                t: ((CurrentWeight - i) * 3500),
                d: Math.floor(((CurrentWeight - i) * 3500) / (c - CurrentCaloires) * -1),
                j: Math.floor(((CurrentWeight - i) * 3500) / 756)
            });
        }



    }


    $scope.getCalories = function(weight, height, age,exercice) {

    	var a = (10 * (weight * .453592) + (6.25 * (height * 2.54)) - (5 * age) + 5)

    	a=a * exercice;

        return Math.ceil(a/2)*2; 

    }

    $scope.cal();

});
