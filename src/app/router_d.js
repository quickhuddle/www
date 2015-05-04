app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $stateProvider
        .state('main', {
            url: "/main",
            templateUrl: "src/app/pages/main/main_d.html",
            abstract: true
        })
        .state('main.home', {
            url: '^/',
            templateUrl: "src/app/pages/home/home_d.html",
            controller: "page-home"
        })
        .state('main.newhuddle', {
            url: '^/newhuddle',
            templateUrl: "src/app/pages/newHuddle/newhuddle_d.html",
            controller: 'page-newhuddle'

        })
        .state('main.signin', {
            url: '^/newhuddle',
            templateUrl: "src/app/pages/signin/signin_d.html",
            controller: 'page-signin'

        })
        .state('main.forgot', {
            url: '^/forgot',
            templateUrl: "src/app/pages/signin/forgot_d.html",
            controller: 'page-forgot'

        })
        .state('main.join', {
            url: '^/join',
            templateUrl: "src/app/pages/join/join_d.html",
            controller: 'page-join'

        })
        .state('main.event', {
            url: '^/event/:id',
            templateUrl: "src/app/pages/event/event_d.html",
            controller: 'page-event'

        })
        .state('main.dashboard', {
            url: '^/dashboard',
            templateUrl: "src/app/pages/dashboard/dashboard_d.html",
            controller: 'page-dashboard'

        })
        .state('main.huddle', {
            url: '^/huddle/:id',
            templateUrl: "src/app/pages/huddle/huddle_d.html",
            controller: 'page-huddle'

        })
        .state('main.card', {
            url: '^/card',
            templateUrl: "src/app/pages/card/card_d.html",
            controller: 'page-card'

        })
        .state('main.profile', {
            url: '^/profile',
            templateUrl: "src/app/pages/profile/profile_d.html",
            controller: 'page-profile'

        })
        .state('main.activities', {
            url: '^/activities',
            templateUrl: "src/app/pages/system/activities/activities_d.html",
            controller: 'page-activities'

        })
        .state('main.neworganization', {
            url: '^/neworganization',
            templateUrl: "src/app/pages/organization/newOrganization_d.html"
        })
        .state('main.organization', {
            url: '^/organization/:id',
            templateUrl: "src/app/pages/organization/organization_d.html"
        })
        .state('main.scale', {
            url: '^/scale',
            templateUrl: "src/app/pages/scale/scale_d.html",
            controller: 'page-scale'
        })

    $urlRouterProvider.otherwise("/");

})
