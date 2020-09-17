var application = angular.module('Application', ["ngRoute"]);

application.controller("ApplicationController", ['$scope', '$http', function ($scope, $http) {

    $scope.getData = function () {
        $http.get('/api/tables').then(function (response) {
            if (response.data) {
                console.log('Response ' + response.data);
                $scope.dbData=undefined;
                $scope.tableData =response.data;
            } else {
                $scope.tableData = response.data;
            }
        }, function (reason) {
            console.log('loginAuthentication Reason ' + reason);
            $scope.tableData = response.data;
        });

    }

    $scope.getDbList = function () {
        $http.get('/api/dbs').then(function (response) {
            if (response.data) {
                console.log('Response ' + response.data);
                $scope.tableData=undefined;
                $scope.dbData =response.data;
            } else {
                $scope.dbData = response.data;
            }
        }, function (reason) {
            console.log('loginAuthentication Reason ' + reason);
            $scope.dbData = response.data;
        });

    }

}]);