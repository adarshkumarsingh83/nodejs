application.controller("LoginController", ["$scope", "$location","$rootScope", "LoginService"
    , function ($scope, $location,$rootScope,LoginService) {
        $rootScope.showLogout = "show";;
        $scope.user = null;
        $scope.login = function () {
            LoginService.loginAuthentication($scope.user, function (response) {
                console.log('Response in Login Controller ' + response);
                if (response.data) {
                    $location.path('/home');
                } else {
                    $location.path('/login');
                }
            });
        }
    }]);