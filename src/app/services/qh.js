app.factory('qh', function($q, $firebase, $timeout, $firebaseObject) {

    var qh = {};

    qh.$scope = null; // This gets set to $rootScope when the app starts

    // Setup Main Firebase Object
    qh.fb = new Firebase("https://quickhuddle.firebaseio.com");

    // Load system info. This should be converted into the main javascript file.
    qh.system = $firebaseObject(qh.fb.child("system"));
 
    qh.refresh = function() {

        window.clearTimeout(qh.refreshtimer);

        qh.refreshtimer = window.setTimeout(function() {

            $timeout(function() {
                qh.$scope.refresh();
            })
        }, 100);
    }
    return qh;
});
