app.controller("page-main", function($state, $scope, $http, $rootScope, $stateParams, qh, $firebase, $timeout) {

    $rootScope.tabsVisible = true;

    $scope.tabs = [{
        t: 1,
        p: 123,
        l: 'HOME',
        u: '/home/home.hmtml',
        s:true
    }, {
        t: 1,
        p: 123,
        l: 'ABOUT'
    }, {
        t: 1,
        p: 123,
        l: 'CONTACT US'

    }, {
        t: 1,
        p: 123,
        l: 'BLOG'
    }]




});
