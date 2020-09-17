application.service("RegistrationService", ["$http", "$rootScope", function ($http, $rootScope) {

    function registerUser(user, callback) {
        $http.post('/post/user', user).then(function (response) {
            if (response.data) {
                console.log('registerUser Response ' + response.data);
                $rootScope.message = "User Registration Successful"
            } else {
                console.log('registerUser Response ' + response.data);
                $rootScope.message = "User Registration UnSuccessful"
            }
            callback(response);
        }, function (reason) {
            console.log('registerUser Reason ' + reason);
            $rootScope.message = "User Registration UnSuccessful Exception Generated"
            callback(response);
        });
    };
    return{
        registerUser: registerUser
    }
}]);