application.controller("LogoutController", ["$location", "$scope", "$rootScope"
    , function ($location, $scope,$rootScope) {
        $rootScope.showLogout = false;
        $rootScope.message = "User Logout Successful";
        $location.path("/login");
    }]);
