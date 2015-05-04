app.factory('message', function(qh, user, $firebase) {

    var message = {};

    message.add = function(userKey, huddleKey, details) {

        details.u = userKey;
        details.fn = user.profile.firstName;
        details.ln = user.profile.lastName;


        // {
        //     u: User Key
        //     fn: User First Name
        //     ln: User Last Name
        //     t: Type 0 = Simple 1 = Full
        //     s: Subject
        //     m: Message Content
        //     x: TimeStamp of object
        //     z: Theme
        //     m: Mood Key
        // }

        // New Message Object
        var newMessage = qh.fb.child("message").push(details)
        var newMessageKey = newMessage.key();

        // New message-user
        qh.fb.child("message-user").child(newMessageKey).child(userKey).set(true);

        // New user-message
        qh.fb.child("user-message").child(userKey).child(newMessageKey).set(details);

        // New huddle-message
        qh.fb.child("huddle-message").child(huddleKey).child(newMessageKey).set(details);

        // New message-huddle
        qh.fb.child("message-huddle").child(newMessageKey).child(huddleKey).set(true);

    }

    message.save = function(message) {



    }




    return message;
})
