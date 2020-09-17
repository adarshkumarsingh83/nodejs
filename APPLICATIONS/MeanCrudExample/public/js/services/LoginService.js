application.service("LoginService", ["$http", "$rootScope", function ($http, $rootScope) {

    function loginAuthentication(user, callback) {
        $http.post('/post/authentication', user)
            .then(function (response) {
                if (response.data) {
                    console.log('loginAuthentication Response ' + response.data);
                    $rootScope.message = "User Authenticated Successfully";
                } else {
                    $rootScope.message = "User Authenticated UnSuccessful";
                }
                callback(response);
            }, function (reason) {
                console.log('loginAuthentication Reason ' + reason);
                $rootScope.message = "User Authenticated UnSuccessful";
                callback(response);
            });
    }

    return{
        loginAuthentication: loginAuthentication
    }

}]);