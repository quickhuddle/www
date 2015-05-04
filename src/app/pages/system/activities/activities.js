app.controller("page-activities", function($state, $scope, $http, $rootScope, $stateParams, qh, user, $firebase, $timeout) {


    var data = [
        ["ID", "Type", "Guardian 1"],
        ["Player", "", "Guardian 1"]    

    ];

    var container = document.getElementById('grid');

    var hot = new Handsontable(container, {
        data: data,
        outsideClickDeselects: false,
        minSpareRows: 1,
        contextMenu: true,
        colWidths: [200, 200, 200]

    });




    $scope.render();


});
