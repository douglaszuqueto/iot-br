angular.module('app.user').controller('indexController', indexController);

indexController.$inject = ['$http', '$window'];

function indexController($http, $window) {
    var vm = this;

    vm.page = 'Usuários';

    $http.get('http://localhost:3000/api/v1/users')
        .then(function (response) {
            vm.users = response.data;
        });

    vm.remove = remove;
    function remove(user) {
        $window.Materialize.toast('Usuário ' + user.name + ' removido', 3000);
    }

}
