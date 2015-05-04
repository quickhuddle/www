app.controller("card-roster", function($state, $scope, $http, $rootScope, $firebase, $timeout, $stateParams, huddle, user) {


    $scope.huddleId = '';


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

        var data = [
            ["Player", "", "Guardian 1", "", "", "Guardian 2"],
            ["First Name", "Last Name", "Name", "mobile", "Email", "Name", "mobile", "Email"],
            ["Michael", "Abele", "John Abele", "248-926-9239", "johnabele@ameritch.com", "John Abele", "248-926-9239", "johnabele@ameritch.com"],
            ["Richard", "Thomas", "John Abele", "248-926-9239", "johnabele@ameritch.com", "John Abele", "248-926-9239", "johnabele@ameritch.com"],
            ["Bill", "Bigelow", "John Abele", "248-926-9239", "johnabele@ameritch.com", "John Abele", "248-926-9239", "johnabele@ameritch.com"]

        ];

        var container = document.getElementById('roster');

        var hot = new Handsontable(container, {
            data: data,
            outsideClickDeselects: false,
            minSpareRows: 1,
            contextMenu: true,
            colWidths: [100, 100, 100, 125, 200, 100, 125, 200],
            mergeCells: [{
                row: 0,
                col: 0,
                rowspan: 1,
                colspan: 2
            }, {
                row: 0,
                col: 2,
                rowspan: 1,
                colspan: 3
            }, {
                row: 0,
                col: 5,
                rowspan: 1,
                colspan: 3
            }],
            cells: function(row, col, prop) {
                var cellProperties = {};

                if (row === 0 || this.instance.getData()[row][col] === 'readOnly') {
                    cellProperties.readOnly = false; // make cell read-only if it is first row or the text reads 'readOnly'
                }
                if (row === 0 || row === 1) {
                    cellProperties.renderer = firstRowRenderer; // uses function directly
                } else {
                    //cellProperties.renderer = "negativeValueRenderer"; // uses lookup map
                }

                return cellProperties;
            }

        });
    }

    function firstRowRenderer(instance, td, row, col, prop, value, cellProperties) {
        Handsontable.renderers.TextRenderer.apply(this, arguments);


        td.style.fontWeight = 'bold';
    }

    $scope.render();


});
