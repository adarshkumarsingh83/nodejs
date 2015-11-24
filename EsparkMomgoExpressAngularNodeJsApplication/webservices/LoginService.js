/**
 * Created by Adarsh on 11/14/15.
 */

function userAuthentication(db,username,password, response) {
    var username = request.body.username;
    var password = request.body.password;
    console.log('Received Post Request in server ' + username + ' ' + password);
    db.user.findOne({$and: [
        {"username": username},
        {"password": password}
    ]}, function (error, docs) {
        if (error) {
            console.log('Selection error', error);
        } else {
            console.log((docs != null ? ("Selection successful from db " + docs.username + " " + docs.password) : " User Not Found in Db Result is null"));
            if (docs != null && username == docs.username && password == docs.password) {
                console.log('login credential match');
                response.json(true);
            } else {
                console.log('login credential not match');
                response.json(false);
            }
        }
    });
}
module.exports.userAuthentication=userAuthentication();

