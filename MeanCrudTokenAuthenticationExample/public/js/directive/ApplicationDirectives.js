application.directive('header', function () {
    return {
        restrict: 'A',
        replace: true,
        scope: {user: '=',showLogout:'='},
        templateUrl: "view/header.html",
        controller: ['$scope', '$rootScope', function ($scope, $rootScope) {
            $scope.header = "welcome to application";
            console.log("show logout " + $scope.showLogout);
            $scope.showLogout = false;
        }]
    }
});

application.directive('footer', function () {
    return {
        restrict: 'A',
        replace: true,
        templateUrl: "view/footer.html",
        controller: ['$scope', function ($scope) {
            $scope.footer = "copyright@espark ";
        }]
    }
});