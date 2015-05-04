app.factory('card', function(qh, user, $firebase) {

    var card = {};

    card.add = function(userKey, huddleKey, details) {

        // Details
        // t: Type (1)
        // h: Header Text (Optional)
        // d: data (User)
        // c: config

        // New cardd
        var newCard = qh.fb.child("card").push(details);

        var newCardKey = newCard.key();
 
        // New huddle-card
        qh.fb.child("huddle-card").child(huddleKey).child(newCardKey).set({t:details.t});
 
        // New card-huddle
        qh.fb.child("card-huddle").child(newCardKey).child(huddleKey).set(true);

        // Not sure if a card should be assigned to events

        // New event-card
        //qh.fb.child("event-card").child(huddleKey).child(newEventKey).set(details);

        // New card-event
        // qh.fb.child("card-event").child(userKey).child(huddleKey).set(true);      

    }

    //card.rankHuddle = function

    return card;
})
