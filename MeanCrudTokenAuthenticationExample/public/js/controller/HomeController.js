/**
 * @author Adarsh Kumar
 * @author $LastChangedBy: Adarsh Kumar$
 * @version $Revision: 0001 $, $Date:: 1/1/10 0:00 AM#$
 * @Espark @copyright all right reserve
 */
application.controller("HomeController", ["$rootScope", "$location", "HomeService"
    , function ($rootScope, $location, HomeService) {
        console.log($rootScope);
        $rootScope.showLogout = true;
        $rootScope.message = null;
        $rootScope.userList = null;
        $rootScope.clearUser = clearUser;
        loadAllUser();


        function loadAllUser() {
            HomeService.getAllUser(function (response) {
                if (response) {
                    $rootScope.userList = response.data;
                } else {
                    $rootScope.userList = null;
                }
            });
        }


        $rootScope.deleteUser = function (id) {
            if (id != null && id != "") {
                HomeService.deleteUserById(id, function (response) {
                    console.log("deleteUser() " + id);
                    loadAllUser();
                    $location.path('/home');
                });
            }
        }

        $rootScope.editUser = function (id) {
            if (id != null && id != "") {
                HomeService.getUserById(id, function (response) {
                    console.log('Received Response From Server');
                    $rootScope.editUserObject = response.data;
                });
            }
        }

        $rootScope.updateUser = function (users) {
            if (users != null && users != "") {
                HomeService.updateUserById(users, function (response) {
                    console.log('Received Response From Server for updateUser()');
                    clearUser();
                    loadAllUser();
                    $location.path('/home');
                });
            }
        }

        function clearUser() {
            $rootScope.editUserObject = "";
        }
    }]);


