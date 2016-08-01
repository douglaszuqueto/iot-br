angular.module('app.user').controller('indexController', indexController);

indexController.$inject = ['$http', '$window'];

function indexController($http, $window) {
    var vm = this;

    vm.page = 'Usuários';

    /**
     * Load Users
     */
    loadUsers();
    function loadUsers() {
        $http.get('http://localhost:3000/api/v1/users')
            .then(function (response) {
                vm.users = response.data;
            });
    }

    /**
     * Remove user
     * @type {remove}
     */
    vm.remove = remove;
    function remove(user) {
        $http.delete('http://localhost:3000/api/v1/users/' + user._id)
            .then(function (response) {
                $window.Materialize.toast('Usuário ' + user.name + ' removido', 2000);
                loadUsers();
            });
    }

}
