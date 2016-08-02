angular.module('app.auth').controller('LoginController', LoginController);

function LoginController($window, $http, $state) {
    var vm = this;

    /**
     * Usuário
     */
    vm.user = {
        email: localStorage.getItem('user.email') || '',
        password: '',
        remember: localStorage.getItem('user.email') || false
    };

    /**
     * Login do Usuário
     */
    vm.login = login;
    function login(user) {

        $http({
            url: 'http://localhost:3000/api/v1/login',
            method: 'POST',
            data: {'email': user.email, 'password': user.password},
        }).then(function (response) {
            if (response.data.success) {
                localStorage.setItem('token', response.data.token);

                if (user.remember === true) {
                    localStorage.setItem('user.email', user.email);
                    localStorage.setItem('user.remember', user.remember);
                } else {
                    localStorage.removeItem('user.remember');
                    localStorage.removeItem('user.email');
                }
                return $state.go('dashboard');
            }

        }, function (error) {
            $window.Materialize.toast(error.data.message, 3000);
        });

    }

}
LoginController.$inject = ['$window', '$http', '$state'];
