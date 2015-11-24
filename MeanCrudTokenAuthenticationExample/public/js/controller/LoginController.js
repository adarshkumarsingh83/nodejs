/**
 * @author Adarsh Kumar
 * @author $LastChangedBy: Adarsh Kumar$
 * @version $Revision: 0001 $, $Date:: 1/1/10 0:00 AM#$
 * @Espark @copyright all right reserve
 */
application.controller("LoginController", ["$scope", "$window", "$location", "$rootScope", "LoginService"
    , function ($scope, $window, $location, $rootScope, LoginService) {
        $rootScope.showLogout = "show";
        $scope.user = null;
        $scope.login = function () {
            LoginService.loginAuthentication($scope.user, function (response) {
                console.log('Response in Login Controller ' + response);
                if (response.data != null) {
                    $window.sessionStorage.token = response.data.token;
                    $scope.isAuthenticated = true;
                    var encodedProfile = response.data.token.split('.')[1];
                    var profile = JSON.parse(url_base64_decode(encodedProfile));
                    $scope.welcome = 'Welcome ' + profile.username;
                    $location.path('/home');
                } else {
                    delete $window.sessionStorage.token;
                    $scope.isAuthenticated = false;
                    $location.path('/login');
                }
            });
        }

        function url_base64_decode(str) {
            var output = str.replace('-', '+').replace('_', '/');
            switch (output.length % 4) {
                case 0:
                    break;
                case 2:
                    output += '==';
                    break;
                case 3:
                    output += '=';
                    break;
                default:
                    throw 'Illegal base64url string!';
            }
            return window.atob(output); //polifyll https://github.com/davidchambers/Base64.js
        }
    }]);