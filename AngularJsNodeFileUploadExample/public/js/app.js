var myApp = angular.module('myApp', []);

myApp.directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;
            element.bind('change', function () {
                scope.$apply(function () {
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}]);

myApp.controller('myCtrl', ['$scope', 'fileUpload', function ($scope, fileUpload) {

    $scope.uploadFile = function () {
        var file = $scope.myFile;
        console.log('file is ');
        console.dir(file);
        var uploadUrl = "/api/photo";
        fileUpload.uploadFileToUrl(file, uploadUrl, function (response,state) {
            console.log("MyController " + response);
            if(state){
                $scope.successMessage = response;
            }else{
                $scope.failureMessage = response;
            }
        });
    };
}]);

myApp.service('fileUpload', ['$http', function ($http) {
    this.uploadFileToUrl = function (file, uploadUrl, callback) {
        var fd = new FormData();
        fd.append('file', file);
        $http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        }).success(function (response) {
                console.log('file uploaded successful');
                callback('file uploaded successful',true);
            }).error(function (reason) {
                console.log('file uploaded unsuccessful');
                callback('file uploaded unsuccessful',false);
            });
    }
}]);
