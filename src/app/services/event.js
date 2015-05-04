app.factory('event', function(qh, user, $firebase) {



    var event = {};


    event.add = function(userKey, huddleKey, details) {

        // {
        //     n: name,
        //     y: type,  1 or null = Basic
        //     s: start date,
        //     e: end date,
        //     a: activity,
        //     c: activity class,
        //     d: description
        //     l: location String
        //     t: theme key
        //     i: icon key
        //     x: status   1 or null = Active   2=postpone 3=canceled 4=reschedule
        //     m: master event ket   If this is part of a re-occuring event. This is the master Event.
        //     h: huddle Key


        //     ss: start date status 0 or null = set 2=Not Determine yet
        //     es: start date status 0 or null = set 2=Not Determine yet
        // }

        // New event
        var newEvent = qh.fb.child("event").push(details)
        var newEventKey = newEvent.key();

        // New event-user
        qh.fb.child("event-user").child(newEventKey).child(userKey).set(true);

        // New user-event
        qh.fb.child("user-event").child(userKey).child(newEventKey).set(details);



        // New huddle-event
        qh.fb.child("huddle-event").child(huddleKey).child(newEventKey).set(details);

        // New event-huddle
        qh.fb.child("event-huddle").child(userKey).child(huddleKey).set(true);

        // event-location
        // location-event

    }

    event.save = function(event) {



    }




    return event;
})
