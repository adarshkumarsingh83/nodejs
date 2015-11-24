/**
 * @author Adarsh Kumar
 * @author $LastChangedBy: Adarsh Kumar$
 * @version $Revision: 0001 $, $Date:: 1/1/10 0:00 AM#$
 * @Espark @copyright all right reserve
 */
application.controller("LogoutController", ["$location", "$scope", "$rootScope", "$window"
    , function ($location, $scope, $rootScope, $window) {
        $scope.showLogout = false;
        $rootScope.message = "User Logout Successful";
        $scope.isAuthenticated = false;
        delete $window.sessionStorage.token;
        //$window.sessionStorage.token="";
        $location.path("/login");
    }]);
