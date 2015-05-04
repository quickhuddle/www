app.factory('huddle', function(qh, user, $firebase) {

    var huddle = {};


    huddle.add = function(userKey, info) {

        // L:Live
        // n: Name
        // o: Organization Key
        // a: Activity

        info.dc = Firebase.ServerValue.TIMESTAMP;

        // New Huddle
        var newHuddle = qh.fb.child("huddle").push(info)
        var newHuddleKey = newHuddle.key();

        // New Member
        var newMember = qh.fb.child("member").push({
            firstName: user.profile.firstName,
            lastName: user.profile.lastName,
            huddleKey: newHuddleKey,
            userKey: userKey
        })
        newMemberKey = newMember.key();

        // New huddle-member
        qh.fb.child("huddle-member").child(newHuddleKey).child(newMemberKey).set(true);

        // New huddle-user
        qh.fb.child("huddle-user").child(newHuddleKey).child(userKey).set(true);

        // New user-huddle
        qh.fb.child("user-huddle").child(userKey).child(newHuddleKey).set(info);


        return newHuddleKey;

    }

    //huddle.save = function(huddleKey, huddleObj)


    huddle.saveMember = function(huddle, info, key, user) {

        // Save member.
        var member = qh.fb.child("member").child("").push(info);

        // Save huddle-member Link
        var member = qh.fb.child("huddle-member").child(huddleKey).push({});

    }

    huddle.ref = function(key) {

        return $firebase(qh.fb.child("huddle").child(key)).$asObject();
    }

    huddle.addCard = function(key,info){

        
    }


    return huddle;
})
