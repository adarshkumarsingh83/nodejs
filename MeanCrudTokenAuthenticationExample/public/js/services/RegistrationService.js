/**
 * @author Adarsh Kumar
 * @author $LastChangedBy: Adarsh Kumar$
 * @version $Revision: 0001 $, $Date:: 1/1/10 0:00 AM#$
 * @Espark @copyright all right reserve
 */
application.service("RegistrationService", ["$http", "$rootScope", function ($http, $rootScope) {

    function registerUser(user, callback) {
        $http.post('/post/user', user).then(function (response) {
            if (response.data) {
                console.log('registerUser Response ' + response.data);
                $rootScope.message = "User Registration Successful";
                $rootScope.successMessage = true;
            } else {
                console.log('registerUser Response ' + response.data);
                $rootScope.message = "User Registration UnSuccessful";
                $rootScope.failureMessage = true;
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