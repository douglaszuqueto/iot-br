angular.module('app.user').controller('createController', createController);

createController.$inject = ['$http', '$window'];

function createController($http, $window) {
    var vm = this;

    vm.page = 'Cadastrar novo Usuário';

    /**
     * Create new User
     * @type {create}
     */
    vm.create = create;
    function create(user) {
        console.log(user);
    }

}
