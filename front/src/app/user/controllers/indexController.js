angular.module('app.user').controller('indexController', indexController);

indexController.$inject = ['$window', 'User'];

function indexController($window, User) {
    var vm = this;

    vm.page = 'Usuários';

    /**
     * Load Users
     */
    loadUsers();
    function loadUsers() {
        User.query({}, function (response) {
            vm.users = response;
        });
    }

    /**
     * Remove user
     * @type {remove}
     */
    vm.remove = remove;
    function remove(user) {
        User.remove({}, {id: user._id}, function (response) {
            console.log(response);
            if (response.status) {
                $window.Materialize.toast('Usuário ' + user.name + ' removido', 2000);
                loadUsers();
            } else {
                $window.Materialize.toast('Erro ' + response.status, 3000);
            }
        });
    }
}
