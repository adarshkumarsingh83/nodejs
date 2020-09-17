(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$location', 'UserService', '$rootScope'];
    function HomeController($location, UserService, $rootScope) {
        var vm = this;
        vm.user = null;
        vm.allUsers = [];
        vm.deleteUser = deleteUser;
        vm.editUser = editUser;
        vm.updateUser = updateUser;
        vm.clearUser = clearUser;
        vm.sortOrder = "+username";
        initController();

        function initController() {
            loadCurrentUser();
            loadAllUsers();
        }

        function loadCurrentUser() {
            UserService.GetByUsername($rootScope.globals.currentUser.username)
                .then(function (user) {
                    console.log("loadCurrentUser() " + user);
                    vm.user = user.data;
                });
        }

        function loadAllUsers() {
            UserService.GetAll()
                .then(function (users) {
                    console.log("loadAllUsers() " + users);
                    vm.allUsers = users.data;
                });
        }

        function deleteUser(id) {
            if (id != null && id != "") {
                UserService.Delete(id)
                    .then(function () {
                        console.log("deleteUser() " + id);
                        loadAllUsers();
                        $location.path('/');
                    });
            }
        }

        function editUser(id) {
            if (id != null && id != "") {
                UserService.GetById(id).then(function (response) {
                    console.log('Received Response From Server');
                    vm.editUserObject = response.data;
                })
            }
        }

        function updateUser(users) {
            if (users != null && users != "") {
                UserService.Update(users).then(function () {
                    console.log("updateUser() ");
                    clearUser();
                    loadAllUsers();
                    $location.path('/');
                });
            }
        }

        function clearUser() {
            vm.editUserObject = "";
        }

    };

})();