/**
 * Created by Adarsh on 11/11/15.
 */
var meanLoginApplication = angular.module("MeanLoginApplication", []);


meanLoginApplication.controller("ApplicationController", ["$scope", "$http", function ($scope, $http) {
    console.log('ApplicationController Received Request');

    $scope.login = function () {
        $scope.error = '';
        var email = $scope.email;
        var pwd = $scope.pwd;
        console.log("data from login page  " + email + " " + pwd);
       if(email && pwd ){

           $http.get('/login/' + email + '/' + pwd).success(function (response) {
               console.log('Received Response From Server ' + response);
               if (response) {
                   console.log('login successful')
                   $scope.msg = 'login successful';
               } else {
                   console.log('login failure');
                   $scope.msg = 'login failure';
               }
           });
       }else{
           $scope.error = 'insufficient credentials';
       }

    }

    $scope.registration = function () {

    }
}]);