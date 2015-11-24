application.controller("LogoutController", ["$location", "$scope", "$rootScope"
    , function ($location, $scope,$rootScope) {
        $scope.showLogout = false;
        $rootScope.message = "User Logout Successful";
        $location.path("/login");
    }]);
