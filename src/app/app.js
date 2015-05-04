
var app = angular.module('qh', ['ui.router', 'firebase', 'ngHandsontable','ngAnimate'])
 //var app = angular.module('qh', ['ionic', 'firebase'])


 

app.run(function($rootScope, $state) {

});


app.controller("appController", function($state, $scope, $http, $rootScope, $stateParams, $timeout, user, qh) {

    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;

    $rootScope.qh = qh;
    $rootScope.user = user;    

    qh.$scope = $scope;

    $scope.start = function() {
        // And here we go...
        user.startup();
        // alert('start')   
    }

    $scope.refresh = function() { 

    }

    // Start it up
    $scope.start();

});
