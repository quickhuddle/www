app.factory('notification', function(qh, user, $firebase) {

    var notifiaction = {};


    notifiaction.add = function(userKey, huddleKey, details) {

        // {
        //     t: type 1=New Message  
        //     r: reference type
        //     k: reference Key
        //     c: message content
        //     d: date Created
        //     e: event Key 
        // }

        // New event
        var newNotification = qh.fb.child("notification").push(details)
        var newNotificationKey = newMessage.key();

        // New user-notification
        qh.fb.child("user-notification").child(userKey).child(newNotificationKey).set(details);
    }

    return notifiaction;
})
