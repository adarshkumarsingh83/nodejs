/**
 * @author Adarsh Kumar
 * @author $LastChangedBy: Adarsh Kumar$
 * @version $Revision: 0001 $, $Date:: 1/1/10 0:00 AM#$
 * @Espark @copyright all right reserve
 */
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


application.factory('authInterceptor', function ($rootScope, $q, $window,$location) {
    return {
        request: function (config) {
            config.headers = config.headers || {};
            if ($window.sessionStorage.token) {
                config.headers.Authorization = 'Bearer ' + $window.sessionStorage.token;
            }
            return config;
        },
        responseError: function (rejection) {
            if (rejection.status === 401) {
                // handle the case where the user is not authenticated
                $location.path('/login');
            }
            return $q.reject(rejection);
        }
    };
});

application.config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
});
