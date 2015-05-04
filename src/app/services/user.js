app.factory('user', function(qh, $firebaseArray,$firebaseObject) {

    var user = {};

    user.status = 0; // 0=Starting 1=Not Signed In 2=Signing In 3=Signed In
    user.auth = null;
    user.key = null;

    // FireBase Objects
    user.profile = null; // User Object
    user.huddles = []; // Users Huddles
    user.events = null; // Users Events
    user.alerts = null; // Users Alerts
    user.news = null; // Users News Items

    user.startup = function() {

         // Checks to see if the user is authenticated. If so then it loads the user's profile
        // Set Users Authentication Object.
        user.auth = qh.fb.getAuth();
        if (qh.fb.getAuth() == null) {
            // User is not Authenticated.
            user.status = 1;
        } else {
            // User is Authenticated. Load Profile
            user.auth = qh.fb.getAuth();
            user.key = qh.fb.getAuth().uid;
            user.setReferences();
        }
    }

    user.signIn = function(email, password) {

        var deferred = $.Deferred();
        var msg = "";
        if (password == "") msg = "Password is required";
        if (email == "") msg = "Email is required";
        if (msg == '') {
            qh.fb.authWithPassword({
                    "email": email,
                    "password": password
                },
                function onAuth(err, userObject) {
                    if (err) {
                        user.status = 1;
                        deferred.reject("Invlaid username/password");
                    }
                    if (userObject) {
                        user.auth = qh.fb.getAuth();
                        user.key = qh.fb.getAuth().uid;
                        user.setReferences();
                        deferred.resolve();
                    }
                });
        } else {
            user.status = 1;
            deferred.reject(msg);
        }
        return deferred.promise();
    }

    user.setReferences = function() {

        // Set user profile
        user.status = 2; // Signing In
        user.profile = $firebaseObject(qh.fb.child("user").child(user.key));
        user.profile.$loaded(
            function(data) {
                user.status = 3;
            }
        );

        // Huddles
        user.huddles = $firebaseArray(qh.fb.child("user-huddle").child(user.key));        

        // Events
        user.events = $firebaseArray(qh.fb.child("user-event").child(user.key));
       
        
    }

    user.signOut = function() {
        qh.fb.unauth();
        user.status = 1;
        user.profile = null;
        $state.go('main.home');
    }

    user.join = function(info) {

        // Function Will 
        // create a new user account
        // Create a new User Profile record
        var deferred = $.Deferred();
        qh.fb.createUser({
            email: info.email,
            password: info.password
        }, function(err, userobject) {
            if (err) {
                var msg = 'Unable to create new user account. Please try again';
                switch (err.code) {
                    case 'EMAIL_TAKEN':
                        msg = 'This email address is already in use.';
                        break;
                    case 'INVALID_EMAIL':
                        msg = 'The specified email is not a valid email';
                        break;
                    default:
                }
                // Error Creating Account
                deferred.reject(msg);
            } else {

                // Registered User with Simple Sign In - Create Profile Object
                var newProfile = qh.fb.child("user").child(userobject.uid).set({
                    type: 1, // 0=Basic 1=Full
                    firstName: info.firstName,
                    lastName: info.lastName
                })

                // Check to see if a userconnect object was created for this email address.
                //  No - Create User Communication Object
                var newProfile = qh.fb.child("usercomm").child(info.email.replace(/\./g, ',')).set({
                    userkey: userobject.uid,
                    verified: true
                })

                // Yes - We need to transfer the temp user for this userconnect object to the newly created user.

                deferred.resolve();
            }
        });
        return deferred.promise();
    }
    return user;
});
