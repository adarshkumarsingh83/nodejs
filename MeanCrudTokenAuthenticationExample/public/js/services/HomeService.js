/**
 * @author Adarsh Kumar
 * @author $LastChangedBy: Adarsh Kumar$
 * @version $Revision: 0001 $, $Date:: 1/1/10 0:00 AM#$
 * @Espark @copyright all right reserve
 */
application.service("HomeService", ["$http", "$rootScope", function ($http, $rootScope) {

    function getUserById(userId, callback) {
        $http.get('/api/get/user/id/' + userId).then(function (response) {
            console.log('getUserById Response ' + response);
            callback(response);
        }, function (reason) {
            console.log('getUserById Reason ' + reason);
            $rootScope.message = "Unable to Fetch User With Id " + userId;
            callback(reason);
        });
    };

    function getUserByName(userName, callback) {
        $http.get('/api/get/user/username/' + userName).then(function (response) {
            console.log('getUserByName Response ' + response);
            callback(response);
        }, function (reason) {
            console.log('getUserByName Reason ' + reason);
            $rootScope.message = "Unable to Fetch User With Name " + userName;
            callback(reason);
        });
    };

    function getAllUser(callback) {
        $http.get('/api/get/user/all').then(function (response) {
            console.log('getAllUser Response ' + response);
            callback(response);
        }, function (reason) {
            console.log('getAllUser Reason ' + reason);
            $rootScope.message = "Unable to Fetch User List";
            callback(reason);
        });
    };


    function updateUserById(user, callback) {
        $http.put('/api/update/user/id/' + user._id, user).then(function (response) {
            console.log('updateUserById Response ' + response);
            $rootScope.message = "User Update User With Id " + user._id;
            callback(response);
        }, function (reason) {
            console.log('updateUserById Reason ' + reason);
            $rootScope.message = "Unable to Update User With Id " + user._id;
            callback(reason);
        });
    };

    function updateUserByName(user, callback) {
        $http.put('/api/update/user/username/' + user.username, user).then(function (response) {
            console.log('updateUserByName Response ' + response);
            callback(response);
        }, function (reason) {
            console.log('updateUserByName Reason ' + reason);
            $rootScope.message = "Unable to Update User With Name " + user.username;
            callback(reason);
        });
    };

    function deleteUserById(userId, callback) {
        $http.delete('/api/delete/user/id/' + userId).then(function (response) {
            console.log('deleteUserById Response ' + response);
            if(response.data){
                $rootScope.message = "User Deletion Successful";
            }else{
                $rootScope.message = "User Deletion UnSuccessful";
            }
            callback(response);
        }, function (reason) {
            console.log('deleteUserById Reason ' + reason);
            $rootScope.message = "Unable to Delete User With Id " + user._id;
            callback(reason);
        });
    };

    function deleteUserByName(userName, callback) {
        $http.delete('/api/delete/user/username/' + userName).then(function (response) {
            console.log('deleteUserByName Response ' + response);
            callback(response);
        }, function (reason) {
            console.log('deleteUserByName Reason ' + reason);
            $rootScope.message = "Unable to Delete User With Name " + user.username;
            callback(reason);
        });
    };

    function saveUser(user, callback) {
        $http.post('/api/post/user', user).then(function (response) {
            console.log('saveUser Response ' + response);
            $rootScope.message = "User Saved Successfully"
            callback(response);
        }, function (reason) {
            console.log('saveUser Reason ' + reason);
            $rootScope.message = "User Not Saved Successfully"
            callback(reason);
        });
    };

    return{
        saveUser: saveUser, getUserById: getUserById, getUserByName: getUserByName, getAllUser: getAllUser, updateUserById: updateUserById, updateUserByName: updateUserByName, deleteUserById: deleteUserById, deleteUserByName: deleteUserByName
    };

}]);
