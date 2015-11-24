application.controller("RegistrationController", ["$scope", "$location", "RegistrationService"
    , function ($scope, $location, RegistrationService) {
        $scope.user = null;
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