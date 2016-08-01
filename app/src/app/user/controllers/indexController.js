angular.module('app.user').controller('indexController', indexController);

function indexController($http, $location) {
    var vm = this;

    vm.page = 'User';

    $http.get('http://localhost:3000/api/v1/users')
        .then(function (response) {
            vm.users = response.data;
        });

}
indexController.$inject = ['$http', '$location'];