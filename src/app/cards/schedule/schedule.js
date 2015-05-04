app.controller("card-schedule", function($state, $scope, $http, $rootScope, $firebase, $timeout, $stateParams, huddle, user) {


    $scope.a = $scope.a + 1;

    
    $scope.render = function() {

        $('#calendar').fullCalendar({ 
            defaultDate: '2015-02-12',
            fixedWeekCount: false,
            eventBackgroundColor: 'white',
            eventTextColor: 'black',
            eventBorderColor: 'white',
            height:"auto",
            header: {
                left: 'title',
                center: '',
                right: 'today prev,next'
            },
            aspectRatio: 3.8,
            eventRender: function(event, element) {
                element.find('span.fc-time').html("<img src='img/activites/a" + event.activity + "_quickie.png' style='height:35px;padding-right:0px;'>")
            },
            editable: true,
            eventLimit: 6, // allow "more" link when too many events
            events: [{
                title: 'Game at 6pm',
                start: '2015-02-01T07:00:00',
                activity: 4,

            },{
                title: 'Game at 6pm',
                start: '2015-02-11T07:00:00',
                activity: 3,

            }, {
                title: 'Game at 6pm',
                start: '2015-02-14T07:00:00',
                activity: 5,

            }, {
                title: 'Game at 6pm',
                start: '2015-02-21T07:00:00',
                activity: 6,

            },  {
                title: 'Pracice',
                start: '2015-02-13T07:00:00',
                activity: 1,
            }, {
                title: 'Practice',
                start: '2015-02-17',
                end: '2015-02-13T07:00:00',
                activity: 8,
            }, {
                title: 'Pictures',
                start: '2015-02-27T07:00:00',
                activity: 2
            }]
        })
    }



    // $scope.render();


});
