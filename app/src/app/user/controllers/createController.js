angular.module('app.user').controller('createController', createController);

createController.$inject = ['$http', '$window', '$state'];

function createController($http, $window, $state) {
    var vm = this;

    vm.page = 'Cadastrar novo Usuário';

    /**
     * Create new User
     * @type {create}
     */
    vm.create = create;
    function create(user) {
        $http.post('http://localhost:3000/api/v1/users', user)
            .then(function (response) {
                var user = response.data;
                $window.Materialize.toast('Usuário ' + user.name + 'foi criado', 1000, null, function () {
                    $state.go('user.index');
                });
            });
    }

}
