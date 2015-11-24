var myMeanAngularApplicationRoot = angular.module("MyMeanAngularApplicationRoot", []);

myMeanAngularApplicationRoot.controller("ApplicationController", ["$scope", "$http", function ($scope, $http) {
    console.log('ApplicationController Received Request');

    var refresh = function () {
        $http.get('/contactList').success(function (response) {
            console.log('Received Response From Server');
            $scope.contactList = response;
            $scope.contact = "";
        });
    }

    refresh();

    $scope.addContact = function () {
        console.log($scope.contact);
        $http.post('/contactList', $scope.contact).success(function (response) {
            console.log('Received Response From Server');
            refresh();
        });
    };

    $scope.removeContact = function (id) {
        console.log("Record to remove " + id);
        $http.delete('/contactList/' + id).success(function (response) {
            console.log('Received Response From Server');
            refresh();
        });
    };

    $scope.editContact = function (id) {
        console.log("Record to edit " + id);
        $http.get('/contactList/' + id).success(function (response) {
            console.log('Received Response From Server');
            $scope.contact = response;
        });
    };

    $scope.updateContact = function () {
        var id = $scope.contact._id;
        console.log("Record to Update " + id);
        $http.put('/contactList/' + id, $scope.contact).success(function (response) {
            console.log('Received Response From Server');
            refresh();
        });
    };

    $scope.clearContact = function () {
        $scope.contact = "";
    };
}]);
