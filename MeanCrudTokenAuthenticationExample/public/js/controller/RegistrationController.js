/**
 * @author Adarsh Kumar
 * @author $LastChangedBy: Adarsh Kumar$
 * @version $Revision: 0001 $, $Date:: 1/1/10 0:00 AM#$
 * @Espark @copyright all right reserve
 */
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