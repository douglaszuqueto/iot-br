angular.module('app').controller('BaseController', BaseController);

BaseController.$inject = [];

function BaseController() {
    var vm = this;

    vm.user_logged = localStorage.getItem('user.email') || 'Usuário';
};

