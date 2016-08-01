angular.module('app').controller('BaseController', BaseController);

BaseController.$inject = ['$state'];

function BaseController($state) {
    var vm = this;

    vm.user_logged = localStorage.getItem('user.email') || 'Usuário';

    /**
     * User Logout
     * @type {logout}
     */
    vm.logout = logout;
    function logout() {
        localStorage.removeItem('token');
        $state.go('login');
    }
};

