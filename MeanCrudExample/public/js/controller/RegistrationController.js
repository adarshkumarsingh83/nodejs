application.controller("RegistrationController", ["$scope","$rootScope", "$location", "RegistrationService"
    , function ($scope, $rootScope,$location, RegistrationService) {
        $scope.user = null;
        $rootScope.showLogout = false;
        $scope.register = function () {
            RegistrationService.registerUser($scope.user, function (response) {
                if (response.data) {
                    console.log('RegistrationController Response' + response.data);
                    $location.path('/login');
                } else {
                    console.log('RegistrationController Response' + response.data);
                    $location.path('/registration');
                }
            })
        }
    }]);