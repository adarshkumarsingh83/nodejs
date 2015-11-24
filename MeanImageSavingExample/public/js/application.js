var imageDirective = angular.module("ImageDirective", []);

imageDirective.directive('fileModel', ['$parse', function ($parse) {
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

imageDirective.controller("DataController", ["$scope", "$http", "fileUpload", function ($scope, $http, fileUpload) {

    var onSuccess = function (response) {
        $scope.person = response.data;
    };

    var onFailure = function (reason) {
        $scope.errorMsg = "Unable to find User";
    };

    $scope.uploadFile = function () {
        var file = $scope.myFile;
        console.log('file is ');
        console.dir(file);
        var uploadUrl = "/api/users";
        fileUpload.uploadFileToUrl(file, uploadUrl);
    };


    $http.get('/api/users').then(onSuccess, onFailure);

}]);

imageDirective.service('fileUpload', ['$http', function ($http) {
    this.uploadFileToUrl = function (file, uploadUrl) {
        var fd = new FormData();
        fd.append('file', file);
        $http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': 'image/png'}
            }).success(function () {
                 $scope.person.image=file;
            }).error(function () {
                $scope.errorMsg = "Unable to Save Image";
            });
    }
}]);