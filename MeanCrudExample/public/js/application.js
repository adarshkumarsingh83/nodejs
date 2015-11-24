var application = angular.module('Application', ["ngRoute"]);

application.config(function ($routeProvider) {
    $routeProvider.when("/login", {
        templateUrl: "view/login/login.html", controller: "LoginController"
        }).when("/registration", {
            templateUrl: "view/registration/registration.html", controller: "RegistrationController"
        }).when("/home", {
            templateUrl: "view/home/home.html", controller: "HomeController"
        }).when("/logout", {
            templateUrl: "view/login/login.html", controller: "LogoutController"
        }).otherwise({redirectTo: "/login"});
});

application.directive('header', function () {
    return {
        restrict: 'A',
        replace: true,
        scope: {user: '='},
        templateUrl: "view/header.html",
        controller: ['$scope', '$filter', function ($scope, $filter) {
            $scope.header = "welcome to application";
            $scope.showLogout = true;
        }]
    }
});

application.directive('footer', function () {
    return {
        restrict: 'A',
        replace: true,
        templateUrl: "view/footer.html",
        controller: ['$scope', '$filter', function ($scope, $filter) {
            $scope.footer = "copyright@espark ";
        }]
    }
});

