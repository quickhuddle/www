app.factory('organization', function(qh, user,huddle, $firebase) {

    var organiztion = {};


    organiztion.add = function(userKey, info) {

        // n: Name - Walled Lake Braves
        // nn: Nick Name - Braves
        // a: Activity
        // t: Type 1=Buisness 2=Non-Profit 3=Government

        info.dc = Firebase.ServerValue.TIMESTAMP;

        // New Organization
        var newOrg = qh.fb.child("organization").push(info)
        var newOrgKey = newOrg.key();

        // New Admin Huddle for Members
        var huddleKey = huddle.add(userKey, { 
            t: 10,
            a: 0,
            o: newOrgKey,   // Organization Key
            on: info.n,     // Organization Name
            n: 'Admin'
        })

        // New Organization-Huddle
        qh.fb.child("organization-huddle").child(newOrgKey).child(huddleKey).set(true);

        return newOrg.key(); 

    }



    return organiztion;
})
