angular.module('app.user').controller('createController', createController);

createController.$inject = ['$window', '$state', 'User'];

function createController($window, $state, User) {
    var vm = this;

    vm.page = 'Cadastrar novo Usuário';

    /**
     * Create new User
     * @type {create}
     */
    vm.create = create;
    function create(user) {
        var userService = new User(user);
        userService.$save({}, function (response) {
            var user = response.data;
            $window.Materialize.toast('Usuário ' + response.name + 'foi criado', 1000, null, function () {
                $state.go('user.index');
            });
        });
    }

}
