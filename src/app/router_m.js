app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode(false);

    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "src/app/pages/home/home_m.html",
            controller: "page-home"
        })
        .state('main', {
            url: "/main",
            //template: '<h1>MAIN</h1><div ui-view></div>',
            templateUrl: "src/app/pages/main/main_d.html",
            abstract: true
        })
        .state('main.home', {
            url: '^/',
            //template: '<h1>HOME</h1>',
            templateUrl: "src/app/pages/home/home_d.html",
            controller: "page-home"
        })
        .state('main.newhuddle', {
            url: '^/newhuddle',
            templateUrl: "src/app/pages/newHuddle/newhuddle_d.html",
            controller: 'page-newhuddle'

        })

    $urlRouterProvider.otherwise("/home");

})
